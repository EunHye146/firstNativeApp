import React, { useEffect, useState } from 'react'
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
    return (
        <MyPageContainer>
            <Text>mypage</Text>
        </MyPageContainer>
    );
  }
  
  export default MyPage;