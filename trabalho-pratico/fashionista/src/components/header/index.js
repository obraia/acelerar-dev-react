import React from 'react';

import 'typeface-righteous';
import {Container, Logo, Profile, ProfileImage, SearchGroup, SearchInput, SearchSubmit} from './styles';
import Search from '../svg/search';

import profileImage from './img/perfilExemple.jpg';

function Header() {

    return(
        <Container>
            <Logo>Fashionista</Logo>
            <SearchGroup>
                <SearchInput placeholder='Pesquisar...'/>
                <SearchSubmit><Search/></SearchSubmit>
            </SearchGroup>
            <Profile>
                <ProfileImage src={profileImage}/>
            </Profile>
        </Container>
    );
}

export default Header;