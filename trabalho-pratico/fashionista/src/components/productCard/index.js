import React from 'react';

import 'typeface-righteous';
import {Container, Promotion, Image, ProductSpecs, RegularPrice, ProductName, ActualPrice  } from './styles';

function ProductCard({image, name, regularPrice, actualPrice, isInPromotion, promotionPercent}) {

    return(
        <Container>
            <ProductSpecs>
                <ProductName>{name}</ProductName>
                <RegularPrice>{regularPrice}</RegularPrice>
                <ActualPrice>{actualPrice}</ActualPrice>
            </ProductSpecs>
            <Image src={image}/>
            {isInPromotion ? <Promotion>{promotionPercent}</Promotion> : null}

        </Container>
    );
}

export default ProductCard;