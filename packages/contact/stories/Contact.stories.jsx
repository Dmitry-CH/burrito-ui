import {Text} from '../../text';

import {Contact} from '../src/Contact';


const ARG_TYPES = {
    children: {
        description: 'Содержимое `Contact`.',
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
    title: 'Data Display/Contact',
    component: Contact,
};

const Template = (args) => <Contact {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: '+7(999) 111-11-11',
    customFormat: undefined,
    isRawHTML: false,
    isTruncated: false,
    numOfLines: 1,
    textStyle: undefined,
};
Default.argTypes = {
    ...ARG_TYPES,
};

export const CustomFun = (args) => (
    <Contact customFormat={(s) => s.replace(/\s/g, '-')}>
        8 999 111 11 11
    </Contact>
);

export const Email = (args) => (
    <Contact>test@test.ru</Contact>
);

export const WithTextstyle = (args) => (
    <>
        <Text color="brand.primary" textStyle="h2">
            {'Какой то текст '}
            <Contact>8 999 111 11 11</Contact>
        </Text>
        <br />
        <Text color="brand.primary" textStyle="p1">
            {'Какой то текст '}
            <Contact color="inherit" textStyle="h2">8 999 111 11 11</Contact>
        </Text>
    </>
);
