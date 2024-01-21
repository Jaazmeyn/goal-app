import { StyleSheet, View, FlatList } from 'react-native';
import {useState} from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [liveGoals, setLiveGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setLiveGoals( currentLiveGoals => [
      ...currentLiveGoals, 
     { text: enteredGoalText, id: Math.random().toString()},
      ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={liveGoals} renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text}/>;
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
