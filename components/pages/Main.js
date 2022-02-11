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

function Main({ navigation }) {
    const [Main, setMain] = useState('Home');
    return (
        <Container>
            { Main === 'Home' && <Home navigation={navigation}/>}
            { Main === 'Add' && <Add/>}
            { Main === 'MyPage' && <MyPage/>}
            <MenuCont setMain={setMain}/>
        </Container>
    );
  }
  
  export default Main;