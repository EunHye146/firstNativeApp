import React, {useState} from 'react'
import { View, Text, Button } from 'react-native';
import styled from 'styled-components';

const LoginContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const InputCon = styled.View`
    margin: 10px;
`;

const TextEle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: gray;
`;

const InputCont = styled.TextInput`
    font-size: 20px;
    padding: 6px;
    width: 260px;
    border: 1px solid lightgray;
    margin: 4px;
    padding: 12px;
`;

const LoginButton = styled.TouchableOpacity`
    background: gray;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
`;

const LoginText = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 22px;
`;

const Alert = styled.Text`
    font-size: 14px;
    color: red;
    opacity: 0.6;
`;

const RegisterButton = styled.TouchableOpacity`
    width: 300px;
    height: 50px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    margin-top: 100px;
`;

const RegisterText = styled.Text`
    font-size: 14px;
`;

function Login({ setUser }) {
    const [userId, setUserId] = useState();
    const [userPw, setUserPw] = useState();
    const [alert, setAlert] = useState(null);

    const login = () => {
        if (!userId || !userPw) {
            setAlert('아이디와 비밀번호를 모두 입력해주세요');
            return;
        }
        fetch('http://ip주소:4000/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                u_id: userId,
                u_pw: userPw,
            }),
        })
        .then((res) => {
            if (res.status == 404) {
                setAlert('아이디와 비밀번호를 확인해주세요');
                return;
            }
            else {
                setUser(userId);
            }
        });
    }
    return(
        <LoginContainer>
            <TextEle>로그인 후 사용가능합니다</TextEle>
            <InputCon>
                <InputCont
                        onChangeText={setUserId}
                        placeholder="id"
                        value={userId}
                />
                <InputCont
                        onChangeText={setUserPw}
                        placeholder="password"
                        value={userPw}
                        secureTextEntry={true}
                />
            </InputCon>
            {alert && <Alert>{alert}</Alert>}
            <LoginButton onPress={login}>
                <LoginText>Login</LoginText>
            </LoginButton>
            <RegisterButton>
                <RegisterText>
                    회원이 아니신가요? 지금 회원가입하기
                </RegisterText>
            </RegisterButton>
        </LoginContainer>
    )
}
 
export default Login;