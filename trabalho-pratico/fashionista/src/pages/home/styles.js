import styled from 'styled-components';
import { lighten } from 'polished';

import headerImage from './img/header.jpg';

export const Container = styled.article`
    width: 100%;
    padding-top: 60px;
    display: flex;
    flex-direction: column;
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
`;

export const Trends = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const TrendsList = styled.ul`
    width: 1132px;
    list-style: none;
    display: flex;
    overflow-x: scroll;
`;

export const TrendsListItem = styled.li`
    margin-right: 25px;
    margin-bottom: 40px;
`;