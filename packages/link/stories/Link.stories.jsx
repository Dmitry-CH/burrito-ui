import {Link} from '../src/Link';


const ARG_TYPES = {
    children: {
        description: 'Содержимое `Link`.',
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
    href: {
        description: 'Ссылка для перехода (или якорь).',
        table: {
            type: {
                summary: 'string',
            },
            defaultValue: {
                summary: 'undefined',
            },
        },
        type: {
            required: true,
        },
    },
    isDisabled: {
        description: 'Если `true`, заблокировать ссылку.',
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
    isExternal: {
        description: 'Если `true`, добавит атрибуты target и rel.',
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
    leftIcon: {
        description: 'Добавить иконку слева.',
        table: {
            type: {
                summary: 'ReactNode | undefined',
            },
            defaultValue: {
                summary: 'undefined',
            },
        },
        control: false,
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
    rightIcon: {
        description: 'Добавить иконку справа.',
        table: {
            type: {
                summary: 'ReactNode | undefined',
            },
            defaultValue: {
                summary: 'undefined',
            },
        },
        control: false,
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
    title: 'Content/Link',
    component: Link,
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Click me, hombre!',
    href: 'https://yandex.ru',
    isDisabled: false,
    isExternal: true,
    isRawHTML: false,
    isTruncated: false,
    leftIcon: undefined,
    numOfLines: 1,
    rightIcon: undefined,
};
Default.argTypes = {
    ...ARG_TYPES,
};

export const LinkInsideText = (args) => (
    <div>
        Lorem ipsum{' '}
        <Link {...args} />
        !
    </div>
);
LinkInsideText.args = {
    ...Default.args,
    children: '<i>dolor</i>',
    isRawHTML: true,
};
LinkInsideText.argTypes = {
    ...ARG_TYPES,
};
