import React, { useState } from "react";
import { Header, Profiles } from "../components/";
import * as ROUTES from "../constants/routes";

export function SelectProfileContainer({ user, setUser, setProfile }) {
    const [manage, setManage] = useState(false);
    const [editProfile, setEitProfile] = useState({});
    const [editName, setEditName] = useState("");

    const allUserFromLocal = JSON.parse(localStorage.getItem("allUser"));
    allUserFromLocal && setUser(allUserFromLocal);
    localStorage.setItem("allUser", JSON.stringify(user));

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
                            disabled={manage}
                            onClick={() =>
                                !manage &&
                                setProfile({
                                    displayName: item.displayName,
                                    photoURL: item.photoURL,
                                })
                            }
                        >
                            <Profiles.Edit
                                manage={manage}
                                onClick={() => {
                                    setEitProfile({ data: item, index: index });
                                    setEditName(item.displayName);
                                }}
                            />
                            <Profiles.Picture disabled={manage} src={item.photoURL} />
                            <Profiles.Name>{item.displayName}</Profiles.Name>
                        </Profiles.User>
                    ))}
                    <Profiles.User>
                        <Profiles.Picture src="add" svg />
                        <Profiles.Name>Add profile</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>

                <Profiles.ManageBtn onClick={() => setManage(!manage)}>Manage Profiles</Profiles.ManageBtn>

                {editProfile.data && (
                    <Profiles.Form>
                        <Profiles.Text>Edit Profile</Profiles.Text>
                        <Profiles.Input value={editName} onChange={(e) => setEditName(e.target.value)} />
                        <Profiles.ButtonCon>
                            <Profiles.Button
                                submit
                                onClick={() => {
                                    setUser(user.map((item, i) => (editProfile.index === i ? { ...item, displayName: editName } : item)));
                                    setEitProfile({});
                                }}
                            >
                                Submit
                            </Profiles.Button>
                            <Profiles.Button onClick={() => setEitProfile({})}>Cancel</Profiles.Button>
                        </Profiles.ButtonCon>
                    </Profiles.Form>
                )}
            </Profiles>
        </>
    );
}
