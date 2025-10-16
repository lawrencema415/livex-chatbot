import type { ReactNode } from 'react';

export function highlightText(
	text: string,
	search: string
): (string | ReactNode)[] {
	if (!search || search.trim() === '') {
		return [text];
	}

	const parts: (string | ReactNode)[] = [];
	let lastIndex = 0;
	const searchLower = search.toLowerCase();
	const textLower = text.toLowerCase();

	let match;
	const regex = new RegExp(searchLower, 'gi');

	while ((match = regex.exec(textLower)) !== null) {
		const startIndex = match.index;
		const endIndex = regex.lastIndex;

		if (startIndex > lastIndex) {
			parts.push(text.substring(lastIndex, startIndex));
		}

		const highlighted = text.substring(startIndex, endIndex);

		parts.push(
			<span key={startIndex} className='bg-yellow font-bold'>
				{highlighted}
			</span>
		);

		lastIndex = endIndex;
	}

	if (lastIndex < text.length) {
		parts.push(text.substring(lastIndex));
	}

	return parts;
}
