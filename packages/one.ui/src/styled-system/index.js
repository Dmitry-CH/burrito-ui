import {compose} from '@styled-system/core';

import {color} from './color';
import {space} from './space';


export const allComposed = compose(
    color,
    space,
);

export {color};
export {space};
