import React, { useState } from 'react'
import { Text } from 'react-native';
import styled from 'styled-components';
import MyPage from './Mypage';
import Add from './Add';
import Home from './Home';
import MenuCont from '../common/MenuCont';

const Container = styled.SafeAreaView`
    flex: 1;
`;

const TitleWrap = styled.View` 
    padding: 14px;
    align-items: center;
`;

const Title = styled.Text`
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 2px;
`;

function Main({ navigation }) {
    const [Main, setMain] = useState('Home');
    return (
        <Container>
            <TitleWrap>
                <Title>{Main}</Title>
            </TitleWrap>
            { Main === 'Home' && <Home navigation={navigation}/>}
            { Main === 'Add' && <Add/>}
            { Main === 'MyPage' && <MyPage/>}
            <MenuCont setMain={setMain}/>
        </Container>
    );
  }
  
  export default Main;