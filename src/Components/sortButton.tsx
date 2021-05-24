import React, {FC} from 'react';
import {View,Button} from 'react-native';

interface Props{
    data: any [];
    order: boolean;
    updateData: (arg: any[]) => void
    updateOrder: (arg: boolean) => void
  }

const SortButton: FC <Props>  = ({data,order,updateData,updateOrder}) => {
      
      const sortData = () => {
        if (order){
          updateData([...data].sort(
            (a: { episode_number: number; },
            b: { episode_number: number; }) =>
            a.episode_number > b.episode_number ? -1 
            : a.episode_number < b.episode_number ? 1 : 0))
        }       
        else {
          updateData([...data].sort(
            (a: { episode_number: number; },
            b: { episode_number: number; }) =>
            a.episode_number < b.episode_number ? -1 
            : a.episode_number > b.episode_number ? 1 : 0))
          }
          updateOrder(!order)           
        }
               
    return(
      <View style={{ flex: 1, padding: 24 }}>         
        <View>
            <Button 
            title="Sort Movies" 
            onPress={()=>sortData()}> 
            </Button>  
        </View>
      </View>
    )
}

export default SortButton;