import React from 'react';

import 'typeface-righteous';
import { Container, Header, Trends, Title, TrendsList, TrendsListItem } from './styles';

import ProductCard from '../../components/productCard';

import productImage from './img/product.jpg';

function Home() {

    return (
        <Container>
            <Header />
            <Trends>
                <Title><span>Em destaque</span></Title>
                <TrendsList>
                    <TrendsListItem>
                        <ProductCard image={productImage} isInPromotion={true} promotionPercent={30} />
                    </TrendsListItem>
                    <TrendsListItem>
                        <ProductCard image={productImage} isInPromotion={true} promotionPercent={50} />
                    </TrendsListItem>
                    <TrendsListItem>
                        <ProductCard image={productImage} isInPromotion={false} promotionPercent={0} />
                    </TrendsListItem>
                    <TrendsListItem>
                        <ProductCard image={productImage} isInPromotion={false} promotionPercent={0} />
                    </TrendsListItem>
                    <TrendsListItem>
                        <ProductCard image={productImage} isInPromotion={true} promotionPercent={15} />
                    </TrendsListItem>
                </TrendsList>
            </Trends>
        </Container>
    );
}

export default Home;