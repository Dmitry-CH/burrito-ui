import {Text} from '../src/Text';


const ARG_TYPES = {
    as: {
        description: 'Установить тип HTML элемента.',
        table: {
            type: {
                summary: 'string | undefined',
            },
            defaultValue: {
                summary: 'span',
            },
        },
    },
    children: {
        description: 'Содержимое `Text`.',
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
    title: 'Basic/Text',
    component: Text,
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    as: 'span',
    children: 'Text<br> content',
    isRawHTML: false,
    isTruncated: false,
    numOfLines: 1,
    textStyle: undefined,
};
Default.argTypes = {
    ...ARG_TYPES,
};

export const SemanticParagraph = Template.bind({});
SemanticParagraph.args = {
    ...Default.args,
    as: 'p',
    children: 'Paragraph \'p\' with typo \'p2\'',
    textStyle: 'p2',
};
SemanticParagraph.argTypes = {
    ...ARG_TYPES,
};

export const NotSemanticParagraph = Template.bind({});
NotSemanticParagraph.args = {
    ...Default.args,
    as: 'div',
    children: 'Paragraph \'div\' with typo \'p2\'',
    textStyle: 'p2',
};
NotSemanticParagraph.argTypes = {
    ...ARG_TYPES,
};
