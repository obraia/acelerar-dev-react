import React from 'react';

import 'typeface-righteous';
import {Container, Promotion, Image} from './styles';

function ProductCard({image, isInPromotion, promotionPercent}) {

    return(
        <Container>
            <Image src={image}/>
            {isInPromotion ? <Promotion>{promotionPercent}%</Promotion> : null}
        </Container>
    );
}

export default ProductCard;