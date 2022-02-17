import React from 'react'
import ContentList from '../common/ContentList';


function Outer({ navigation }) {
    return (
        <ContentList type="outer" navigation={navigation}/>
    );
  }
  
  export default Outer;