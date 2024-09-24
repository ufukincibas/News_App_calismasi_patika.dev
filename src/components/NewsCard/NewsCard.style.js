import { StyleSheet ,Dimensions } from "react-native";

export default StyleSheet.create({
container : {
    backgroundColor: 'white',
    margin:10,
    borderRadius:10,
} ,
image: { height: Dimensions.get('window').height / 4    // yükseklik ,cihazın yüksekliğinin 4 te biri kadar yer kaplasın .
    ,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    } , 
title: { fontWeight:'bold',
    fontSize:18,
} , 
description: {
    marginTop:10,
},
inner_container: {margin:10},
author:{
    fontStyle:"italic",
    textAlign:"right" //saga kaydırıyor metni tamamen
},

})