import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '@assets/full_logo.svg';
import { useNavigate } from 'react-router-dom';

const Thanks = () => {
	const navigate = useNavigate();

	return (
		<ThanksContainer>
			<LogoSVGIcon />
			<InnerContents>
				<Title>소중한 답변 감사합니다 :)</Title>
				<ButtonSection>
					<MoveBtn $fullColored={false} onClick={() => navigate(-1)}>
						뒤로 가기
					</MoveBtn>
					<MoveBtn $fullColored={true} onClick={() => navigate('/')}>
						처음으로 돌아가기
					</MoveBtn>
				</ButtonSection>
				<MoreSection>
					<p>
						서장호 (jangho_seo@tmax.co.kr) | 이상협(sanghyeop_lee@tmax.co.kr)
						<br /> 이정민 (jeongmin_lee2@tmax.co.kr) | 류현주 (hyunju_ryu@tmax.co.kr)
					</p>
				</MoreSection>
			</InnerContents>
		</ThanksContainer>
	);
};
export default Thanks;

const ThanksContainer = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	align-items: center;
	padding: 100px;
	justify-content: center;
	flex-direction: column;
`;
const LogoSVGIcon = styled(LogoIcon)`
	height: 150px;
	margin-bottom: 70px;
`;

const InnerContents = styled.div`
	background-color: var(--color-white);
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 70%;
	padding: 50px;
	border-radius: 20px;
`;
const Title = styled.div`
	font-size: 24px;
	font-family: var(--font-PRE);
	font-weight: 500;
	line-height: 30px;

	padding-bottom: 10px;
`;

const MoveBtn = styled.button<{ $fullColored: boolean }>`
	background-color: ${(props) => (props.$fullColored ? 'var(--color-pink)' : 'var(--color-white)')};
	font-size: 18px;
	font-family: var(--font-PRE);
	font-weight: 600;
	line-height: 140%;
	padding: 12px 20px;
	border-radius: 20px;
	margin-top: 30px;

	color: ${(props) => (props.$fullColored ? 'var(--color-white)' : 'var(--color-pink)')};
	border: ${(props) =>
		props.$fullColored ? '1px solid var(--color-pink)' : '1px solid var(--color-pink)'};
	cursor: pointer;
`;

const ButtonSection = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	margin-bottom: 10px;
`;

const MoreSection = styled.div`
	width: 100%;
	margin-top: 40px;
	border-top: 1px solid var(--color-pink);
	display: flex;
	align-items: center;
	justify-content: center;

	p {
		letter-spacing: 0.5px;
		padding-top: 20px;
		text-align: center;
		line-height: 160%;
		color: #737373;
		font-family: var(--font-PRE);
		font-weight: 500;
		font-size: 16px;
	}
`;