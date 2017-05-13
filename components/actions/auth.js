export const bootstrap = () => {
    return {
        type: "BOOTSTRAP",
        payload: {
            request: {
                url: "/bootstrap"
            }
        }
    };
};
