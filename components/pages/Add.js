import React, { useState } from 'react'
import { Text, Alert } from 'react-native';
import styled from 'styled-components';

const AddContainer = styled.View`
    flex: 1;
`;

const FirstView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const AddFormView = styled.ScrollView`
    flex: 1;
`;

const Form = styled.View`
    height: 500px;
    margin: 10px;
    border: 1px solid;
    border-radius: 5px;
`;

const ButtonWrap = styled.View`
    flex-direction: row;
    margin: 0px 10px 0px 10px;
    justify-content: space-between;
`;

const StyledButton = styled.TouchableOpacity`
    width: 180px;
    height: 56px;
    border: 1px solid gray;
    justify-content: center;
    align-items: center;
    
`;

const TextEle = styled.Text`
    font-size: 24px;
    font-weight: 500;
    margin: 20px;
`;

const AddButton = styled.TouchableOpacity`
    width: 200px;
    height: 200px;
    background: #3b93eb;
    align-items: center;
    justify-content: center;
    border-radius: 200px;
    margin: 20px;
`;

const Plus = styled.Text`
    font-size: 70px;
`;


function Add() {
    const [add, setAdd] = useState(false);
    const addClicked = () => {
        //내용 추가하는 함수내용 작성
        setAdd(false);
    }
    const cancleClicked = () => {
        Alert.alert(
            "취소하시겠습니까?",
            "입력된 내용이 모두 취소됩니다.",
            [
                {
                    text: "아니요",
                    style: "cancel"
                },
                { 
                    text: "네", 
                    onPress: () => setAdd(false)
                }
            ]
          );
    }
    const plusClicked = () => {
        setAdd(true);
    }
    return (
            <AddContainer>
                {add ?
                <AddFormView>
                    <Text>옷 추가하기 form</Text>
                    <Form>

                    </Form>
                    <ButtonWrap>    
                        <StyledButton onPress={addClicked}><Text>추가</Text></StyledButton>
                        <StyledButton onPress={cancleClicked}><Text>취소</Text></StyledButton>
                    </ButtonWrap>
                </AddFormView> :
                <FirstView>
                    <TextEle>새로운 옷을 추가해보세요!</TextEle>
                    <AddButton onPress={plusClicked}>
                        <Plus>➕</Plus>
                    </AddButton>    
                </FirstView>
                }
            </AddContainer>
            
    );
  }
  
  export default Add;