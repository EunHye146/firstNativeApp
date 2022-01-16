import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { bounce } from 'react-native/Libraries/Animated/Easing';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
    flex: 1;
`;

const TitleWrap = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Title = styled.Text`
    font-weight: bold;
    font-size: 40px;
    letter-spacing: 7px;
`;

const CategoryWrap = styled.View`
    flex: 4;
    justify-content: center;
    padding-bottom: 30px;
`;

const Category = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border: 1px solid;
`;

const MenuContainer = styled.View`
  flex-direction: row;
`;

const MenuWrap = styled.TouchableOpacity`
    flex: 1;
    margin: 15px;
    align-items: center;
    background: lightgray;
    padding : 5px;
    border-radius: 5px;
`;

const Menu = styled.View`
    padding: 10px;
`;

function Home({ navigation }) {
    const [Main, setMain] = useState('Home');
    return (
        <Container>
            <TitleWrap>
                <Title>{Main}</Title>
            </TitleWrap>
            { Main === 'Home' && <>
                <CategoryWrap>
                    <Category onPress={ () => navigation.navigate("Outer")}>
                        <Text>Outer</Text>
                    </Category>
                    <Category onPress={ () => navigation.navigate("Top")}>
                        <Text>Top</Text>
                    </Category>
                    <Category onPress={ () => navigation.navigate("Bottom")}>
                        <Text>Bottom</Text>
                    </Category>
                    <Category onPress={ () => navigation.navigate("Dress")}>
                        <Text>Dress</Text>
                    </Category>
                    <Category onPress={ () => navigation.navigate("Shoes")}>
                        <Text>Shoes</Text>
                    </Category>
                    <Category onPress={ () => navigation.navigate("Acc")}>
                        <Text>Acc</Text>
                    </Category>
                </CategoryWrap>
            </>}
            { Main === 'Add' && <CategoryWrap><Text>Add</Text></CategoryWrap>}
            { Main === 'MyPage' && <CategoryWrap><Text>MyPage</Text></CategoryWrap>}
            <MenuContainer>
                <MenuWrap onPress={ () => {setMain('Add')}}>
                    <Menu>
                        <Text>Add</Text>
                    </Menu>
                </MenuWrap>
                <MenuWrap onPress={ () => {setMain('Home')}}>
                    <Menu>
                        <Text>Home</Text>
                    </Menu>
                </MenuWrap>
                <MenuWrap onPress={ () => {setMain('MyPage')}}>
                    <Menu>
                        <Text>MyPage</Text>
                    </Menu>
                </MenuWrap>
            </MenuContainer>
        </Container>
    );
  }
  
  export default Home;