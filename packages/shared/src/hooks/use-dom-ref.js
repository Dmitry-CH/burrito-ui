export function useDOMRefs(...refs) {
    if (refs.every((ref) => ref == null)) {
        return null;
    }

    return (node) => refs.forEach((ref) => assignRef(ref, node));
}

const assignRef = (ref, node) => {
    if (ref == null) return;

    if (typeof ref === 'function') {
        ref(node);
        return;
    }

    try {
        ref.current = node;
    } catch (err) {
        throw new Error(`Cannot assign value '${node}' to ref '${ref}'`)
    }
};
