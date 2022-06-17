import * as R from 'ramda';
import {forwardRef} from 'react';

import {burrito} from '@burrito-ui/system';
import {useComponentTheme, useDOMRefs, useValidateProps} from '@burrito-ui/shared';

import {Box} from '@burrito-ui/box';

import {spinnerCircle, spinnerWrapper, spinnerDashKeyframes, spinnerRotateKeyframes} from './helpers/spinner';
import {useNormalizeProps} from './helpers/use-normalize-props';
import {SpinnerTypes} from './prop-types';


const StyledCircle = burrito('circle', spinnerCircle, {
    keyframes: spinnerDashKeyframes,
});

const StyledSpinner = burrito(Box, spinnerWrapper, {
    attrs: {
        viewBox: '0 0 50 50',
    },
    keyframes: spinnerRotateKeyframes,
});

export const Spinner = forwardRef((props, ref) => {
    useValidateProps(props, SpinnerTypes);

    const themeProps = useComponentTheme('Spinner', props);

    const normalizedProps = useNormalizeProps(R.mergeAll([
        themeProps,
        props,
    ]));

    const {
        animationDuration = '1500ms',
        children,
        isLoading = true,
        ...otherProps
    } = normalizedProps;

    const domRef = useDOMRefs(ref);

    return isLoading
        ? (
            <StyledSpinner
                {...otherProps}
                ref={domRef}
                animationDuration={animationDuration}
                forwardedAs="svg"
                h="1em"
                w="1em"
            >
                <StyledCircle
                    animationDuration={animationDuration}
                />
            </StyledSpinner>
        )
        : (
            <>
                {children}
            </>
        );
});

Spinner.displayName = 'Spinner';
StyledSpinner.displayName = 'StyledSpinner';
StyledCircle.displayName = 'StyledCircle';
