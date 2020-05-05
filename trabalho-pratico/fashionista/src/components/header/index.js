import React from 'react';

import 'typeface-righteous';
import {Container, Logo, Profile, SearchGroup, SearchInput, SearchSubmit} from './styles';

function Header() {

    return(
        <Container>
            <Logo>Fashionista</Logo>
            <SearchGroup>
                <SearchInput placeholder='Pesquisar...'/>
                <SearchSubmit/>
            </SearchGroup>
            <Profile/>
        </Container>
    );
}

export default Header;