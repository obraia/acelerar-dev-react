import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import 'typeface-righteous';
import { Container, Header, Title } from './styles';

import Trends from '../../components/trendsSlider';

function Home() {

    const [products, setProducts] = useState([]);
    const [trendsProducts, setTrendsProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const response = await api.get();
            console.log(response.data);
            setProducts([...response.data]);
            setTrendsProducts([...response.data.filter(product => product.on_sale == true)]);
        }
        getProducts();
    }, []);


    return (
        <Container>
            <Header />
            <Title><span>Em destaque</span></Title>
            <Trends products={trendsProducts}/>
        </Container>
    );
}

export default Home;