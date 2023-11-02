import styled from 'styled-components';

const ContactSection = () => {
	return (
		<ContactSectionContainer>
			행복을 찾아서 : 서장호 | 이상협 | 이정민 | 류현주
		</ContactSectionContainer>
	);
};

export default ContactSection;

const ContactSectionContainer = styled.div`
	width: 70%;
	display: flex;
	align-items: center;
	color: var(--color-white);

	display: flex;
	gap: 0 20px;
	align-items: center;
	justify-content: center;
	white-space: wrap;
	flex-wrap: wrap;

	letter-spacing: 0.5px;
	text-align: center;
	line-height: 160%;
	color: #737373;
	font-family: var(--font-PRE);
	font-weight: 500;
	font-size: 14px;
	padding-top: 30px;
`;
