import { ButtonUI } from '@/components/ui';

export const UIPage = () => (
	<div>
		<div className="flex gap-4">
			<ButtonUI>Default</ButtonUI>
			<ButtonUI primary>Primary</ButtonUI>
			<ButtonUI secondary>Secondary</ButtonUI>
			<ButtonUI danger>Danger</ButtonUI>
			<ButtonUI success>Success</ButtonUI>
		</div>
	</div>
);
export default UIPage;
