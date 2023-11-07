import styled from 'styled-components';

interface EmotionChipProps {
	selected: boolean;
	isTop: boolean;
	text: string;
	onClick: () => void;
}
const EmotionChip = ({ selected, isTop, text, onClick }: EmotionChipProps) => {
	return (
		<Chip onClick={onClick} $isTop={isTop} $isSelected={selected}>
			{text}
		</Chip>
	);
};

export default EmotionChip;

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
