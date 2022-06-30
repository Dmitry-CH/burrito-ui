import * as R from 'ramda';
import {pickByNotNil} from '@burrito-ui/shared';


export function useNormalizeProps(props) {
    return R.pipe(
        R.converge(R.mergeLeft, [
            R.applySpec({
                gridColumnGap: createGridColumnGapProp,
                gridRowGap: createGridRowGapProp,
                gridTemplateColumns: createGridTemplateColumnsProp,
                gridTemplateRows: createGridTemplateRowsProp,
            }),
            R.identity,
        ]),
        removeProps,
        pickByNotNil,
    )(props);
}

const transform = R.flip(R.replace('{#}'))('repeat({#}, minmax(0px, 1fr))');

const parseProp = R.ifElse(
    R.is(Array),
    R.map(R.unless(
        R.isNil,
        transform,
    )),
    transform,
);

const createGridColumnGapProp = ({spacing, spacingX, gridColumnGap}) => (
    spacingX ?? spacing ?? gridColumnGap
);

const createGridRowGapProp = ({spacing, spacingY, gridRowGap}) => (
    spacingY ?? spacing ?? gridRowGap
);

const createGridTemplateColumnsProp = ({columns, gridTemplateColumns}) => (
    (columns && parseProp(R.clamp(1, 12, columns))) ?? gridTemplateColumns ?? transform(1)
);

const createGridTemplateRowsProp = ({rows, gridTemplateRows}) => (
    (rows && parseProp(rows)) ?? gridTemplateRows
);

const removeProps = R.omit([
    'columns',
    'rows',
    'spacing',
    'spacingX',
    'spacingY',
]);
