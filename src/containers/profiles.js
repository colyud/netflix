import React from "react";
import { Header, Profiles } from "../components/";
import * as ROUTES from "../constants/routes";

export function SelectProfileContainer({ user, setProfile }) {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    {user.map((item, index) => (
                        <Profiles.User
                            onClick={() =>
                                setProfile({
                                    displayName: item.displayName,
                                    photoURL: item.photoURL,
                                })
                            }
                        >
                            <Profiles.Picture src={item.photoURL} />
                            <Profiles.Name>{item.displayName}</Profiles.Name>
                        </Profiles.User>
                    ))}
                    <Profiles.User>
                        <Profiles.Picture src={6} />
                        <Profiles.Name>Loc123</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    );
}
