import {compose} from '@styled-system/core';

import {colorStyle, textStyle}  from './utils/variants';

import {background} from './background';
import {border} from './border';
import {color} from './color';
import {flexbox} from './flexbox';
import {gradient} from './gradient';
import {grid} from './grid';
import {layout} from './layout';
import {other} from './other';
import {position} from './position';
import {shadow} from './shadow';
import {space} from './space';
import {typography} from './typography';


export {mapToTheme} from './utils/map-to-theme';

export const resolveStyledProps = compose(
    background,
    border,
    color,
    flexbox,
    gradient,
    grid,
    layout,
    other,
    position,
    shadow,
    space,
    typography,
    // add variants
    colorStyle,
    textStyle,
);

export const styledPropNames = resolveStyledProps.propNames;
