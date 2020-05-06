import React, { useRef } from 'react';

import { Trends, ArrowButton, TrendsList, TrendsListItem } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import ProductCard from '../../components/productCard';

function TrendsSlide({ products }) {

    const trendList = useRef(null);

    function scrollTredns(value) {
        trendList.current.scrollLeft += value;
    }

    return (
        <Trends>
            <ArrowButton onClick={() => scrollTredns(-283)}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </ArrowButton>
            <TrendsList ref={trendList}>
                {products.map(product => (
                    <TrendsListItem key={product.code_color}>
                        <ProductCard image={product.image}
                            name={product.name}
                            regularPrice={product.regular_price}
                            actualPrice={product.actual_price}
                            isInPromotion={product.on_sale}
                            promotionPercent={product.discount_percentage} />
                    </TrendsListItem>
                ))}
            </TrendsList>
            <ArrowButton onClick={() => scrollTredns(283)}>
                <FontAwesomeIcon icon={faChevronRight} />
            </ArrowButton>
        </Trends>
    );
}

export default TrendsSlide;