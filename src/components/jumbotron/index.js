import React from "react";
import { Container, Item, Inner, Title, SubTitle, Image, Pane, Video } from "./styles/jumbotron";

export default function Jumbotron({ children, direction = "row", ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
    return <Image {...restProps} />;
};

Jumbotron.Video = function JumbotronVideo({ src = { src }, ...restProps }) {
    return (
        <Video {...restProps}>
            <source src={src} type="video/mp4" />
        </Video>
    );
};
