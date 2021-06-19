import React from "react";
import { Header, OptForm } from "../components";
import * as ROUTES from "../constants/routes";

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            <OptForm>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            </OptForm>
        </Header>
    );
}
