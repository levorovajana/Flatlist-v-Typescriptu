import React,{useState,useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import SortButton from "./src/Components/sortButton";
import ShowFlatlist from "./src/Components/showFlatlist";

const App = () => {
  
  const[data, setData] = useState<string[]>([]);
  
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json')
      .then((response) => response.json())
      .then((json) =>  setData(json.movies))
      .catch((error) => console.error(error))    
  }, []);
 
  return (
    <View style={styles.container}> 
      <ShowFlatlist 
        data = {data} 
      />

      <SortButton 
        data = {data} 
        setData={setData}>
      </SortButton>            
    </View>
  );
}
               
export default App;

const styles = StyleSheet.create({
  container: {   
    alignItems: 'center',
  },
});

