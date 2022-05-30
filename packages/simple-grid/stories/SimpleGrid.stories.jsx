import {Box} from '../../box';

import {SimpleGrid} from '../src/SimpleGrid';


const ARG_TYPES = {
    children: {
        description: 'Содержимое `SimpleGrid`.',
        table: {
            type: {
                summary: 'ReactNode | undefined',
            },
            defaultValue: {
                summary: 'undefined',
            },
        },
        type: {
            required: true,
        },
    },
    columns: {
        description: 'Количество столбцов (макс. 12 колонок).',
        table: {
            type: {
                summary: 'number | (number|null)[] | undefined',
            },
            defaultValue: {
                summary: '1',
            },
        },
        control: {
            type: 'number',
        },
    },
    isRawHTML: {
        description: 'Если `true`, отобразить `raw` HTML.',
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
    rows: {
        description: 'Количество столбцов.',
        table: {
            type: {
                summary: 'number | (number|null)[] | undefined',
            },
            defaultValue: {
                summary: 'undefined',
            },
        },
        control: {
            type: 'number',
        },
    },
    spacing: {
        description: '`Gap` между элементами сетки.',
        table: {
            type: {
                summary: 'number | (number|null)[] | undefined',
            },
            defaultValue: {
                summary: 'undefined',
            },
        },
        control: {
            type: 'number',
        },
    },
    spacingX: {
        description: '`Gap` между столбцами сетки.',
        table: {
            type: {
                summary: 'number | (number|null)[] | undefined',
            },
            defaultValue: {
                summary: 'undefined',
            },
        },
        control: {
            type: 'number',
        },
    },
    spacingY: {
        description: '`Gap` между строками сетки.',
        table: {
            type: {
                summary: 'number | (number|null)[] | undefined',
            },
            defaultValue: {
                summary: 'undefined',
            },
        },
        control: {
            type: 'number',
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
    title: 'Layout/SimpleGrid',
    component: SimpleGrid,
    decorators: [
        (Story) => (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}
            >
                <Story />
            </div>
        ),
    ],
    parameters: {
        docs: {
            source: {
                type: 'dynamic',
                excludeDecorators: true,
            },
        },
        layout: 'fullscreen',
    },
};

const Template = (args) => (
    <SimpleGrid {...args}>
        <Box bg="tomato" height={40} />
        <Box bg="tomato" height={40} />
        <Box bg="tomato" height={40} />
        <Box bg="tomato" height={40} />
        <Box bg="tomato" height={40} />
        <Box bg="tomato" height={40} />
        <Box bg="tomato" height={40} />
        <Box bg="tomato" height={40} />
        <Box bg="tomato" height={40} />
        <Box bg="tomato" height={40} />
        <Box bg="tomato" height={40} />
        <Box bg="tomato" height={40} />
    </SimpleGrid>
);

export const Default = Template.bind({});
Default.args = {
    columns: 2,
    isRawHTML: false,
    rows: undefined,
    spacing: 2,
    spacingX: undefined,
    spacingY: undefined,
};
Default.argTypes = {
    ...ARG_TYPES,
    children: {
        control: false,
    },
};

export const DiffSpacing = Template.bind({});
DiffSpacing.args = {
    ...Default.args,
    columns: 4,
    spacingX: 12,
    spacingY: 4,
};
DiffSpacing.argTypes = {
    ...ARG_TYPES,
    children: {
        table: {
            disable: true,
        },
    },
};

export const RawChildren = (args) => <SimpleGrid {...args} />;
RawChildren.args = {
    ...Default.args,
    children: [
        '<div style="background: tomato; height: 160px;"></div>',
        '<div style="background: tomato; height: 160px;"></div>',
        '<div style="background: tomato; height: 160px;"></div>',
    ].join(''),
    columns: 3,
    isRawHTML: true,
};
RawChildren.argTypes = {
    ...ARG_TYPES,
    children: {
        table: {
            disable: true,
        },
    },
};
