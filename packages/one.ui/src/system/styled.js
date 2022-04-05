import _styled from 'styled-components';

import {mapToTheme, resolveStyledProps} from '../styled-system';
import {pseudoSelectors} from '../styled-system/pseudo';

import {parsePseudo} from './parse-pseudo';
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

    return styledFn(toCSSObject(style));
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
        propsStyles
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
