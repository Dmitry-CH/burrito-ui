import * as R from 'ramda';
import {forwardRef} from 'react';

import {useComponentTheme, useDOMRefs, useValidateProps} from '@burrito-ui/shared';

import {Text} from '@burrito-ui/text';

import {useNormalizeProps} from './helpers/use-normalize-props';
import {LinkTypes} from './prop-types';


export const Link = forwardRef((props, ref) => {
    useValidateProps(props, LinkTypes);

    const themeProps = useComponentTheme('Link', props);

    const normalizedProps = useNormalizeProps(R.mergeAll([
        themeProps,
        props,
    ]));

    const {
        children,
        isRawHTML,
        isTruncated,
        leftIcon,
        numOfLines,
        rightIcon,
        ...otherProps
    } = normalizedProps;

    const domRef = useDOMRefs(ref);

    return (
        <Text
            {...otherProps}
            ref={domRef}
            as="a"
        >
            {leftIcon}
            {children && (
                <Text
                    as="span"
                    isRawHTML={isRawHTML}
                    isTruncated={isTruncated}
                    numOfLines={numOfLines}
                >
                    {children}
                </Text>
            )}
            {rightIcon}
        </Text>
    );
});

Link.displayName = 'Link';
