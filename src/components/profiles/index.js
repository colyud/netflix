import React from "react";
import { Container, Title, List, Item, Picture, Name, ManageBtn, Edit, Form, Text, Input, ButtonCon, Button } from "./styles/profiles";

export default function Profiles({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, disabled, ...restProps }) {
    return (
        <Item {...restProps} disabled={disabled}>
            {children}
        </Item>
    );
};

Profiles.Picture = function ProfilesPicture({ src, svg, ...restProps }) {
    return <Picture {...restProps} src={src ? `/images/users/${src}.png` : "/images/misc/loading.gif"} svg={svg ? svg : null} />;
};

Profiles.Name = function ProfilesName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>;
};

Profiles.ManageBtn = function ProfilesButton({ children, ...restProps }) {
    return <ManageBtn {...restProps}>{children}</ManageBtn>;
};

Profiles.Edit = function ProfilesEdit({ children, ...restProps }) {
    return <Edit {...restProps}>{children}</Edit>;
};
Profiles.Form = function ProfilesForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>;
};

Profiles.Text = function ProfilesText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Profiles.Input = function ProfilesInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>;
};
Profiles.ButtonCon = function ProfilesButtonCon({ children, ...restProps }) {
    return <ButtonCon {...restProps}>{children}</ButtonCon>;
};
Profiles.Button = function ProfilesButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
};
