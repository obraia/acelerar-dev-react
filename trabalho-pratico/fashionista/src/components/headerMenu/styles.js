import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

const open = keyframes`
    from {
        width: 0px;
    }
    to {
        width: 270px;
    }
`;

export const Container = styled.header`
    position: absolute;
    top: 65px;
    right: 25px;
    padding: 25px 0;
    border-radius: 15px 5px 15px 15px;
    overflow: hidden;
    z-index: 2;

    background-color: ${props => lighten(0.2, props.theme.colors.background)};
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);
`;

export const MenuList = styled.ul`
    animation: ${open} .1s linear;
    width: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;

    div{
        
    }
`;

export const MenuItem = styled.li`
    width: 101%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    font-size: 20px;
    font-weight: lighter;
    color: ${props => props.theme.colors.textSecondary};

    border-bottom: 2px solid ${props => props.theme.colors.background};
    border-top: 2px solid ${props => props.theme.colors.background};
    margin-left: -2px;
    margin-top: -2px;

    cursor: pointer;

    transition: text-indent .2s;

    &:hover{
        transition: text-indent .2s;
        background-color: ${props => props.theme.colors.background};
        text-indent: 10px;
    }
`;

export const CloseArea = styled.div`
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
`;