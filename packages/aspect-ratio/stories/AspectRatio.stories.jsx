import {Box} from '../../box';

import {AspectRatio} from '../src/AspectRatio';


const ARG_TYPES = {
    children: {
        description: 'Содержимое `AspectRatio`.',
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
    ratio: {
        description: 'Соотношение сторон.',
        table: {
            type: {
                summary: 'string | undefined',
            },
            defaultValue: {
                summary: '16x9',
            },
        },
        control: {
            type: 'select',
            options: ['32x9', '21x9', '16x9', '4x3', '1x1'],
        },
    },
};

export default {
    title: 'Layout/AspectRatio',
    component: AspectRatio,
};

const Template = (args) => (
    <AspectRatio w="640px" {...args}>
        <Box
            bg="#e74c3c"
            w="200px"
            h="200px"
        />
    </AspectRatio>
);

export const Default = Template.bind({});
Default.args = {
    isRawHTML: false,
    ratio: ['16x9', '21x9'],
};
Default.argTypes = {
    ...ARG_TYPES,
};