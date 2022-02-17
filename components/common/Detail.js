import React from 'react'
import { SafeAreaView, Text } from 'react-native'


function Detail({ route }) {
    return (
        <SafeAreaView>
            <Text>id: {route.params.id}</Text>
        </SafeAreaView>
    );
  }
  
  export default Detail;