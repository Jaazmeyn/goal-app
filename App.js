import { StyleSheet, View, FlatList } from 'react-native';
import {useState} from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [liveGoals, setLiveGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    //stateupdate
    setLiveGoals( currentLiveGoals => [
      ...currentLiveGoals, 
     { text: enteredGoalText, id: Math.random().toString()},
      ]);
  }
  // give function as prop to use it in the component GoalItem.js
  function deleteGoalHandler(id){
    setLiveGoals(currentLiveGoals => {
      return currentLiveGoals.filter((goal) => goal.id !== id); 
    });
    
    console.log('DELETE');
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={liveGoals} renderItem={(itemData) => { //to be able to scroll performance optimized
          return (
            <GoalItem 
                text={itemData.item.text} 
                id={itemData.item.id} 
                onDeleteItem={deleteGoalHandler}
                
            />
          );
        }}
        keyExtractor={(item, index) => { //flatlist key property wir geben id des objekts mit
          return item.id;
        }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 4,
  },

});
