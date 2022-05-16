import {Heading} from '../src/Heading';


const ARG_TYPES = {
    children: {
        description: 'Содержимое `Heading`.',
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
    isTruncated: {
        description: 'Должен ли текст обрезаться (в эллипсы).',
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
    level: {
        description: 'Вес заголовка.',
        table: {
            type: {
                summary: 'string | undefined',
            },
            defaultValue: {
                summary: '2',
            },
        },
        control: {
            type: 'inline-radio',
            options: ['1', '2', '3', '4', '5', '6'],
        },
    },
    numOfLines: {
        description: 'Количество доступных строк (работает в паре с isTruncated).',
        table: {
            type: {
                summary: 'number | undefined',
            },
            defaultValue: {
                summary: '1',
            },
        },
        control: {
            type: 'inline-radio',
            options: [1, 2, 3],
        },
    },
    semantic: {
        description: 'Если `true`, отображается семантический тэг.',
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
    title: 'Content/Heading',
    component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Heading<br> content',
    isRawHTML: false,
    isTruncated: false,
    level: '2',
    numOfLines: 1,
    semantic: true,
    textStyle: undefined,
};
Default.argTypes = {
    ...ARG_TYPES,
};

export const Semantic = Template.bind({});
Semantic.args = {
    ...Default.args,
    children: 'Semantic h1 Heading content',
    level: '1',
};
Semantic.argTypes = {
    ...ARG_TYPES,
};

export const NotSemantic = Template.bind({});
NotSemantic.args = {
    ...Default.args,
    children: 'Not semantic h1 Heading content',
    level: '1',
    semantic: false,
};
NotSemantic.argTypes = {
    ...ARG_TYPES,
};

export const SemanticAndStyled = Template.bind({});
SemanticAndStyled.args = {
    ...Default.args,
    children: 'Semantic h6 and styled as h1 Heading content',
    level: '6',
    textStyle: 'h1',
};
SemanticAndStyled.argTypes = {
    ...ARG_TYPES,
};
