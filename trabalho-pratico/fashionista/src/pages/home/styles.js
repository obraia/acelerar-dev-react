import styled from 'styled-components';
import { lighten } from 'polished';

import headerImage from './img/header.jpg';

export const Container = styled.article`
    width: 100%;
    height: 120vh;
    padding-top: 60px;
    display: flex;
`;

export const Header = styled.div`
    width: 95%;
    height: 270px;
    margin-top: 25px;
    margin-left: auto;
    border-radius: 10px 0 0 50px;
    background-image: url(${headerImage});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;
