import * as R from 'ramda';
import {forwardRef} from 'react';

import {useComponentTheme, useDOMRefs, useValidateProps} from '@burrito-ui/shared';

import {Text} from '@burrito-ui/text';

import {useNormalizeProps} from './helpers/use-normalize-props';
import {PriceTypes} from './prop-types';


export const Price = forwardRef((props, ref) => {
    useValidateProps(props, PriceTypes);

    const themeProps = useComponentTheme('Price', props);

    const normalizedProps = useNormalizeProps(R.mergeAll([
        themeProps,
        props,
    ]));

    const {
        children,
        currency,
        customFormat,
        locale,
        ...otherProps
    } = normalizedProps;

    const domRef = useDOMRefs(ref);

    return (
        <Text
            {...otherProps}
            ref={domRef}
            as="data"
        >
            {isFunction(customFormat)
                ? customFormat(children)
                : toPriceFormat(children, {currency, locale})}
        </Text>
    );
});

Price.displayName = 'Price';

const isFunction = R.is(Function);

const toPriceFormat = (num, {currency = 'RUB', locale = 'ru-RU'}) => (
    new Intl.NumberFormat(locale, {
        currency,
        currencyDisplay: 'symbol',
        minimumFractionDigits: 0,
        style: 'currency',
        useGrouping: true,
    }).format(num)
);
