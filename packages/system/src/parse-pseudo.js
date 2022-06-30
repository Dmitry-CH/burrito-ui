import * as R from 'ramda';


export const pseudoSelectors = {
    /**
     * Styles for CSS selector `&:hover`
     */
    _hover: '&:hover, &[data-hover]',
    /**
     * Styles for CSS Selector `&:active`
     */
    _active: '&:active, &[data-active]',
    /**
     * Styles to apply when this element is disabled.
     */
    _disabled: '&:disabled, &[aria-disabled=true]',
};

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
    // eslint-disable-next-line no-multi-spaces
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
