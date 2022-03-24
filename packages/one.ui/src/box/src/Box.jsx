import {forwardRef} from 'react';

import {ui} from '@@system';
import {useDOMRefs, useValidateProps} from '@@utils';

import {boxTypes} from './prop-types';


const StyledBox = ui('div');

export const Box = forwardRef((props, ref) => {
    // useValidateProps(props, boxTypes);

    const {
        as = 'div',
        children,
        isRawHTML = false,
        ...otherProps
    } = props;

    const safeChildren = makeSafeChildren(isRawHTML, children);

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
const makeSafeChildren = (isRawHTML, children) => (isRawHTML
    ? {dangerouslySetInnerHTML: {__html: children}}
    : {children});
