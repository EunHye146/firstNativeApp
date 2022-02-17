import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'

const MenuContainer = styled.View`
    flex-direction: row;
    padding: 16px 16px 0px 16px;
    justify-content: space-between;
`;

const MenuWrap = styled.TouchableOpacity`
    align-items: center;
    border: 1px solid;
    border-radius: 5px;
    width: 98px;
    padding: 12px 12px;
`;

function MenuCont({ setMain, navigation }) {
    return (
        <>
            <MenuContainer>
                <MenuWrap onPress={ () => {setMain('Home')}}>
                    <FontAwesomeIcon icon={faHouse} size={25}/>
                </MenuWrap>
                <MenuWrap onPress={() => navigation.navigate("Add")}>
                    <FontAwesomeIcon icon={faPlus} size={25} />
                </MenuWrap>
                <MenuWrap onPress={ () => {setMain('MyPage')}}>
                    <FontAwesomeIcon icon={faUser} size={25} />
                </MenuWrap>
            </MenuContainer>
        </>
    );
  }
  
  export default MenuCont;