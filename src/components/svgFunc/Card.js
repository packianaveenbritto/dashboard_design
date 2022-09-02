import React from 'react';

export const CreditCardIco = ({color}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill={color}>
			<defs>
				<pattern
					id='pattern'
					preserveAspectRatio='xMidYMid slice'
					width='100%'
					height='100%'
					viewBox='0 0 128 128'>
					<image
						width='128'
						height='128'
						xlinkHref='data:image/png;base64,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'
					/>
				</pattern>
			</defs>
			<rect
				id='credit-card_2_'
				data-name='credit-card (2)'
				width='20'
				height='20'
				fill='url(#pattern)'
			/>
		</svg>
	);
};