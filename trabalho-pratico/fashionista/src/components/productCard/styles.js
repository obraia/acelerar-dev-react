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
    z-index: 2;
    pointer-events: none;
`;

export const ProductSpecs = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    background-color: #00000080;
    border-radius: 45px 45px 35px 10px;
    border: 5px solid ${props => props.theme.colors.primary};
    opacity: 0;
    z-index: 1;
    cursor: pointer;
    color: ${props => props.theme.colors.textPrimary};
    transition: opacity .2s;
    
    h1{
        opacity: 0;
    }

    &:hover{
        transition: opacity .2s;
        backdrop-filter: blur(5px);
        opacity: 100%;

        h1{
            transition: opacity .6s;
            opacity: 100%;
        }
    }
`;

export const ProductName = styled.h1`
    text-align: center;
`;

export const RegularPrice = styled.h1`
    text-decoration: line-through;
    text-align: center;
    margin-top: 15px;
    font-weight: lighter;
    font-size: 20px;
`;

export const ActualPrice = styled.h1`
    text-align: center;
    margin-top: 10px;
    font-size: 28px;
    padding: 5px 10px;
    border-radius: 15px 15px 15px 5px;
    background-color: ${props => props.theme.colors.primary};
`;