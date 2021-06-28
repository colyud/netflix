import React from "react";
import { Route, Redirect } from "react-router-dom";

// if there is a user it will go to browse page, it not return children component
export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
    return (
        <Route
            {...restProps}
            render={() => {
                if (!user) {
                    return children;
                }

                if (user) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath,
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    );
}
// if there is a NO user it will go to sign in page, it yes return children component
export function ProtectedRoute({ user, children, ...restProps }) {
    return (
        <Route
            {...restProps}
            render={({ location }) => {
                if (user) {
                    return children;
                }

                if (!user) {
                    return (
                        <Redirect
                            to={{
                                pathname: "signin",
                                state: { from: location },
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    );
}
