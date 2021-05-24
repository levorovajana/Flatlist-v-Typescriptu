import React,{useState} from 'react';
import { StyleSheet, View } from 'react-native';
import LoadData from "./src/Components/loadData";
import SortButton from "./src/Components/sortButton";
import LoadFlatlist from "./src/Components/loadFlatlist";

const App = () => {
  const[data, setData] = useState<any>([]);
  const[order, setOrder] = useState<boolean>(true);//true = ascending

  const updateOrder = (order: boolean):void => {
    setOrder(order)
  }

  const updateData = (data: any[]):void => {
    setData(data)
  }
  
  return (
    <View style={styles.container}> 
      <LoadData 
        updateData = {updateData}>
      </LoadData> 

      <LoadFlatlist 
        data = {data} 
      />

      <SortButton 
        data = {data} 
        order={order} 
        updateData={updateData} 
        updateOrder={updateOrder}>
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

