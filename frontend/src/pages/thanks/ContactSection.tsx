import styled from 'styled-components';

const ContactSection = () => {
	return (
		<ContactSectionContainer>
			<p>서장호 (jangho_seo@tmax.co.kr)</p>
			<p>이상협(sanghyeop_lee@tmax.co.kr)</p>
			<p>이정민 (jeongmin_lee2@tmax.co.kr)</p> <p>류현주 (hyunju_ryu@tmax.co.kr)</p>
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

	p {
		white-space: nowrap;
	}

	letter-spacing: 0.5px;
	text-align: center;
	line-height: 160%;
	color: #737373;
	font-family: var(--font-PRE);
	font-weight: 500;
	font-size: 14px;
	padding-top: 30px;
`;
