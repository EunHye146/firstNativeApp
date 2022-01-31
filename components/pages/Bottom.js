import React, { useState } from 'react'
import { View, Text } from 'react-native';
import styled from 'styled-components';
import ContentList from '../common/ContentList';

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

function Bottom() {
    const [text, onChangeText] = useState(null);
    return (
        <Container>
            <HeadContainer>
                <Title>
                    bottom
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
            <ContentList/>
        </Container>
    );
  }
  
  export default Bottom;