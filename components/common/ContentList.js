import React from 'react'
import { Text, ScrollView } from 'react-native';
import styled from 'styled-components';

const ContentView = styled.View`
    margin-top: 40px;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0px 5px 0px 5px;
`;

const ContentWrap = styled.TouchableOpacity`
    margin: 5px;
`;

const Content = styled.View`
    border: 1px solid gray;
    width: 180px;
    height: 180px;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
`;

function ContentList() {
    
    return(
        <ScrollView>
            <ContentView>
                <ContentWrap>
                    <Content>
                        <Text>image</Text>
                    </Content>
                    <Text>제품 이름</Text>
                </ContentWrap>
                <ContentWrap>
                    <Content>
                        <Text>image</Text>
                    </Content>
                    <Text>제품 이름</Text>
                </ContentWrap>
                <ContentWrap>
                    <Content>
                        <Text>image</Text>
                    </Content>
                    <Text>제품 이름</Text>
                </ContentWrap>
                <ContentWrap>
                    <Content>
                        <Text>image</Text>
                    </Content>
                    <Text>제품 이름</Text>
                </ContentWrap>
                <ContentWrap>
                    <Content>
                        <Text>image</Text>
                    </Content>
                    <Text>제품 이름</Text>
                </ContentWrap>
                <ContentWrap>
                    <Content>
                        <Text>image</Text>
                    </Content>
                    <Text>제품 이름</Text>
                </ContentWrap>
                <ContentWrap>
                    <Content>
                        <Text>image</Text>
                    </Content>
                    <Text>제품 이름</Text>
                </ContentWrap>
            </ContentView>
        </ScrollView>
    )
}
 
export default ContentList;