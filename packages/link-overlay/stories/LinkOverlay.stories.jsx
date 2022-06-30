import {Box} from '../../box';
import {Heading} from '../../heading';
import {Link} from '../../link';

import {LinkBox, LinkOverlay} from '../src/LinkOverlay';


const ARG_TYPES = {
    children: {
        description: 'Содержимое `LinkOverlay`.',
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
    title: 'Content/LinkOverlay',
    component: LinkOverlay,
};

export const Default = (args) => (
    <LinkBox
        as="article"
        border="1px"
        borderColor="grey.100"
        p="4"
        w="96"
    >
        <Box
            bg="brand.secondary"
            borderRadius="12px"
            color="white"
            display="inline-block"
            m={['0', null, '0']}
            px="2"
            py="1"
            textStyle="p3"
        >
            Новости BMW
        </Box>

        <Heading level="4">
            <LinkOverlay {...args}>
                Концепт BMW M8 Gran Coupé.
            </LinkOverlay>
        </Heading>

        <Link
            href="#2"
            textStyle="h6"
        >
            Все новости
        </Link>
    </LinkBox>
);
Default.args = {
    href: '#1',
    isExternal: false,
    isRawHTML: false,
};
Default.argTypes = {
    ...ARG_TYPES,
    children: {
        control: false,
    },
};
