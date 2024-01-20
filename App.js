import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import {useState} from 'react';


export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [liveGoals, setLiveGoals] = useState([]);

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  };

  function addGoalHandler() {
    setLiveGoals( currentLiveGoals => [...currentLiveGoals, enteredGoalText]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="main goal" 
          onChangeText={goalInputHandler}/>
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
        <View style={styles.goalsContainer}>
          <ScrollView>
            {liveGoals.map((goal) => (
              <View key={goal} style={styles.goalItem}>
                <Text style={styles.goaltext}>{goal}</Text>
              </View>
            ))}
          </ScrollView>
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#fef',
  },
  goaltext: {
    color: 'red',
  }
});
