import React, {FC} from 'react';
import {View,Button} from 'react-native';
 
interface Props{
    reverseData: () => void;
    
  }

  const SortButton: FC <Props>  = ({reverseData}) => {
             
  return(
    <View style={{ flex: 1, padding: 24 }}>         
      <View>
          <Button 
          title="Sort Movies" 
          onPress={()=>reverseData()}> 
          </Button>  
      </View>
    </View>
  )
}

export default SortButton;
