import React from 'react'
import { View, Text, Button } from 'react-native';
import styled from 'styled-components';

const LoginContainer = styled.View`
`;

const TextCom = styled.View`
`;

const TextEle = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: gray;
`;

const Form = styled.View`

`;

function Login({login}) {
    
    return(
        <LoginContainer>
            <TextCom>
                <TextEle>로그인 후 사용가능합니다</TextEle>
            </TextCom>
            <Button onPress={login} title='login'/>
        </LoginContainer>
    )
}
 
export default Login;