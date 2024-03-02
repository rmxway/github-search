import cn from 'classnames';
import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	primary?: boolean;
	secondary?: boolean;
	danger?: boolean;
	success?: boolean;
}

export const ButtonUI = ({ primary, secondary, danger, success, className, children, ...props }: ButtonProps) => {
	const btnClass = `${cn({
		'inline-block border-2 active:opacity-85 hover:opacity-95 rounded-full p-[6px_15px] text-white text-sm': true,
		'!text-gray-500 border-gray-300': !primary && !secondary && !danger && !success,
		'bg-gray-400 border-[#8e8e8e]': primary,
		'bg-[#ffc3a0] border-[#eda174] text-[#731d0f]': secondary,
		'bg-[#f33a5f] border-[#c72747]': danger,
		'bg-[#a0e939] border-lime-500 text-[#315c0c]': success,
		[`${className}`]: className,
	})}`;

	return (
		<button className={btnClass} {...props}>
			{children}
		</button>
	);
};

export default ButtonUI;
