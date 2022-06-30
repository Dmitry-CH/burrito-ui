import _styled, {css} from 'styled-components';

import {mapToTheme, resolveStyledProps} from '@burrito-ui/styled-system';

import {parsePseudo, pseudoSelectors} from './parse-pseudo';
import {shouldForwardProp} from './should-forward-prop';


export function styled(component, style = {}, opts = {}) {
    let styledFn = _styled(component);

    styledFn = styledFn.withConfig({
        shouldForwardProp: opts.shouldForwardProp
            ? (prop) => shouldForwardProp(prop) && opts.shouldForwardProp(prop)
            : shouldForwardProp,
    });

    if (opts.attrs) {
        styledFn = styledFn.attrs(opts.attrs);
    }

    // https://spectrum.chat/styled-components/help/how-can-i-use-a-custom-animation-with-the-style-object-syntax~91d624ea-a5a3-4d0e-9314-4da860059112
    return styledFn(toCSSObject(style), css`
        animation-name: ${opts.keyframes}
    `);
}

const PSEUDO_NAMES = Object.keys(pseudoSelectors);

const toCSSObject = (styled) => (props) => {
    const {theme = {}} = props;

    const baseStyles = (typeof styled === 'function')
        ? styled(props)
        : styled;

    const propsStyles = props;

    const mergedStyles = Object.assign({},
        baseStyles,
        propsStyles,
    );

    const [systemStyles, pseudoStyles, sxStyles] = extractStyles(mergedStyles);

    return Object.assign({},
        resolveStyledProps(systemStyles),
        mapToTheme(sxStyles, theme),
        mapToTheme(parsePseudo(pseudoStyles), theme),
    );
};

const extractStyles = (styles) => {
    const {sx: sxStyles = {}, ...restStyles} = styles;

    const systemStyles = {};
    const pseudoStyles = {};

    for (const key in restStyles) {
        if (!Object.prototype.hasOwnProperty.call(restStyles, key)) continue;

        if (PSEUDO_NAMES.includes(key)) pseudoStyles[key] = restStyles[key];
        else systemStyles[key] = restStyles[key];
    }

    return [
        systemStyles,
        pseudoStyles,
        sxStyles,
    ];
};
