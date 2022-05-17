import * as R from 'ramda';
import {forwardRef} from 'react';

import {useComponentTheme, useDOMRefs, useValidateProps} from '@burrito-ui/shared';

import {Text} from '@burrito-ui/text';

import {useNormalizeProps} from './helpers/use-normalize-props';
import {ContactTypes} from './prop-types';


export const Contact = forwardRef((props, ref) => {
    useValidateProps(props, ContactTypes);

    const themeProps = useComponentTheme('Contact', props);

    const normalizedProps = useNormalizeProps(R.mergeAll([
        themeProps,
        props,
    ]));

    const {
        children,
        customFormat,
        ...otherProps
    } = normalizedProps;

    const domRef = useDOMRefs(ref);

    return (
        <Text
            {...otherProps}
            ref={domRef}
            as="a"
        >
            {isFunction(customFormat)
                ? customFormat(children)
                : children}
        </Text>
    );
});

Contact.displayName = 'Contact';

const isFunction = R.is(Function);
