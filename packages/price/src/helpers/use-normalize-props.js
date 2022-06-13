import * as R from 'ramda';
import {pickByNotNil} from '@burrito-ui/shared';


export function useNormalizeProps(props) {
    return R.pipe(
        R.converge(R.mergeLeft, [
            R.applySpec({
                children: createChildrenProp,
                value: createValueProp,
            }),
            R.identity,
        ]),
        pickByNotNil,
    )(props);
}

const rg = /[+-]?\d+(\.\d+)?/g;

const parse = (str) => str.match(rg).join('');

const parseString = R.when(
    R.is(String),
    parse,
);

const createChildrenProp = ({children}) => (
    Number(parseString(children))
);

const createValueProp = ({children}) => (
    String(parseString(children))
);
