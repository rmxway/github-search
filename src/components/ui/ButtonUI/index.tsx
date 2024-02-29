import { ElementType } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
	as?: ElementType | typeof Link;
	link?: string;
	className?: string;
	children?: React.ReactNode;
}

type ButtonUIType = ButtonProps;

export const ButtonUI = ({ as: Tag = 'button', link, className, children, ...props }: ButtonUIType) => {
	if (link) {
		Tag = Link;
	}

	return (
		<Tag
			to={link}
			className={`${className} inline-block border border-gray-300 rounded-md p-[5px_10px] text-gray-600 text-sm active:text-gray-500`}
			{...props}
		>
			{children}
		</Tag>
	);
};

export default ButtonUI;
