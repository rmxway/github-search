import { forwardRef, Ref } from 'react';

type InputUIProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const InputUI = forwardRef(
	({ children, value, onClear, ...props }: InputUIProps & { onClear?: () => void }, ref: Ref<HTMLInputElement>) => (
		<label htmlFor="search" className="w-full block relative h-[40px]">
			<input
				id="search"
				type="text"
				className="ps-5 border-gray-300 w-full h-full focus:border-gray-400
          transition-all bg-slate-50 outline-none border rounded-[8px] overflow-hidden"
				{...{ value }}
				{...props}
				ref={ref}
			/>
			{value && value?.toString().length > 0 && (
				<button
					className="absolute z-10 top-0 right-0 text-2xl w-[40px]
                    h-full pb-1 text-gray-400"
					onClick={onClear}
				>
					&times;
				</button>
			)}
			{children}
		</label>
	),
);

export default InputUI;
