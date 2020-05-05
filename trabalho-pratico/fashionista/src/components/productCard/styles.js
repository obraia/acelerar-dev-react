import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.header`
    width: 258px;
    height: 393px;
    position: relative;
    border-radius: 45px 45px 35px 10px;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Promotion = styled.div`
    width: 80px;
    height: 50px;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top-right-radius: 45px;
    text-indent: 10px;
    font-size: 28px;
    color: ${props => props.theme.colors.textPrimary};
    background-color: ${props => props.theme.colors.primary};
`;
