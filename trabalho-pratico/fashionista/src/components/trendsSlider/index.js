import React, { useRef } from 'react';

import { Trends, ArrowButton, TrendsList, TrendsListItem } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import ProductCard from '../../components/productCard';

import product01 from './img/product01.jpg';
import product02 from './img/product02.jpg';
import product03 from './img/product03.jpg';
import product04 from './img/product04.jpg';

function TrendsSlide({product}) {

    const trendList = useRef(null);

    function scrollTredns(value){
        trendList.current.scrollLeft += value;
    }

    return (
            <Trends>
                <ArrowButton onClick={() => scrollTredns(-283)}>
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
                <ArrowButton onClick={() => scrollTredns(283)}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </ArrowButton>
            </Trends>
    );
}

export default TrendsSlide;