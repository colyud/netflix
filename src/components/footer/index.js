import React from "react";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
// const theme = useContext(ThemeContext);
import { Container, Title, Break, Row, Column, Text, Link } from "./styles/footer";

export default function Footer({ children, ...restProps }) {
    const theme = useContext(ThemeContext);
    console.log(theme);
    return <Container {...restProps}> {children}</Container>;
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Footer.Break = function FooterBreak({ children, ...restProps }) {
    return <Break {...restProps}>{children}</Break>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

Footer.Row = function FooterRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
    return <Column {...restProps}>{children}</Column>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
