import React, {FC} from 'react';
import {View,Button} from 'react-native';
 
interface Props{
    [data: string]: any;
    setData: (arg: string[]) => void;
  }

  const SortButton: FC <Props>  = ({data,setData}) => {
             
  return(
    <View style={{ flex: 1, padding: 24 }}>         
      <View>
          <Button 
          title="Sort Movies" 
          onPress={()=>setData([...data].reverse())}> 
          </Button>  
      </View>
    </View>
  )
}

export default SortButton;
