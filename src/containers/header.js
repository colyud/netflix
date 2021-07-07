import React, { useContext } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { ThemeContext } from "../context/theme-context";

export function HeaderContainer({ children }) {
    const { isDark, setIsDark } = useContext(ThemeContext);
    return (
        <Header>
            <Header.Frame>
                <Header.Group asd>
                    <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
                    <Header.ThemeBtn onClick={() => setIsDark((prevMode) => !prevMode)}>{isDark ? "☀️" : "🌙"}</Header.ThemeBtn>
                </Header.Group>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
}
