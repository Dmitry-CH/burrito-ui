import * as R from 'ramda';


export const filterNotNilBy = R.flip(R.o)(
    R.reject(R.isNil),
);

export const isObject = R.is(Object);

export const isNil = R.isNil;

export const isNotNil = R.complement(R.isNil);

export const pickByNotNil = R.pickBy(isNotNil);
