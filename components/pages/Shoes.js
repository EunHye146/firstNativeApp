import React from 'react'
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

function Shoes() {
    return (
        <Container>
            <Text>Shoes</Text>
        </Container>
    );
  }
  
  export default Shoes;