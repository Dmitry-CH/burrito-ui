import {compose} from '@styled-system/core';

import {background} from './background';
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


export {mapTheme} from './core/map-theme';

export const resolveStyles = compose(
    background,
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
);
