const ARG_TYPES = {
    children: {
        description: 'Содержимое коробки.',
        table: {
            type: {
                summary: 'ReactNode | undefined',
            },
            defaultValue: {
                summary: 'undefined',
            },
        },
    },
};

export default {
    title: 'Basic/Box',
    // component: Box,
};

const Template = ({children}) => <div>{children}</div>;

export const Default = Template.bind({});
Default.args = {
    children: 'Box content',
};
