import { Text, View,SafeAreaView, StyleSheet, FlatList,StatusBar ,Modal,Button, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
export default function App() {
 const [count, setCount] = useState(0)
 const [name, setName] = useState("Shreyar")
 useEffect (() =>
{
 if(count == 5)
 {
 setName("Zeeshan") 
 }
} )
 return (
 <View style ={{margin:30}}>
 <Text> {count}
 </Text>
 <Text> {name} </Text>
 <Button title="Add" onPress={() => setCount(count + 1)}> </Button>
 </View>
 );
}

// Activity 2
const DATA = [
 {
 id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
 title: 'First Item',
 },
 {
 id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
 title: 'Second Item',
 },
 {
 id: '58694a0f-3da1-471f-bd96-145571e29d72',
 title: 'Third Item',
 },
];
const Item = ({ title }) => (
 <View style={styles.item}>
 <Text style={styles.title}>{title}</Text>
 </View>
);
const App = () => {
 const renderItem = ({ item }) => (
 <Item title={item.title} />
 );
 return (
 <SafeAreaView style={styles.container}>
 <FlatListdata={DATA}
 renderItem={renderItem}
 keyExtractor={item => item.id}
 />
 </SafeAreaView>
 );
}
const styles = StyleSheet.create({
 container: {
 flex: 1,
 marginTop: StatusBar.currentHeight || 0,
 },
 item: {
 backgroundColor: '#f9c2ff',
 padding: 20,
 marginVertical: 8,
 marginHorizontal: 16,
 },
 title: {
 fontSize: 32,
 },
});
export default App;

//task 1

const DiscountCalculatorApp = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  const calculateDiscount = () => {
    if (originalPrice !== '' && discountPercentage !== '') {
      const original = parseFloat(originalPrice);
      const discount = parseFloat(discountPercentage);
      const discountedPrice = original - (original * discount) / 100;
      const saveAmount = original - discountedPrice;

      const calculation = `${original} - ${discount}% = ${discountedPrice.toFixed(2)}`;

      setHistory([...history, calculation]);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={{marginLeft:20,paddingTop:20,fontWeight:"bold"}}>Discount Calculator App</Text>
        <TextInput
          placeholder="Original Price"
          keyboardType="numeric"
          value={originalPrice}
          onChangeText={(text) => setOriginalPrice(text)}
          style={{margin:20,padding:20,borderWidth:2}}
        />
        <TextInput
          placeholder="Discount Percentage"
          keyboardType="numeric"
          value={discountPercentage}
          onChangeText={(text) => setDiscountPercentage(text)}
          style={{margin:20,padding:20,borderWidth:2}}
        />
        <Text style={{marginLeft:20,paddingTop:20,fontWeight:"bold"}}></Text>
        <Button title="Calculate Discount" onPress={calculateDiscount} />
        <Text style={{marginLeft:20,paddingTop:20,fontWeight:"bold"}}></Text>
        <Button title="View History" onPress={() => setShowHistoryModal(true)}  />

        <Modal
          visible={showHistoryModal}
          animationType="slide"
          transparent={false}
        >
          <View style={{alignItems:"center",justifyContent:"center",padding:50, margin:50}}>
            <Text>History of Calculations</Text>
            <FlatList
              data={history}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <Text>{item}</Text>}
            />
            <Button title="Close History" onPress={() => setShowHistoryModal(false)} />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default  App;