import {Text} from '../../text';

import {Price} from '../src/Price';


const ARG_TYPES = {
    children: {
        description: 'Содержимое `Price`.',
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
    currency: {
        description: 'Установить валюту.',
        table: {
            type: {
                summary: 'string | undefined',
            },
            defaultValue: {
                summary: '\'RUB\'',
            },
        },
    },
    customFormat: {
        description: 'Определить кастомную функцию форматирования.',
        table: {
            type: {
                summary: 'function | undefined',
            },
            defaultValue: {
                summary: 'undefined',
            },
        },
        control: false,
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
    locale: {
        description: 'Установить локаль.',
        table: {
            type: {
                summary: 'string | undefined',
            },
            defaultValue: {
                summary: '\'ru-RU\'',
            },
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
    title: 'Data Display/Price',
    component: Price,
};

const Template = (args) => <Price {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 123456.789,
    currency: 'RUB',
    customFormat: undefined,
    isRawHTML: false,
    isTruncated: false,
    locale: 'ru-RU',
    numOfLines: 1,
    textStyle: undefined,
};
Default.argTypes = {
    ...ARG_TYPES,
};

export const CustomFun = Template.bind({});
CustomFun.args = {
    ...Default.args,
    customFormat: (v) => (
        `${new Intl.NumberFormat('ru-RU', {maximumFractionDigits: 2}).format(v)} ♠`
    ),
};
CustomFun.argTypes = {
    ...ARG_TYPES,
};

export const WithTextstyle = (args) => (
    <>
        <Text color="brand.primary" textStyle="h2">
            {'Какой то текст '}
            <Price
                currency="USD"
                locale="en"
            >
                a123456.789a
            </Price>
        </Text>
        <br />
        <Text color="brand.primary" textStyle="p1">
            {'Какой то текст '}
            <Price
                currency="KZT"
                locale="ru-KZ"
                textStyle="h2"
            >
                12a3456.789
            </Price>
        </Text>
    </>
);
