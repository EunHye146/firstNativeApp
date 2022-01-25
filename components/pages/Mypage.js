import React, { useState } from 'react'
import { Button, Text, View } from 'react-native';
import styled from 'styled-components';
import Login from '../common/Login';

const MyPageContainer = styled.View`
    flex: 1;
    align-items: center;
    padding: 10%;
`;

const TextEle = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: gray;
`;


function MyPage() {
    const [user, setUser] = useState();
    const login = () => {
        if (user)
            setUser()
        else
            setUser('user');
    }
    return (
            <MyPageContainer>
                {
                user ? 
                <View>
                    <TextEle>{user}님 안녕하세요</TextEle>
                    <Button onPress={login} title='logout'/>
                </View> : 
                <View>
                    <Login login={login}/>
                </View>
                }

            </MyPageContainer>
            
    );
  }
  
  export default MyPage;