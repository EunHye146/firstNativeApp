import React from 'react'
import { Text } from 'react-native';
import styled from 'styled-components';

const CategoryWrap = styled.View`
    flex: 1;
    padding: 14px 10px 14px 10px;
`;

const Category = styled.TouchableOpacity`
    flex: 1;
    border: 1px solid gray;
    justify-content: center;
    align-items: center;
    margin: 14px 0px 14px 0px;
`;

const CateTitle = styled.Text`
    font-size: 15px;
    letter-spacing: 1px;
`;


function Home({ navigation }) {
    const user = 'user';
    return (
        <>
            <CategoryWrap>
                <Category onPress={ () => navigation.navigate("Outer")}>
                    <CateTitle>Outer</CateTitle>
                </Category>
                <Category onPress={ () => navigation.navigate("Top")}>
                    <CateTitle>Top</CateTitle>
                </Category>
                <Category onPress={ () => navigation.navigate("Bottom")}>
                    <CateTitle>Bottom</CateTitle>
                </Category>
                <Category onPress={ () => navigation.navigate("Dress")}>
                    <CateTitle>Dress</CateTitle>
                </Category>
                <Category onPress={ () => navigation.navigate("Shoes")}>
                    <CateTitle>Shoes</CateTitle>
                </Category>
                <Category onPress={ () => navigation.navigate("Acc")}>
                    <CateTitle>Acc</CateTitle>
                </Category>
            </CategoryWrap>
        </>    
    );
  }
  
  export default Home;