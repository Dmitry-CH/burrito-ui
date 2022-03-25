import {forwardRef} from 'react';

import {ui} from '@@system';
import {useDOMRefs, useValidateProps} from '@@utils';

import {Box} from '../../box';
import {truncate} from '../helpers/truncate';


const StyledText = ui(Box, truncate, {
    shouldForwardProp: (prop) => !['isTruncated', 'numOfLines'].includes(prop),
});

export const Text = forwardRef((props, ref) => {
    // useValidateProps(props, boxTypes);

    const {
        as = 'span',
        children,
        isTruncated = false,
        numOfLines = 1,
        ...otherProps
    } = props;

    const domRef = useDOMRefs(ref);

    return (
        <StyledText
            {...otherProps}
            ref={domRef}
            forwardedAs={as}
            isTruncated={isTruncated}
            numOfLines={numOfLines}
        >
            {children}
        </StyledText>
    );
});

if (typeof __DEV__ !== 'undefined' && __DEV__) {
    Text.displayName = 'Text';
    StyledText.displayName = 'StyledText';
}
