import { AnchorHTMLAttributes } from 'react';

export const LinkUI = ({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
	<a className={`text-blue-500`} {...props}>
		{children}
	</a>
);

export default LinkUI;
