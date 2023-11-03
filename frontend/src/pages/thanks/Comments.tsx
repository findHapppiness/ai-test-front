import { styled } from 'styled-components';
import { useEffect, useRef } from 'react';

const utterancesSettings = {
	src: 'https://utteranc.es/client.js',
	repo: 'FindHappppiness/ai-comments',
	'issue-term': 'pathname',
	label: 'comments',
	theme: 'github-light',
	crossorigin: 'anonymous',
	async: 'true',
};

const Comments = () => {
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (ref.current !== null) {
			const utterances = document.createElement('script');

			Object.entries(utterancesSettings).forEach(([key, value]) => {
				utterances.setAttribute(key, value);
			});

			ref.current?.appendChild(utterances);
		}
	}, []);

	return <CommentsContainer ref={ref} />;
};

export default Comments;

const CommentsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
