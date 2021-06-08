import React,{useState,useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import SortButton from "./src/Components/sortButton";
import MovieList from "./src/Components/movieList";
import type {Movie} from "./src/Components/types";

const App = () => {
  
  const[data, setData] = useState<Movie []>([]);
  
    useEffect(() => {
    fetch('https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json')
    .then((response) => response.json())
    .then((json) => {
      (json.movies).sort((a: {episode_number:number}, b: {episode_number:number}) => a.episode_number - b.episode_number);
        setData(json.movies)})
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
