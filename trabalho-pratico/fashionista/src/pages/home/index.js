import React from 'react';

import 'typeface-righteous';
import { Container, Header, Title} from './styles';

import Trends from '../../components/trendsSlider';

function Home() {

    return (
        <Container>
            <Header />
            <Title><span>Em destaque</span></Title>
            <Trends/>
        </Container>
    );
}

export default Home;