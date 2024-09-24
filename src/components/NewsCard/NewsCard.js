import React from "react";
import { Text, View, Image, StyleSheet, SafeAreaView } from "react-native";
import styles from "./NewsCard.style"

const NewsCard = ({news}) => {      //burayı (props olarak bırakırsan props.news olarak cekersin direkt ({news}) yapınca aslında props.news yapıyorsun parcalayarak aldın)
    return (
      
        <View style={styles.container}>
            <Image style={styles.image} source={{uri : news.imageUrl}}/>
                <View style={styles.inner_container}>
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.description}>{news.description}</Text>
            <Text style={styles.author}>{news.author}</Text>
                </View>
        </View>
    
    );
}

export default NewsCard;

