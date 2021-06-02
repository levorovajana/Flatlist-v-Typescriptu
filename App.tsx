import React,{useState,useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import SortButton from "./src/Components/sortButton";
import MovieList from "./src/Components/movieList";

const App = () => {
  
  const[data, setData] = useState<(string|number)[]>([]);
  
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json')
      .then((response) => response.json())
      .then((json) =>  setData(json.movies))
      .catch((error) => console.error(error))    
  }, []);

  const reverseData = ():void => {
    setData([...data].reverse())
  }
 
  return (
    <View style={styles.container}> 
      <MovieList 
        data = {data} 
      />

      <SortButton 
        reverseData={reverseData}>
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
