import * as R from 'ramda';
import {forwardRef} from 'react';

import {useComponentTheme, useDOMRefs, useValidateProps} from '@burrito-ui/shared';

import {Text} from '@burrito-ui/text';

import {useNormalizeProps} from './helpers/use-normalize-props';
import {HeadingTypes} from './prop-types';


export const Heading = forwardRef((props, ref) => {
    useValidateProps(props, HeadingTypes);

    const themeProps = useComponentTheme('Heading', props);

    const normalizedProps = useNormalizeProps(R.mergeAll([
        themeProps,
        props,
    ]));

    const {
        children,
        ...otherProps
    } = normalizedProps;

    const domRef = useDOMRefs(ref);

    return (
        <Text
            {...otherProps}
            ref={domRef}
        >
            {children}
        </Text>
    );
});

Heading.displayName = 'Heading';
