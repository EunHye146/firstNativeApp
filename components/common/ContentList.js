import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
    flex: 1;
`;

const HeadContainer = styled.View`
    padding: 0px 10px 0px 10px;
    flex-direction: row;
`;

const Title = styled.Text`
    font-size: 50px;
    font-weight: bold;
`;

const SearchView = styled.View`
    flex: 1;
`;

const Search = styled.View`
    margin: 20px 0px 0px 50px;
    border: 1px solid gray;
    border-radius: 5px;
    justify-content: center;
`;

const InputCont = styled.TextInput`
    padding: 6px;
`;

const ContentWrap = styled.TouchableOpacity`
    padding: 10px;
    margin: 10px;
    border: 1px solid;
    flex-direction: row;
`;

const ImageCont = styled.View`
    width: 120px;
    height: 120px;
    background: black;
`;

const TextCont = styled.View`
    margin-left: 10px;
    justify-content: center;
`;

const StyledText = styled.Text`
    margin: 4px;
`;

function ContentList({ type, navigation }) {
    const [text, onChangeText] = useState(null);
    const [lists, setLists] = useState();
    const callApi = async () => {
        const response = await fetch(`http://ip주소:4000/clothes/${type}`);
        const body = await response.json();
        return body;
    }
    useEffect(() => {
        callApi()
        .then(res => setLists(res))
        .catch(err => console.log(err));
      },[])

    return (
        <Container>
            <HeadContainer>
                <Title>
                    {type}
                </Title>
                <SearchView>
                    <Search>
                    <InputCont
                        onChangeText={onChangeText}
                        placeholder="search"
                        value={text}
                    />
                    </Search>
                </SearchView>
            </HeadContainer>
            <ScrollView>
            {lists && lists.map((list, index) => 
                <ContentWrap onPress={ () => navigation.push('Detail', {id: index})}>
                    <ImageCont/>
                    <TextCont>
                        <StyledText>name : {list.name}</StyledText>
                        <StyledText>brand : {list.brand}</StyledText>
                        <StyledText>price : {list.price}원</StyledText>
                        <StyledText>size : {list.size}</StyledText>
                    </TextCont>
                </ContentWrap>
            )}
            </ScrollView>
        </Container>
    );
  }
  
  export default ContentList;