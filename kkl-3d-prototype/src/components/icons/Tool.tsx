import React from 'react';

const Tool = ({ ...props }) => {
	return (
		<svg width='44' height='44' viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='M43.4002 35.9L25.1002 17.6C26.9002 13 25.9002 7.49999 22.2002 3.79999C18.2002 -0.200013 12.2002 -1.00001 7.40017 1.29999L16.1002 9.99999L10.0002 16.1L1.30017 7.39999C-0.999831 12.2 -0.19983 18.2 3.80017 22.2C7.50017 25.9 13.0002 26.9 17.6002 25.1L35.9002 43.4C36.7002 44.2 38.0002 44.2 38.7002 43.4L43.4002 38.7C44.2002 38 44.2002 36.7 43.4002 35.9Z' />
		</svg>
	);
};

export default Tool;