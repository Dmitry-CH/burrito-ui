import {keyframes} from 'styled-components';


export function spinnerCircle({animationDuration = 0}) {
    const calcDuration = `${parseInt(animationDuration, 10) - (parseInt(animationDuration, 10) * 0.25)}ms`;

    return {
        sx: {
            'animation-duration': calcDuration,
            'animation-iteration-count': 'infinite',
            'animation-timing-function': 'ease-in-out',

            cx: '25',
            cy: '25',
            r: '20',

            fill: 'none',
            stroke: 'currentColor',
            'stroke-linecap': 'butt',
            strokeWidth: '5',
        },
    };
};

export function spinnerWrapper({animationDuration = 0}) {
    return {
        sx: {
            'animation-duration': animationDuration,
            'animation-iteration-count': 'infinite',
            'animation-timing-function': 'linear',

            'z-index': '2',
            position: 'relative',

            display: 'inline-block',
            'flex-shrink': '0',
            'line-height': '1em',
        },
    };
};

export const spinnerDashKeyframes = keyframes`
    0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
    }
    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
    }
`;

export const spinnerRotateKeyframes = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;
