import { Meta, StoryObj } from '@storybook/react/*';
import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;

type Story = StoryObj<typeof ArrowButton>;

export const ArrowButtonStory: Story = {
	render: ({ isOpened, onClick }) => (
		<>
			<ArrowButton isOpened={isOpened} onClick={onClick} />
		</>
	),
	parameters: {
		controls: {
			type: 'object',
			props: {
				isOpened: { control: 'boolean' },
				onClick: { control: 'function' },
			},
		},
	},
};
