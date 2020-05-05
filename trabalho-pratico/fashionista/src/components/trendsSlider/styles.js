import styled from 'styled-components';
import { lighten } from 'polished';

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

export const TrendsList = styled.ul`
    width: 1107px;
    list-style: none;
    display: flex;
    overflow-x: scroll;

    margin: 0 25px;
    margin-bottom: 50px;

    scroll-behavior: smooth;

    ::-webkit-scrollbar {
        scrollbar-width: 150px;
		width: 8px;
		height: 8px;
	}
	::-webkit-scrollbar-track {
        border-radius: 10px;
		background-color: ${props => lighten(0.3, props.theme.colors.secondary)};
	}
	::-webkit-scrollbar-thumb {
        width: 100px;
        height: 100px;
		border-radius: 10px;
        background-color: ${props => props.theme.colors.secondary};	
	}
`;

export const TrendsListItem = styled.li`
    margin-right: 25px;
    margin-bottom: 40px;
`;