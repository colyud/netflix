import React, { useState } from "react";
import { Header, Profiles } from "../components/";
import * as ROUTES from "../constants/routes";

export function SelectProfileContainer({ user, setProfile }) {
    const [manage, setManage] = useState(false);
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
                            key={index}
                            onClick={() =>
                                setProfile({
                                    displayName: item.displayName,
                                    photoURL: item.photoURL,
                                })
                            }
                        >
                            <Profiles.Edit manage={manage} />
                            <Profiles.Picture src={item.photoURL} />
                            <Profiles.Name>{item.displayName}</Profiles.Name>
                        </Profiles.User>
                    ))}
                    <Profiles.User>
                        <Profiles.Picture src="add" svg />
                        <Profiles.Name>Add profile</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
                <Profiles.Button onClick={() => setManage(!manage)}>Manage Profiles</Profiles.Button>
            </Profiles>
        </>
    );
}
