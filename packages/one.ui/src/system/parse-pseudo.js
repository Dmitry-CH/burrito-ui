import * as R from 'ramda';

import {pseudoSelectors} from '../styled-system/pseudo';


export function parsePseudo(val) {
    return R.when(
        isObject,
        parse,
    )(val);
}

const defaultArrayWith = R.o(R.defaultTo([]));
const isObject = R.is(Object);

const toObject = R.curryN(2, R.converge)(R.zipObj);
const toTranspose = R.pipe(
    R.toPairs,   // {a: 1, b: 2}     -> [[a, 1], [b, 2]]
    R.transpose, // [[a, 1], [b, 2]] -> [[a, b], [1, 2]]
);

const transforKey = R.pipe(
    defaultArrayWith(R.head),
    R.map(R.when(
        R.flip(R.has)(pseudoSelectors),
        R.flip(R.prop)(pseudoSelectors),
    )),
);
const transforVal = R.pipe(
    defaultArrayWith(R.last),
    R.map(parsePseudo),
);

const parse = R.pipe(
    toTranspose,
    toObject([
        transforKey,
        transforVal,
    ]),
);
