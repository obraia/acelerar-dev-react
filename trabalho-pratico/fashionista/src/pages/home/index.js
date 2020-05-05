import React, { useState, useRef, useEffect } from 'react';

import 'typeface-righteous';
import { Container, Header, Title, Trends, ArrowButton, TrendsList, TrendsListItem } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import ProductCard from '../../components/productCard';

import product01 from './img/product01.jpg';
import product02 from './img/product02.jpg';
import product03 from './img/product03.jpg';
import product04 from './img/product04.jpg';

function Home() {

    const trendList = useRef(null);
    const [trendScrollValue, setTrendScrollValue] = useState(0);

    useEffect(() => {
        trendList.current.scrollTo(trendScrollValue, 0);
    }, [trendScrollValue]);

    return (
        <Container>
            <Header />
            <Title><span>Em destaque</span></Title>
            <Trends>
                <ArrowButton onClick={() => setTrendScrollValue(trendScrollValue - 283)}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </ArrowButton>
                <TrendsList ref={trendList}>
                    <TrendsListItem>
                        <ProductCard image={product01} isInPromotion={true} promotionPercent={30} />
                    </TrendsListItem>
                    <TrendsListItem>
                        <ProductCard image={product02} isInPromotion={true} promotionPercent={50} />
                    </TrendsListItem>
                    <TrendsListItem>
                        <ProductCard image={product03} isInPromotion={false} promotionPercent={0} />
                    </TrendsListItem>
                    <TrendsListItem>
                        <ProductCard image={product04} isInPromotion={false} promotionPercent={0} />
                    </TrendsListItem>
                    <TrendsListItem>
                        <ProductCard image={product01} isInPromotion={true} promotionPercent={15} />
                    </TrendsListItem>
                    <TrendsListItem>
                        <ProductCard image={product01} isInPromotion={true} promotionPercent={15} />
                    </TrendsListItem>
                </TrendsList>
                <ArrowButton onClick={() => setTrendScrollValue(trendScrollValue + 283)}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </ArrowButton>
            </Trends>
        </Container>
    );
}

export default Home;