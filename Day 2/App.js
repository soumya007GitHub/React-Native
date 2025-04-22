// created a Goal Tracking App where we have Pressable, State management, Array Operations, Modals, FlatList

import { useState } from "react";
import { StyleSheet, StatusBar, Text, View, Button, Modal, Image, FlatList, TextInput, Pressable } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [goalArray, setGoalArray] = useState([]);
  const onChangeTextInputValue = (textWroteininputfield)=>{
    setTextInput(textWroteininputfield)
  }
  function openModal(){
    setModalVisible(true);
  }
  function addGoalIntoArray(){
    setGoalArray((goalArray)=>[...goalArray, {title: textInput, id: Math.random().toString()}]);
    setModalVisible(!modalVisible);
    setTextInput('');
  }
  function deleteItemFromArray(id){
    setGoalArray((goalArray)=>goalArray.filter((item)=>item.id !== id));
  }
  return (
    <>
    <View style={styles.container}>
    <StatusBar/>
    <Image source={require('./assets/goalImage.jpg')} style={styles.goalImageDimesions}/>
    {/* Button to open modal */}
    <View style={styles.buttonView}>
      <Button title={"Add Goal"} onPress={openModal}/> 
      </View>
    {/* FlatList to render Goal Items */}
    <View style={styles.flatListView}>
    <View style={{
    borderBottomWidth: 1, 
    borderBottomColor: 'gray', marginBottom: 10, marginTop: 20}}>
  <Text style={styles.myGoalsHeader}>My Goals</Text>
  </View>
  </View> 
  <FlatList
    data={goalArray}
    renderItem={({item}) => (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'purple', borderRadius: 15, marginBottom: 15}}>
        <Text style={styles.myGoalItems}>{item.title}</Text>
        <Pressable onPress={()=>deleteItemFromArray(item.id)}>
          <Text style={{fontSize: 20, marginRight: 10}}>🗑️</Text>
        </Pressable>
      </View>
    )}
    keyExtractor={item => item.id}
    style={{width: '90%'}}
    ListEmptyComponent={
    <Text style={styles.myGoalItems}>No goals added yet</Text>
  }
  />
</View> {/* container closed here*/}
{/* Modal with self close button */}
      <Modal
  animationType="slide"
  visible={modalVisible}
  transparent={false}
  onRequestClose={() => {
    setModalVisible(!modalVisible);
  }}
>
  <View style={styles.modalView}>
  <TextInput
          style={styles.textInput}
          onChangeText={onChangeTextInputValue}
          value={textInput}
          placeholder="Enter Goal"
          placeholderTextColor={'white'}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: '90%'}}>
        <View style={{width: '45%'}}>
        <Button title="Add Goal" onPress={addGoalIntoArray} /></View>
        <View style={{width: '45%'}}>
        <Button title="Close Modal" onPress={() => setModalVisible(!modalVisible)} /></View>
    </View>
  </View>
</Modal>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '5%'
  },
  goalImageDimesions: {
    width: 200,
    height: 200,
    marginBottom: 10
  },
  buttonView: {
    width: '60%'
  },
  myGoalsHeader: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15    
  },
  flatListView: {
  width: '90%',
  marginTop: 20,
},
myGoalItems: {
  color: 'white',
  fontSize: 20,
  marginBottom: 10,
  padding: 12,
},
  modalView: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'white',
    width: '90%',
    marginBottom: 10,
    color: 'white',
    borderRadius: 5
  },
});
