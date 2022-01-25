import React, { useState } from 'react'
import { Text, View, Button } from 'react-native';
import styled from 'styled-components';

const AddContainer = styled.View`
    flex: 1;
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

const ButtonWrap = styled.View`
`;


function Add() {
    const [add, setAdd] = useState(false);
    const addClicked = () => {
        if (add)
            setAdd(false);
        else
            setAdd(true);
    }
    return (
            <AddContainer>
                {add ?
                <>
                    <Text>옷 추가하기 form</Text>
                    <Button title="추가하기" onPress={addClicked}/>
                    <Button title="닫기" onPress={addClicked}/>
                </> :
                <>
                    <TextEle>새로운 옷을 추가해보세요!</TextEle>
                    <AddButton onPress={addClicked}>
                        <Plus>➕</Plus>
                    </AddButton>    
                </>
                }
            </AddContainer>
            
    );
  }
  
  export default Add;