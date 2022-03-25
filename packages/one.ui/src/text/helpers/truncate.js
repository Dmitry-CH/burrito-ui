export function truncate(props) {
    const {
        isTruncated = false,
        numOfLines = 1,
    } = props;

    if (!isTruncated) return {};

    if (numOfLines > 1) {
        return {
            'display': '-webkit-box',
            'overflow': 'hidden',
            'text-overflow': 'ellipsis',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': numOfLines,
        };
    }

    return {
        // 'display': 'inline-block',
        'max-width': '100%',
        'overflow': 'hidden',
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap',
        'word-wrap': 'normal',
    };
}
