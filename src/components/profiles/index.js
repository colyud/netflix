import React from "react";
import { Container, Title, List, Item, Picture, Name, Button, Edit } from "./styles/profiles";

export default function Profiles({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({ src, svg, ...restProps }) {
    return <Picture {...restProps} src={src ? `/images/users/${src}.png` : "/images/misc/loading.gif"} svg={svg ? svg : null} />;
};

Profiles.Name = function ProfilesName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>;
};

Profiles.Button = function ProfilesButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
};

Profiles.Edit = function ProfilesEdit({ children, ...restProps }) {
    return <Edit {...restProps}>{children}</Edit>;
};
