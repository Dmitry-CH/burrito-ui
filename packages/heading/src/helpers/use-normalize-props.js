import * as R from 'ramda';
import {pickByNotNil} from '@burrito-ui/shared';


export function useNormalizeProps(props) {
    return R.pipe(
        R.converge(R.mergeLeft, [
            R.applySpec({
                as: createAsProp,
                textStyle: createTextStyleProp,
            }),
            R.identity,
        ]),
        removeProps,
        pickByNotNil,
    )(props);
}

const makeHTMLTag = ({level = 2}) => (
    'h' + level
);

const createAsProp = ({semantic = true, ...other}) => (
    semantic ? makeHTMLTag(other) : 'div'
);

const createTextStyleProp = ({textStyle, ...other}) => (
    textStyle ?? makeHTMLTag(other)
);

const removeProps = R.omit([
    'level',
    'semantic',
]);
