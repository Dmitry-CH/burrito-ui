import {SimpleGrid} from '../../SimpleGrid';

import {GridItem} from '../src/GridItem';


const ARG_TYPES = {
    children: {
        description: 'Содержимое `GridItem`.',
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
    title: 'Layout/GridItem',
    component: GridItem,
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

const Template1 = (args) => (
    <SimpleGrid columns={12}>
        <GridItem
            bg="tomato"
            h="100px"
            p="2"
            {...args}
        >
            {'<i>N:</i> 1'}
        </GridItem>
    </SimpleGrid>
);

const Template2 = (args) => (
    <SimpleGrid
        columns={12}
        rows={2}
        rowsH="100px"
    >
        {args.items.map((item, i) => (
            <GridItem
                key={i}
                bg="tomato"
                p="2"
                {...item}
            >
                {i + 1}
            </GridItem>
        ))}
    </SimpleGrid>
);

export const Default = Template1.bind({});
Default.args = {
    colSpan: 8,
    colStart: 3,
    colEnd: undefined,
    isRawHTML: false,
    rowSpan: undefined,
    rowStart: undefined,
    rowEnd: undefined,
};
Default.argTypes = {
    ...ARG_TYPES,
    children: {
        table: {
            disable: true,
        },
    },
};

export const TwoRows = Template2.bind({});
TwoRows.args = {
    items: [
        {
            bg: 'tomato',
            colStart: 1,
            colSpan: 2,
            rowStart: 1,
            rowSpan: 2,
        },
        {
            bg: 'peru',
            colStart: 3,
            colEnd: 13,
            rowStart: 1,
            rowSpan: 1,
        },
        {
            bg: 'green',
            colStart: 3,
            colEnd: 13,
            rowStart: 2,
            rowSpan: 1,
        },
    ],
};
TwoRows.argTypes = {
    items: {
        table: {
            disable: true,
        },
    },
};
