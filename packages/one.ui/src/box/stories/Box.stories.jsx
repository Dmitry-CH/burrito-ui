import {Box} from '../src/Box';


const ARG_TYPES = {
    as: {
        description: 'Установить тип HTML элемента.',
        table: {
            type: {
                summary: 'string | undefined',
            },
            defaultValue: {
                summary: 'div',
            },
        },
    },
    children: {
        description: 'Содержимое `Box`.',
        table: {
            type: {
                summary: 'ReactNode | undefined',
            },
            defaultValue: {
                summary: 'undefined',
            },
        },
    },
    isRawHTML: {
        description: 'Если `true`, отобразить raw HTML.',
        table: {
            type: {
                summary: 'boolean | undefined',
            },
            defaultValue: {
                summary: 'false',
            },
        },
        control: {
            type: 'boolean',
        },
    },
    textStyle: {
        description: 'Типографика: h1-h6, p1-p4, btn, lead.',
        table: {
            type: {
                summary: 'string | undefined',
            },
            defaultValue: {
                summary: 'undefined',
            },
        },
        control: {
            type: 'inline-radio',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p1', 'p2', 'p3', 'p4', 'btn', 'lead'],
        },
    },
};

export default {
    title: 'Basic/Box',
    component: Box,
};

const Template = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
    as: 'div',
    children: 'Box<br> content',
    isRawHTML: false,
    textStyle: void 0,
};
Default.argTypes = {
    ...ARG_TYPES,
};

export const Label = Template.bind({});
Label.args = {
    ...Default.args,
    bg: 'info',
    borderRadius: '16px',
    children: 'simple label',
    color: 'white',
    px: 3,
    py: 2,
};
Label.argTypes = {
    ...ARG_TYPES,
};
