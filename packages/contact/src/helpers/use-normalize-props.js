import * as R from 'ramda';
import {pickByNotNil} from '@burrito-ui/shared';


export function useNormalizeProps(props) {
    return R.pipe(
        R.converge(R.mergeLeft, [
            R.applySpec({
                href: createHrefProp,
            }),
            R.identity,
        ]),
        pickByNotNil,
    )(props);
}

const toEmail = R.pipe(
    R.trim,
    R.concat('mailto:'),
);

const toPhone = R.pipe(
    R.trim,
    R.replace(/\D/g, ''),
    R.replace(/^8/, '7'),
    R.concat('tel:+'),
);

const createHrefProp = ({children}) => (
    R.cond([
        [R.allPass([R.is(String), R.includes('@')]), toEmail],
        [R.is(String), toPhone],
        [R.T, R.identity],
    ])(children)
);
