import * as R from 'ramda';
import {forwardRef} from 'react';

import {burrito} from '@burrito-ui/system';
import {useComponentTheme, useDOMRefs, useValidateProps} from '@burrito-ui/shared';

import {useNormalizeProps} from './helpers/use-normalize-props';
import {BoxTypes} from './prop-types';


const StyledBox = burrito('div', {boxSizing: 'border-box'});

export const Box = forwardRef((props, ref) => {
    useValidateProps(props, BoxTypes);

    const themeProps = useComponentTheme('Box', props);

    const normalizedProps = useNormalizeProps(R.mergeAll([
        themeProps,
        props,
    ]));

    const {
        as = 'div',
        children,
        isRawHTML = false,
        ...otherProps
    } = normalizedProps;

    const safedChildren = makeSafeChildren(children, isRawHTML);

    const domRef = useDOMRefs(ref);

    return (
        <StyledBox
            {...otherProps}
            {...safedChildren}
            ref={domRef}
            as={as}
        />
    );
});

Box.displayName = 'Box';
StyledBox.displayName = 'StyledBox';

// Helpers
const makeSafeChildren = (children, isRawHTML) => (isRawHTML
    ? {dangerouslySetInnerHTML: {__html: children}}
    : {children});
