import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { Container, MenuList, MenuItem, CloseArea } from './styles';

function Menu({setIsMenuVisible}) {

    return (
        <>
            <Container>
                <MenuList>
                    <MenuItem>
                        <span>Carrinho</span>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </MenuItem>
                    <MenuItem>
                        <span>Minha conta</span>
                        <FontAwesomeIcon icon={faUserCircle} />
                    </MenuItem>
                </MenuList>
            </Container>
            <CloseArea onClick={() => setIsMenuVisible(false)}/>
        </>
    );
}

export default Menu;