import React, { useState } from 'react';

import 'typeface-righteous';
import { Container, Logo, Profile, ProfileImage, SearchGroup, SearchInput, SearchSubmit } from './styles';
import Search from '../svg/search';

import HeaderMenu from '../headerMenu';

import profileImage from './img/perfilExemple.jpg';

function Header() {

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <Container>
            <Logo>Fashionista</Logo>
            <SearchGroup>
                <SearchInput placeholder='Pesquisar...' />
                <SearchSubmit><Search /></SearchSubmit>
            </SearchGroup>
            <Profile onClick={() => setIsMenuVisible(!isMenuVisible)}>
                <ProfileImage src={profileImage} />
            </Profile>
            {isMenuVisible ? <HeaderMenu setIsMenuVisible={setIsMenuVisible}/> : null}
        </Container>
    );
}

export default Header;