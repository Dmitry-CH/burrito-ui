import * as R from 'ramda';
import {pickByNotNil} from '@burrito-ui/shared';


export function useNormalizeProps(props) {
    return R.pipe(
        R.converge(R.mergeLeft, [
            R.applySpec({
                gridColumnStart: createGridColumnStartProp,
                gridColumnEnd: createGridColumnEndProp,
                gridRowStart: createGridRowStartProp,
                gridRowEnd: createGridRowEndProp,
            }),
            R.identity,
        ]),
        removeProps,
        pickByNotNil,
    )(props);
}

const transform = (n) => `span ${n}`;

const parseProp = R.ifElse(
    R.is(Array),
    R.map(R.unless(
        R.isNil,
        transform,
    )),
    transform,
);

const createGridColumnStartProp = ({colStart, gridColumnStart}) => (
    colStart ?? gridColumnStart
);

const createGridColumnEndProp = ({colEnd, colSpan, gridColumnEnd}) => (
    colEnd ?? (colSpan && parseProp(colSpan)) ?? gridColumnEnd
);

const createGridRowStartProp = ({rowStart, gridRowStart}) => (
    rowStart ?? gridRowStart
);

const createGridRowEndProp = ({rowEnd, rowSpan, gridRowEnd}) => (
    rowEnd ?? (rowSpan && parseProp(rowSpan)) ?? gridRowEnd
);

const removeProps = R.omit([
    'colSpan',
    'colStart',
    'colEnd',
    'rowSpan',
    'rowStart',
    'rowEnd',
]);
