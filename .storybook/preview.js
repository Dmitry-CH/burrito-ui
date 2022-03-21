export const decorators = [
    (Story, {globals, kind}) => {
        Story.displayName = `Story/${kind}`;

        return (
            <Story />
        );
    },
];

export const parameters = {
    layout: 'centered',
};
