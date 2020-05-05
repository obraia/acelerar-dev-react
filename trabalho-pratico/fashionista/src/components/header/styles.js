import styled from 'styled-components';

export const Container = styled.header`
    position: fixed;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 25px;
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.a`
    font-family: Righteous, Arial, sans-serif;
    font-size: 26px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.textBackground};
    cursor: pointer;

    &:hover{
        color: ${props => props.theme.colors.textBackground};
    }
`;

export const SearchGroup = styled.div`
    display: flex;
    padding: 5px 10px;
    align-items: center;
    margin-left: auto;
    border-radius: 25px;
    border-bottom-right-radius: 5px;
    border: 1px solid ${props => props.theme.colors.secondary};
`;

export const SearchInput = styled.input`
    width: 150px;
    height: 20px;
    font-size: 16px;
    border: none;
    outline: none;
    font-family: Roboto, sans-serif;
    font-weight: lighter;
    color: ${props => props.theme.colors.textBackground};
    background-color: transparent;
`;

export const SearchSubmit = styled.button`
    width: 20px;
    height: 20px;
    margin-left: 5px;
    border: none;
    outline: none;
    cursor: pointer;
`;


export const Profile = styled.button`
    width: 40px;
    height: 40px;
    margin-left: 25px;
    border-radius: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    border: 1px solid red;
`;