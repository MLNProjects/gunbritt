import React from "react";

const withProvider =
    (Provider: any) =>
        (Component: any) =>
            (props: any) =>
                (
                    <Provider>
                        <Component {...props} />
                    </Provider>
                );

export default withProvider;