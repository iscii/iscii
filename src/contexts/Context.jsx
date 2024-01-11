import React from "react";
import { AuthProvider } from "./AuthContext";

const providers = [AuthProvider];

/**
 * This component is used to wrap the entire application with all the context providers.
 */
export function ContextProvider({ children }) {
    return (
        providers.reduce((acc, Provider) => {
            return <Provider>{acc}</Provider>;
        }, children)
    )
}
