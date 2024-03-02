import { AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

export const LinkUI = ({ children, href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
	<Link to={href || ''} className={`text-blue-500 hover:text-orange-500 transition`} {...props}>
		{children}
	</Link>
);

export default LinkUI;
