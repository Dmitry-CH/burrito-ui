import * as R from 'ramda';
import {forwardRef} from 'react';

import {ui} from '@@system';
import {useDOMRefs, useComponentTheme, useValidateProps} from '@@utils';

import {useNormalizeProps} from './helpers/use-normalize-props';
import {boxTypes} from './prop-types';


const StyledBox = ui('div', {boxSizing: 'border-box'});

export const Box = forwardRef((props, ref) => {
    // useValidateProps(props, boxTypes);

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

    const safeChildren = makeSafeChildren(children, isRawHTML);

    const domRef = useDOMRefs(ref);

    return (
        <StyledBox
            {...otherProps}
            {...safeChildren}
            ref={domRef}
            as={as}
        />
    );
});

if (typeof __DEV__ !== 'undefined' && __DEV__) {
    Box.displayName = 'Box';
    StyledBox.displayName = 'StyledBox';
}

// Helpers
const makeSafeChildren = (children, isRawHTML) => (isRawHTML
    ? {dangerouslySetInnerHTML: {__html: children}}
    : {children});
