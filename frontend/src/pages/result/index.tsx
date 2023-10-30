import { useEffect, useState } from 'react';
import { ReactComponent as LogoIcon } from '@assets/full_logo.svg';
import { useNavigate, useLocation } from 'react-router-dom';

import styled from 'styled-components';

const FEELINGS_MAIN = ['긍정', '중립', '부정'];
const FEELINGS_DETAIL = ['기쁨', '분노', '평온', '짜증', '슬픔', '불안'];

const Result = () => {
	const [sentence, setSentence] = useState<string>('');
	const [emotion, setEmotion] = useState<string>('');
	const navigate = useNavigate();
	const location = useLocation();
	const [visible, setVisible] = useState(false);
	const [mainSelected, setMainSelected] = useState<string>('');
	const [subSelected, setSubSelected] = useState<string>('');

	const handleClickMain = (str: string) => {
		setMainSelected(str);
	};
	const handleClickSub = (str: string) => {
		setSubSelected(str);
	};
	const handleSendFeedback = () => {
		if (mainSelected && subSelected) {
			navigate('/thanks');
		}
	};

	const handlePrefix = (txt: string) => {
		const c = txt[txt.length - 1];
		const code = c.charCodeAt(0) - 0xac00;
		if (code % 28 !== 0) return '이 느껴집니다.';
		else return '가 느껴집니다.';
	};

	useEffect(() => {
		setSentence(location.state.sentence);
		setEmotion(location.state.emotion);
	}, []);

	return (
		<ResultContainer>
			<LogoSVGIcon />
			<TextSection>
				<TopText>
					입력한 문장은 <span>"</span>
					<span>{sentence}</span>
					<span>"</span> 이며
				</TopText>
				<QuesPart>
					문장에서 <span>{emotion}</span>
					{emotion && handlePrefix(emotion)}
				</QuesPart>
				<MoreText onClick={() => setVisible((prev) => !prev)}>
					감정이 의도와 다르게 분석되었다면 <span>click!</span>
				</MoreText>
				{visible && (
					<BtnSection>
						<p>가장 비슷한 감정을 선택해주세요 :)</p>
						<p>&gt; 대분류 중 하나를 선택해주세요</p>
						<Buttons>
							{FEELINGS_MAIN.map((feel) => (
								<Chip
									key={feel}
									onClick={() => handleClickMain(feel)}
									$isTop={true}
									$isSelected={mainSelected === feel}
								>
									{feel}
								</Chip>
							))}
						</Buttons>
						<p>&gt; 중분류 중 하나를 선택해주세요</p>
						<Buttons>
							{FEELINGS_DETAIL.map((feel) => (
								<Chip
									key={feel}
									$isTop={false}
									onClick={() => handleClickSub(feel)}
									$isSelected={subSelected === feel}
								>
									{feel}
								</Chip>
							))}
						</Buttons>
						<SubmitBtn onClick={handleSendFeedback}>결과 제출하기</SubmitBtn>
					</BtnSection>
				)}
			</TextSection>
		</ResultContainer>
	);
};
export default Result;

const ResultContainer = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	padding: 80px;

	flex-direction: column;
`;
const LogoSVGIcon = styled(LogoIcon)`
	height: 100px;
	margin-bottom: 60px;
`;

const TextSection = styled.div`
	background-color: var(--color-white);
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	padding: 50px;
	border-radius: 20px;
`;
const TopText = styled.div`
	font-size: 24px;
	font-family: var(--font-PRE);
	font-weight: 500;
	line-height: 30px;
	color: #515151;
	padding-bottom: 10px;

	span {
		display: inline-block;
		font-weight: 700;
		font-size: 28px;
		color: var(--color-black);
		max-width: 300px;
		line-height: 30px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
`;
const QuesPart = styled.div`
	line-height: 140%;
	font-size: 24px;
	font-family: var(--font-PRE);
	font-weight: 500;
	line-height: 140%;
	color: #515151;

	span {
		font-weight: 700;
		font-size: 30px;
		color: var(--color-pink);
	}
`;

const MoreText = styled.div`
	line-height: 140%;
	font-size: 16px;
	font-family: var(--font-PRE);
	font-weight: 500;
	line-height: 140%;
	color: #707070;
	text-align: center;
	padding-top: 30px;

	span {
		color: var(--color-pink);
		opacity: 0.9;
	}
	&:hover {
		opacity: 0.7;
		cursor: pointer;
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
			font-size: 24px;
			color: #515252;
		}

		line-height: 140%;
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

const Chip = styled.button<{ $isTop: boolean; $isSelected: boolean }>`
	line-height: 140%;
	font-size: 18px;
	font-family: var(--font-PRE);
	font-weight: 600;
	line-height: 140%;
	padding: 8px 20px;
	border-radius: 14px;
	color: var(--color-white);
	cursor: pointer;
	background-color: ${(props) => (props.$isTop ? 'var(--color-pink)' : 'var(--color-sub-pink)')};
	box-shadow: ${(props) => (props.$isSelected ? '0px 0px 15px 0px rgba(255, 60, 93, 1)' : '')};

	&:hover {
		opacity: 0.8;
	}
`;

const SubmitBtn = styled.button`
	color: var(--color-pink);
	font-size: 18px;
	font-family: var(--font-PRE);
	font-weight: 600;
	line-height: 140%;
	padding: 12px 20px;
	border: 1px solid var(--color-pink);
	border-radius: 20px;
	margin-top: 50px;
	background-color: var(--color-white);
	cursor: pointer;
`;
