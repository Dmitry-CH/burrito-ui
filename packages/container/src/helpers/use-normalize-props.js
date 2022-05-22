import * as R from 'ramda';
import {pickByNotNil} from '@burrito-ui/shared';


export function useNormalizeProps(props) {
    return R.pipe(
        R.converge(R.mergeLeft, [
            R.applySpec({
                alignItems: createAlignItemsProp,
                justifyContent: createJustifyContentProp,
            }),
            R.identity,
        ]),
        removeProps,
        pickByNotNil,
    )(props);
}

const POSITION_MAP = {
    top: 'flex-start',
    right: 'flex-end',
    bottom: 'flex-end',
    left: 'flex-start',
    center: 'center',
};

const createAlignItemsProp = ({posY, alignItems}) => (
    POSITION_MAP[posY] ?? alignItems // supp array
);

const createJustifyContentProp = ({posX, justifyContent}) => (
    POSITION_MAP[posX] ?? justifyContent // supp array
);

const removeProps = R.omit([
    'posX',
    'posY',
]);
