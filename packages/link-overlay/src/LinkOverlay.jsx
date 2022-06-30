import * as R from 'ramda';
import {forwardRef} from 'react';

import {burrito} from '@burrito-ui/system';
import {useComponentTheme, useDOMRefs, useValidateProps} from '@burrito-ui/shared';

import {Box} from '@burrito-ui/box';

import {overlayBox, overlayLink} from './helpers/overlay';
import {useNormalizeProps} from './helpers/use-normalize-props';
import {LinkBoxTypes, LinkOverlayTypes} from './prop-types';


const StyledLinkBox = burrito(Box, overlayBox);

export const LinkBox = forwardRef((props, ref) => {
    useValidateProps(props, LinkBoxTypes);

    const themeProps = useComponentTheme('LinkBox', props);

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
        <StyledLinkBox
            {...otherProps}
            ref={domRef}
        >
            {children}
        </StyledLinkBox>
    );
});

LinkBox.displayName = 'LinkBox';
StyledLinkBox.displayName = 'StyledLinkBox';


const StyledLinkOverlay = burrito(Box, overlayLink, {
    shouldForwardProp: (prop) => !['isExternal'].includes(prop),
});

export const LinkOverlay = forwardRef((props, ref) => {
    useValidateProps(props, LinkOverlayTypes);

    const themeProps = useComponentTheme('LinkOverlay', props);

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
        <StyledLinkOverlay
            {...otherProps}
            ref={domRef}
            className="link-overlay"
            forwardedAs="a"
        >
            {children}
        </StyledLinkOverlay>
    );
});

LinkOverlay.displayName = 'LinkOverlay';
StyledLinkOverlay.displayName = 'StyledLinkOverlay';
