import React, { useState } from 'react'
import { Text, Alert } from 'react-native';
import styled from 'styled-components';

const AddContainer = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const AddForm = styled.View`
    border: 1px solid;
    width: 94%;
    flex: 1;
    margin: 10px;
`;

const ButtonWrap = styled.View`
    flex-direction: row;
`;

const StyledButton = styled.TouchableOpacity`
    width: 120px;
    height: 50px;
    border: 1px solid gray;
    justify-content: center;
    align-items: center;
    margin: 0px 20px 0px 20px;
`;


function Add({ navigation }) {
    const addClicked = () => {
        alert('추가되었습니다.');
        navigation.navigate('Main');
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
                    onPress: () => navigation.navigate("Main")
                }
            ]
          );
    }
    return (
        <>
            <AddContainer>
                <Text>옷 추가 폼</Text>
                <AddForm>
                    
                </AddForm>
                <ButtonWrap>
                    <StyledButton onPress={addClicked}> 
                        <Text>추가</Text>
                    </StyledButton>
                    <StyledButton onPress={cancleClicked}> 
                        <Text>취소</Text>
                    </StyledButton>
                </ButtonWrap>
            </AddContainer>
        </>
    );
  }
  
  export default Add;