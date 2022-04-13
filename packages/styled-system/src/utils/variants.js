import {createParser, get} from '@styled-system/core';
import css from '@styled-system/css';


export const colorStyle = variant({
    prop: 'colorStyle',
    scale: 'colorStyles',
    variants: {
        __: {}, // https://styled-system.com/variants#migrating-from-legacy-api
    },
});

export const textStyle = variant({
    prop: 'textStyle',
    scale: 'textStyles',
    variants: {
        __: {},
    },
});

function variant({prop = 'variant', scale, variants = {}}) {
    let sx;

    if (Object.keys(variants).length) {
        sx = (value, scale, props) => css(get(scale, value, null))(props.theme);
    } else {
        sx = (value, scale) => get(scale, value, null);
    }

    sx.defaults = variants;
    sx.scale = scale;

    const config = {
      [prop]: sx,
    };

    const parser = createParser(config);
    return parser;
}
