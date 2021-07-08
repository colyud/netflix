import React, { useState, useContext } from "react";
import { Header, Profiles } from "../components/";
import * as ROUTES from "../constants/routes";
import { ThemeContext } from "../context/theme-context";

export function SelectProfileContainer({ user, profiles, setProfiles, setProfile }) {
    const [manage, setManage] = useState(false);
    const [editProfile, setEditProfile] = useState({});
    const [addProfile, setAddProfile] = useState(false);
    const [editName, setEditName] = useState("");
    const [editPhoto, setEditPhoto] = useState("");
    const [error, setError] = useState(false);

    const { isDark, setIsDark } = useContext(ThemeContext);

    localStorage.setItem("profiles", JSON.stringify({ data: profiles, email: user.email }));

    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
                        <Header.ThemeBtn onClick={() => setIsDark((prevMode) => !prevMode)}>{isDark ? "☀️" : "🌙"}</Header.ThemeBtn>
                    </Header.Group>
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    {profiles.map((item, index) => (
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
                                    setEditProfile({ data: item, index: index });
                                    setEditName(item.displayName);
                                    setEditPhoto(item.photoURL);
                                }}
                            />
                            <Profiles.Picture disabled={manage} src={item.photoURL} />
                            <Profiles.Name>{item.displayName}</Profiles.Name>
                        </Profiles.User>
                    ))}
                    <Profiles.User>
                        <Profiles.Picture
                            src="add"
                            svg
                            onClick={() => {
                                if (profiles.length < 5) {
                                    setAddProfile(!addProfile);
                                }
                            }}
                        />
                        <Profiles.Name>Add profile</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>

                <Profiles.ManageBtn onClick={() => setManage(!manage)}>Manage Profiles</Profiles.ManageBtn>

                {editProfile.data || addProfile ? (
                    <Profiles.Form>
                        <Profiles.Text>Edit Profile</Profiles.Text>
                        <Profiles.Input placeholder="name" value={editName} onChange={(e) => setEditName(e.target.value)} />
                        <Profiles.Input
                            placeholder="photo number"
                            type="number"
                            min="1"
                            max="5"
                            value={editPhoto}
                            onChange={(e) => setEditPhoto(e.target.value)}
                        />
                        {error && <Profiles.Error>photo number MUST greater than 0 and lower than 6</Profiles.Error>}
                        <Profiles.ButtonCon>
                            <Profiles.Button
                                submit
                                onClick={() => {
                                    if (editPhoto > 5 || editPhoto < 1) {
                                        setError(true);
                                    } else if (addProfile) {
                                        setProfiles([...profiles, { displayName: editName, photoURL: editPhoto }]);
                                        setAddProfile(false);
                                        setError(false);
                                    } else {
                                        setProfiles(
                                            profiles.map((item, i) =>
                                                editProfile.index === i ? { ...item, displayName: editName, photoURL: editPhoto } : item
                                            )
                                        );
                                        setEditProfile({});
                                        setError(false);
                                    }
                                }}
                            >
                                Submit
                            </Profiles.Button>
                            <Profiles.Button
                                onClick={() => {
                                    setEditProfile({});
                                    setAddProfile(false);
                                }}
                            >
                                Cancel
                            </Profiles.Button>
                        </Profiles.ButtonCon>
                    </Profiles.Form>
                ) : null}
            </Profiles>
        </>
    );
}
