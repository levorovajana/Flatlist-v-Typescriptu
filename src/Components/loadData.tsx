import  {FC, useEffect} from 'react';

interface Props{
  updateData: (arg: []) => void
}

const LoadData: FC <Props> = ({updateData}) => {

    useEffect(() => {
      fetch('https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json')
        .then((response) => response.json())
        .then((json) =>  updateData(json.movies))
        .catch((error) => console.error(error))
        
    }, []);
   
  return(
    null
  ) 
};

export default LoadData



