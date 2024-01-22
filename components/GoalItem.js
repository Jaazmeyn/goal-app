import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props){
    return  (
        <View style={styles.goalItem}>        
            <Pressable 
                android_ripple={{color: '#dddddd'}} 
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem} //object destructuring otherwise PressData.pressed but used {} provided by Pressable
                >
                <Text style={styles.goaltext}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
        goalItem: {
            margin: 8,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#cccccc',
            backgroundColor: '#f2ef',
          },
          pressedItem: {
            opacity: 0.5
          },
          goaltext: {
            color: 'black',            
            padding: 8,

          }
    }
)