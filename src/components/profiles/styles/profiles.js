import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 80%;
`;

export const Title = styled.h1`
    width: 100%;
    color: #fff;
    font-size: 48px;
    text-align: center;
    font-weight: 500;
`;

export const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
`;

export const Name = styled.p`
    color: #808080;
    text-overflow: ellipsis;
    font-size: 16px;

    &:hover {
        font-weight: bold;
        color: #e5e5e5;
    }
`;

export const Picture = styled.img`
    width: 100%;
    max-width: 150px;
    height: auto;
    border: 3px solid black;
    cursor: pointer;
    position: relative;
    z-index: 0;
    opacity: 0.5;
    ${({ svg }) => svg && "filter:invert(1);border: 3px solid white; opacity:0.3   "}
`;

export const Item = styled.li`
    max-height: 200px;
    max-width: 200px;
    list-style-type: none;
    text-align: center;
    margin-right: 30px;
    position: relative;

    &:hover > ${Picture} {
        border: 3px solid white;
        opacity: 1;
    }

    &:hover ${Name} {
        font-weight: bold;
        color: white;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

export const Button = styled.button`
    text-transform: uppercase;
    padding: 1em 2em;
    background: 000;
    color: #fff;
    opacity: 0.3;
    margin-top: 5em;
    letter-spacing: 2px;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`;

export const Edit = styled.div`
    position: absolute;
    background: url("/images/icons/close.png");
    filter: invert(1);
    z-index: 1001;
    max-width: 50px;
    max-height: 50px;
    width: 100%;
    height: 100%;
    top: 50px;
    left: 60px;
`;
