import React, { useState, useEffect, useContext } from "react";
import Fuse from "fuse.js";
import { Card, Loading, Header, Player } from "../components";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { ThemeContext } from "../context/theme-context";
import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from "./footer";
import { useAuthListener } from "../hooks";

export function BrowseContainer({ slides }) {
    const [profiles, setProfiles] = useState([]);
    const [category, setCategory] = useState("series");
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [slideRows, setSlideRows] = useState([]);
    const { isDark, setIsDark } = useContext(ThemeContext);

    const { firebase } = useContext(FirebaseContext);

    const { user } = useAuthListener();

    const localProfiles = JSON.parse(localStorage.getItem("profiles"));

    useEffect(() => {
        if (!localProfiles) {
            setProfiles([
                {
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                },
            ]);
        } else if (user.email == localProfiles.email) {
            setProfiles(localProfiles.data);
        } else {
            setProfiles([
                {
                    displayName: "Loc",
                    photoURL: 1,
                },
            ]);
        }

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);
    //search by keyword
    useEffect(() => {
        const fuse = new Fuse(slideRows, { keys: ["data.description", "data.title", "data.genre"] });
        const results = fuse.search(searchTerm).map(({ item }) => item);

        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    }, [searchTerm]);

    return profile.displayName ? (
        <>
            {loading ? <Loading src={profile.photoURL} /> : <Loading.ReleaseBody />}

            <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group toggle>
                        <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
                        <Header.ThemeBtn onClick={() => setIsDark((prevMode) => !prevMode)}>{isDark ? "☀️" : "🌙"}</Header.ThemeBtn>
                        <Header.Link active={category === "series" ? "true" : "false"} onClick={() => setCategory("series")}>
                            Series
                        </Header.Link>
                        <Header.Link active={category === "films" ? "true" : "false"} onClick={() => setCategory("films")}>
                            Films
                        </Header.Link>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={profile.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={profile.photoURL} />
                                    <Header.Link>{profile.displayName}</Header.Link>
                                </Header.Group>
                                <Header.Group>
                                    <Header.Link onClick={() => firebase.auth().signOut()}>Sign out</Header.Link>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>

                <Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears
                        two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's
                        part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>

            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                <Player.Video />
                            </Player>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>
            <FooterContainer />
        </>
    ) : (
        <SelectProfileContainer user={user} profiles={profiles} setProfiles={setProfiles} setProfile={setProfile} />
    );
}
