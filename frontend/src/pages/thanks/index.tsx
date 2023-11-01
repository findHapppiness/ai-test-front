import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '@assets/full_logo.svg';
import { useNavigate } from 'react-router-dom';
import ContactSection from './ContactSection';

const Thanks = () => {
	const navigate = useNavigate();

	return (
		<ThanksContainer>
			<LogoSVGIcon onClick={() => navigate('/')} />
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
			</InnerContents>
			<ContactSection />
		</ThanksContainer>
	);
};
export default Thanks;

const ThanksContainer = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	padding: 80px 0;
	justify-content: center;
	flex-direction: column;
`;
const LogoSVGIcon = styled(LogoIcon)`
	height: 100px;
	margin-bottom: 60px;
	cursor: pointer;
`;

const InnerContents = styled.div`
	background-color: var(--color-white);
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 85%;
	padding: 50px;
	border-radius: 20px;
`;
const Title = styled.div`
	font-size: 24px;
	font-family: var(--font-PRE);
	font-weight: 500;
	line-height: 30px;
	text-align: center;
	padding-bottom: 10px;
`;

const ButtonSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0 30px;
	margin-bottom: 10px;
	width: 100%;
	flex-wrap: wrap;
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
	white-space: nowrap;

	color: ${(props) => (props.$fullColored ? 'var(--color-white)' : 'var(--color-pink)')};
	border: ${(props) =>
		props.$fullColored ? '1px solid var(--color-pink)' : '1px solid var(--color-pink)'};
	cursor: pointer;
`;
