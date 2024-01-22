import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props){
    return  (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goaltext}>{props.text}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
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
    }
)