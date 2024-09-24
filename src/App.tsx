import React from "react";
import {  Text,View, FlatList,StyleSheet , ScrollView , Image, Dimensions} from "react-native";
import news_data from "./news_data.json"
import NewsCard from "./components/NewsCard"
import news_banner_data from "./news_banner_data.json"
function App(){
  return(
  
    <View style={styles.container}>

   
  
        <FlatList ListHeaderComponent={() =>(   <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {news_banner_data.map(bannerNews => (<Image  style={styles.image} source={{uri : bannerNews.imageUrl}}/>))}
      </ScrollView>)} 
        data={news_data} 
        keyExtractor={item => item.u_id.toString()}
        renderItem={({item}) => <NewsCard news={item}/>}/>
    
    </View>
 
  )
}


  export default App;
  const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'#eceef1'
    },
    image: { 
      height: Dimensions.get('window').height / 2,
      width: Dimensions.get('window').width / 2
    }
})