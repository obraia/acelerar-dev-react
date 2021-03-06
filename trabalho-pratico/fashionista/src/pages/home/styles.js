import styled from 'styled-components';
import { lighten } from 'polished';

import headerImage from './img/header.jpg';

export const Container = styled.article`
    width: 100%;
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.div`
    width: 98%;
    height: 250px;
    margin-top: 25px;
    margin-bottom: 25px;
    margin-left: auto;
    border-radius: 10px 0 0 50px;
    background-image: url(${headerImage});
    background-size: cover;
    background-position: 0px 60px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    border: 5px solid ${props => props.theme.colors.secondary};
    border-right: none;
`;

export const Title = styled.h1`
    width: 90%;
    padding: 25px 0;
    position: relative;
    text-align: center;
    font-weight: lighter;
    font-size: 32px;
    text-transform: uppercase;
    z-index: 1;

    color: ${props => props.theme.colors.textSecondary};

    span{
        padding: 0 80px;
        background-color: ${props => props.theme.colors.background};
    }

    &:before {
        border-top: 2px solid ${props => props.theme.colors.textSecondary};
        content:"";
        margin: 0 auto;
        position: absolute;
        top: 50%; left: 0; right: 0; bottom: 0;
        width: 90%;
        z-index: -1;
    }
`;

export const Trends = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ArrowButton = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 48px;
    color: ${props => props.theme.colors.textSecondary};
    cursor: pointer;
    transition: color .2s;

    &:hover{
        transition: color .2s;
        color: ${props => lighten(0.2, props.theme.colors.textSecondary)};
    }

    &:active{
        transition: font-size .2s;
        font-size: 52px;
    }
`;
