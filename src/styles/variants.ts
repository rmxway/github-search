import { Variants } from 'framer-motion';

export const dropdownVariants: Variants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.1,
		},
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.1,
		},
	},
};

export const variantsFavorite: Variants = {
	hidden: {
		opacity: 0,
		x: 60,
	},
	visible: {
		opacity: 1,
		x: 0,
	},
};
