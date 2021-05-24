import React, {FC} from 'react';
import {View, FlatList, Text, Image, StyleSheet} from 'react-native';

interface Props{
  data: any []
}
const LoadFlatlist: FC <Props> = ({data}) => {
 
  return(
    <View>         
      <FlatList              
        data={data}
        renderItem={({ item }) => (
        <View style={{flex:1, flexDirection: 'row'}}>
          <Image source = {{uri: 'https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/public/images/'+item.poster}} style={styles.imageView}/>
          <Text  style={styles.textView}>{item.episode_number}. {item.title} </Text>                 
        </View>   
      )}
      />
    </View>
  )
};

export default LoadFlatlist;

const styles = StyleSheet.create({
   
  imageView: {   
      width: '10%',
      height: 50 ,
      margin: 2,   
  },
   
  textView: { 
      width:'70%', 
      textAlignVertical:'center',
      padding:2, 
      
  }
   
  });


