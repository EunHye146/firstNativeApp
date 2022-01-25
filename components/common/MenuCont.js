import React from 'react'
import { Text } from 'react-native';
import styled from 'styled-components';

const MenuContainer = styled.View`
    flex-direction: row;
    padding: 16px 16px 0px 16px;
    justify-content: space-between;
`;

const MenuWrap = styled.TouchableOpacity`
    align-items: center;
    background: lightgray;
    border-radius: 5px;
    width: 106px;
    padding: 16px 0px 16px 0px;
`;

const Menu = styled.Text`
    font-weight: 500;
    font-size: 14px;
`;

function MenuCont({ setMain }) {
    return (
        <MenuContainer>
            <MenuWrap onPress={ () => {setMain('Add')}}>
                <Menu>
                    Add
                </Menu>
            </MenuWrap>
            <MenuWrap onPress={ () => {setMain('Home')}}>
                <Menu>
                    Home
                </Menu>
            </MenuWrap>
            <MenuWrap onPress={ () => {setMain('MyPage')}}>
                <Menu>
                    MyPage
                </Menu>
            </MenuWrap>
        </MenuContainer>
    );
  }
  
  export default MenuCont;