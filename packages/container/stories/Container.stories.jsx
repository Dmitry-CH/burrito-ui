import {Container} from '../src/Container';


const ARG_TYPES = {
    children: {
        description: 'Содержимое `Container`.',
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
    posX: {
        description: 'Положение содержимого в контейнере по горизонтали.',
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
            options: ['left', 'center', 'right'],
        },
    },
    posY: {
        description: 'Положение содержимого в контейнере по вертикалии (при наличии высоты).',
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
            options: ['top', 'center', 'bottom'],
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
    title: 'Layout/Container',
    component: Container,
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

const Template = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Container content',
    isRawHTML: false,
    posX: 'left',
    posY: 'top',
    textStyle: undefined,
};
Default.argTypes = {
    ...ARG_TYPES,
};

export const CentredContainer = Template.bind({});
CentredContainer.args = {
    ...Default.args,
    bg: 'grey.50',
    h: 60,
    posX: 'center',
    posY: 'center',
};
CentredContainer.argTypes = {
    ...ARG_TYPES,
    bg: {
        table: {
            disable: true,
        },
    },
    h: {
        table: {
            disable: true,
        },
    },
};
