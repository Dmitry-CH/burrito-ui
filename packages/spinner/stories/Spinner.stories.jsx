import {Spinner} from '../src/Spinner';


const ARG_TYPES = {
    children: {
        description: 'Содержимое `Spinner`.',
        table: {
            type: {
                summary: 'ReactNode | undefined',
            },
            defaultValue: {
                summary: 'undefined',
            },
        },
    },
    duration: {
        description: 'Скорость анимации (сокращение для animationDuration).',
        table: {
            type: {
                summary: 'string | undefined',
            },
            defaultValue: {
                summary: '1500ms',
            },
        },
        control: {
            type: 'text',
        },
    },
    isLoading: {
        description: 'Если `true` показываем spinner.',
        table: {
            type: {
                summary: 'boolean | undefined',
            },
            defaultValue: {
                summary: 'true',
            },
        },
        control: {
            type: 'boolean',
        },
    },
    size: {
        description: 'Размер спиннера.',
        table: {
            type: {
                summary: 'string | undefined',
            },
            defaultValue: {
                summary: 'undefined',
            },
        },
        control: {
            type: 'text',
        },
    },
};

export default {
    title: 'Feedback/Spinner',
    component: Spinner,
};

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
    duration: '2000ms',
    isLoading: true,
    size: '2.5rem',
};
Default.argTypes = {
    ...ARG_TYPES,
};

export const WithChildren = Template.bind({});
WithChildren.args = {
    ...Default.args,
    children: <h2>After Spinner</h2>,
    isLoading: false,
};
WithChildren.argTypes = {
    ...ARG_TYPES,
    children: {
        table: {
            disable: true,
        },
    },
};
