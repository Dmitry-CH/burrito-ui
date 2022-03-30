import _styled from 'styled-components';

import {mapTheme, resolveStyles} from '../styled-system';
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

const toCSSObject = (styles) => (props) => {
    const {theme = {}} = props;

    const baseStyles = (typeof styles === 'function')
        ? styles(props)
        : styles;

    const propsStyles = props;

    const mergedStyles = Object.assign({},
        baseStyles,
        propsStyles
    );

    const [pseudoStyles, systemStyles] = extractStyles(mergedStyles);

    return Object.assign({},
        resolveStyles(systemStyles),
        parsePseudo(
            mapTheme(pseudoStyles, theme)
        ),
    );
};

const extractStyles = (obj) => {
    const pick = {};
    const omit = {};

    for (const key in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;

        if (/^_/.test(key)) pick[key] = obj[key];
        else omit[key] = obj[key];
    }

    return [pick, omit];
};
