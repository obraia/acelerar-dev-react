import React from 'react';

import 'typeface-righteous';
import {Container, Promotion, Image, ProductSpecs} from './styles';

function ProductCard({image, isInPromotion, promotionPercent}) {

    return(
        <Container>
            <ProductSpecs>

            </ProductSpecs>
            <Image src={image}/>
            {isInPromotion ? <Promotion>{promotionPercent}%</Promotion> : null}

        </Container>
    );
}

export default ProductCard;