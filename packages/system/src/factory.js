import {styled} from './styled';


function Factory() {
    const cache = new Map();

    return new Proxy(styled, {
        /**
         * @example
         *
         * const Div = ui('div', {color: 'red'});
         * <Div />
         *
         * const WithUI = ui(SomeComponent);
         * <WithUI color="red" />
         */
        apply(_target, _thisArg, args) {
            return styled(...args);
        },

        /**
         * @example
         *
         * <ui.div color="red" />
         */
        get(_target, elm) {
            if (!cache.has(elm)) {
                cache.set(elm, styled(elm))
            }

            return cache.get(elm);
        },
    });
}

export const burrito = Factory();
