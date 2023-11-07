import styled from 'styled-components';

const TooltipBox = ({ txt }: { txt: string }) => {
	return (
		<TooltipBoxContainer>
			{txt.split('\n')[0]}
			{txt.split('\n').length > 1 && <br />}
			{txt.split('\n').length > 1 && txt.split('\n')[1]}
		</TooltipBoxContainer>
	);
};

export default TooltipBox;

const TooltipBoxContainer = styled.div`
	padding: 8px 12px;
	display: flex;
	border-radius: 2px;

	justify-content: center;
	align-items: center;

	color: var(--color-white);
	background-color: #292e37;

	font-family: var(--font-PRE);
	font-size: 16px;
	font-weight: 400;
	line-height: 140%;
	letter-spacing: -0.28px;

	position: fixed;

	bottom: 100px;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	white-space: nowrap;

	z-index: 400;
`;
