import * as R from 'ramda';


export function generateFontFace(rules) {
    return R.pipe(
        transform,
        R.map(template),
        R.join('\n'),
    )(rules);
}

const template = ([font, weight, style]) => (
`@font-face {
    font-family: "${font}";
    src: local("${font}"),
         url("fonts/${font}-${weight}.woff2") format("woff2"),
         url("fonts/${font}-${weight}.woff") format("woff");
    font-weight: ${weight};
    font-style: ${style};
    font-display: swap;
}`);

// [[f, [w, s, w, s, ...]], ...] => [[f, w, s], ...]
const transform = R.chain(
    R.converge(R.map, [
        R.pipe(
            R.head,
            R.prepend,
        ),
        R.pipe(
            R.last,
            R.splitEvery(2),
        ),
    ])
);
