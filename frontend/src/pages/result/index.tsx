import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { ReactComponent as LogoIcon } from '@assets/full_logo.svg';
import { useNavigate, useLocation } from 'react-router-dom';

import { request } from '@api/index';
import TooltipBox from '@components/TooltipBox';
import EmotionChip from './EmotionChip';

const FEELINGS_MAIN = ['긍정', '중립', '부정'];
const FEELINGS_DETAIL = ['기쁨', '분노', '평온', '짜증', '슬픔', '불안', '아무감정없음'];

const Result = () => {
	const [sentence, setSentence] = useState<string>('');
	const [emotion, setEmotion] = useState<string>('');
	const navigate = useNavigate();
	const location = useLocation();
	const [visible, setVisible] = useState(false);
	const [mainSelected, setMainSelected] = useState<string>('');
	const [subSelected, setSubSelected] = useState<string>('');

	const [visibleTool, setVisibleTool] = useState(false);

	const handleTooltip = () => {
		if (!visibleTool) {
			setVisibleTool(true);
			setTimeout(() => {
				setVisibleTool(false);
			}, 2000);
		}
	};

	const handleClickMain = (str: string) => {
		setMainSelected(str);
	};
	const handleClickSub = (str: string) => {
		setSubSelected(str);
	};
	const handleSendFeedback = async () => {
		if (mainSelected && subSelected) {
			const { status } = await request({
				method: 'POST',
				url: 'feedback',
				reqData: {
					sentence: sentence,
					mainEmotion: mainSelected,
					subEmotion: subSelected,
				},
			});
			if (status === 200) {
				navigate('/thanks');
			} else {
				console.log('서비스 에러');
			}
		} else {
			handleTooltip();
		}
	};

	const handlePrefix = (txt: string) => {
		const c = txt[txt.length - 1];
		const code = c.charCodeAt(0) - 0xac00;
		if (code % 28 !== 0) return '이 느껴집니다.';
		else return '가 느껴집니다.';
	};

	useEffect(() => {
		// 상태 초기화
		setSentence(location.state.sentence);
		setEmotion(location.state.emotion);
	}, []);

	return (
		<ResultContainer>
			<LogoSVGIcon onClick={() => navigate('/')} />
			<TextSection>
				<TopText>
					입력한 문장은
					<p>&nbsp;{sentence}&nbsp;</p>
					이며
				</TopText>
				<QuesPart>
					문장에서 <span>{emotion}</span>
					{emotion && handlePrefix(emotion)}
				</QuesPart>
				<MoreText onClick={() => setVisible((prev) => !prev)}>
					감정이 의도와 다르게 분석되었다면 &nbsp;<span>&nbsp; click!</span>
				</MoreText>
				{visible && (
					<BtnSection>
						<p>가장 비슷한 감정을 선택해주세요!</p>
						<p>&gt; 대분류 중 하나를 선택해주세요</p>
						<Buttons>
							{FEELINGS_MAIN.map((feel) => (
								<EmotionChip
									key={feel}
									onClick={() => handleClickMain(feel)}
									isTop={true}
									selected={mainSelected === feel}
									text={feel}
								/>
							))}
						</Buttons>
						<p>&gt; 중분류 중 하나를 선택해주세요</p>
						<Buttons>
							{FEELINGS_DETAIL.map((feel) => (
								<EmotionChip
									key={feel}
									isTop={false}
									onClick={() => handleClickSub(feel)}
									selected={subSelected === feel}
									text={feel}
								/>
							))}
						</Buttons>
					</BtnSection>
				)}
			</TextSection>
			<MoveButtonSection>
				<Btn onClick={() => navigate('/')}>뒤로 가기</Btn>
				{visible ? (
					<NextBtn onClick={handleSendFeedback}>결과 제출</NextBtn>
				) : (
					<NextBtn onClick={() => navigate('/thanks')}>마치기</NextBtn>
				)}
			</MoveButtonSection>
			{visibleTool && <TooltipBox txt="대분류, 중분류를 하나씩 선택해주세요" />}
		</ResultContainer>
	);
};
export default Result;

const ResultContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 80px 0;

	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
		width: 0 !important;
	}
`;
const LogoSVGIcon = styled(LogoIcon)`
	height: 100px;
	margin-bottom: 60px;
	cursor: pointer;
`;

const TextSection = styled.div`
	background-color: var(--color-white);
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 85%;
	max-width: 800px;
	padding: 50px 40px;
	border-radius: 20px;
`;

const TopText = styled.div`
	font-size: 22px;
	font-family: var(--font-PRE);
	font-weight: 500;
	line-height: 140%;
	color: #515151;
	padding-bottom: 10px;
	text-align: center;
	vertical-align: middle;

	p {
		display: inline;
		font-weight: 700;
		font-size: 24px;
		color: var(--color-black);
		max-width: 300px;
		line-height: 140%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
`;
const QuesPart = styled.div`
	line-height: 140%;
	font-size: 22px;
	font-family: var(--font-PRE);
	font-weight: 500;
	line-height: 140%;
	color: #515151;
	text-align: center;
	white-space: nowrap;

	span {
		font-weight: 700;
		font-size: 26px;
		color: var(--color-pink);
	}
`;

const MoreText = styled.div`
	line-height: 140%;
	font-size: 18px;
	font-family: var(--font-PRE);
	font-weight: 500;
	line-height: 140%;
	text-align: center;
	margin-top: 30px;
	white-space: nowrap;
	padding-bottom: 4px;
	/* border: 2px solid var(--color-pink); */

	color: var(--color-white);
	opacity: 0.8;
	border-radius: 10px;
	padding: 10px 20px;
	background-color: var(--color-sub-pink);

	span {
		border-left: 2px solid var(--color-white);
		padding-left: 5px;
		color: var(--color-pink);
		font-weight: 800;
	}

	&:hover {
		opacity: 1;
		cursor: pointer;
		color: var(--color-sub-pink);
		background-color: transparent;
	}
`;

const BtnSection = styled.div`
	width: 100%;
	margin-top: 40px;
	border-top: 1px solid var(--color-pink);
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		&:first-child {
			padding: 30px 0 10px 0;
			font-size: 22px;
			color: #515252;
		}
		white-space: nowrap;
		font-size: 20px;
		font-family: var(--font-PRE);
		font-weight: 500;
		line-height: 140%;
		color: #666666;
		text-align: center;
		padding-top: 20px;
	}
`;

const Buttons = styled.div`
	width: 100%;
	gap: 10px 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 20px 0;
`;

const MoveButtonSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0 30px;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin-top: 40px;
`;

const Btn = styled.button`
	color: var(--color-pink);
	font-size: 18px;
	font-family: var(--font-PRE);
	font-weight: 600;
	line-height: 140%;
	padding: 12px 20px;
	border: 1px solid var(--color-pink);
	border-radius: 20px;
	background-color: var(--color-white);
	cursor: pointer;

	&:hover {
		opacity: 0.7;
		box-shadow: 0px 0px 10px 0px rgba(255, 113, 116, 0.4);
	}
`;

const NextBtn = styled(Btn)`
	background-color: var(--color-pink);
	color: var(--color-white);
`;
