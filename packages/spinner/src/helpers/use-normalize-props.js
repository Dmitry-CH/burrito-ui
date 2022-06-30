import * as R from 'ramda';
import {pickByNotNil} from '@burrito-ui/shared';


export function useNormalizeProps(props) {
    return R.pipe(
        R.converge(R.mergeLeft, [
            R.applySpec({
                animationDuration: createDurationProp,
                fontSize: createFontSizeProp,
            }),
            R.identity,
        ]),
        removeProps,
        pickByNotNil,
    )(props);
}

const createDurationProp = ({duration, animationDuration}) => (
    duration ?? animationDuration // supp array
);

const createFontSizeProp = ({size, fontSize}) => (
    size ?? fontSize // supp array
);

const removeProps = R.omit([
    'duration',
    'size',
]);
