import React from 'react'
import { Text } from 'react-native';
import styled from 'styled-components';

const CategoryWrap = styled.SafeAreaView`
    flex: 1;
    margin-left: 6px;
    margin-right: 6px;
`;

const TitleWrap = styled.View` 
    padding: 14px;
`;

const Title = styled.Text`
    font-weight: bold;
    font-size: 34px;
`;

const Left = styled.View`
    position: absolute;
    width: 50%;
    top: 65px;
`;

const Right = styled.View`
    position: absolute;
    right: 0;
    top: 165px;
    width: 50%;
`;

const Category = styled.TouchableOpacity`
    height: 200px;
    background: gray;
    margin: 6px;
`;

const AccCategory = styled.TouchableOpacity`
    height: 100px;
    background: gray;
    margin: 6px;
`;

const LeftTitle = styled.Text`
    font-size: 20px;
    position: absolute;
    right: 0;
    bottom: 0;
    letter-spacing: 1px;
`;

const RightTitle = styled.Text`
    font-size: 20px;
    position: absolute;
    right: 0;
    letter-spacing: 1px;
`;


function Home({ navigation }) {
    const user = 'user';
    return (
        <>
            <CategoryWrap>
                <TitleWrap>
                    <Title>My Closet</Title>
                </TitleWrap>
                <Left>
                    <Category onPress={ () => navigation.navigate("Outer")}>
                        <LeftTitle style={{position: 'absolute', bottom: 0, right: 0}}>Outer</LeftTitle>
                    </Category>
                    <Category onPress={ () => navigation.navigate("Bottom")}>
                        <LeftTitle style={{position: 'absolute', bottom: 0, right: 0}}>Bottom</LeftTitle>
                    </Category>
                    <Category onPress={ () => navigation.navigate("Shoes")}>
                        <LeftTitle style={{position: 'absolute', bottom: 0}}>Shoes</LeftTitle>
                    </Category>
                </Left>
                <Right>
                    <Category onPress={ () => navigation.navigate("Top")}>
                        <RightTitle>Top</RightTitle>
                    </Category>
                    <Category onPress={ () => navigation.navigate("Dress")}>
                        <RightTitle>Dress</RightTitle>
                    </Category>
                    <AccCategory onPress={ () => navigation.navigate("Acc")}>
                        <RightTitle>Acc</RightTitle>
                    </AccCategory>
                </Right>
            </CategoryWrap>
        </>    
    );
  }
  
  export default Home;