import _styled from 'styled-components';

import {allComposed} from '../styled-system';
import {shouldForwardProp} from './should-forward-prop';


export function styled(component, style = {}, opts = {}) {
    let styledFn = _styled(component);

    styledFn = styledFn.withConfig({
        shouldForwardProp: opts.shouldForwardProp ?? shouldForwardProp,
    });

    if (opts.attrs) {
        styledFn = styledFn.attrs(opts.attrs);
    }

    return styledFn(toCSSObject(style));
}

const toCSSObject = (style) => (props) => {
    const styleBase = (typeof style === 'function')
        ? style(props)
        : style;

    const styleProps = props;

    const mergedStyles = Object.assign({}, styleBase, styleProps);

    return allComposed(mergedStyles);
};
