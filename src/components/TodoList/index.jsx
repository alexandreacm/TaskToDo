import React from "react";
import { View, Text, StyleSheet, FlatList , Pressable} from "react-native";
import CheckBoxCompleteTask from "../CheckBoxCompleteTask";
import { theme } from "../../styles/theme";

const TodoList = ({ data, onDeleteTask, onEditTask, onFinishTask }) => {
  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => onEditTask(item)}
        style={styles.ContainerRender}
      >
        <Pressable onPress={() => onFinishTask(item.id)}>
          <CheckBoxCompleteTask isChecked={item.isCompleted} isTask={item.id} />
        </Pressable>

        <View style={styles.ContainerItem}>
          <Text style={styles.item}>{item.task}</Text>
          <Pressable onPress={() => onDeleteTask(item.id)}>
            <Text style={styles.RemoveItem}>Remove Item</Text>
          </Pressable>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showVerticalScrollIndicator={false}
        testID="listTask"
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  item: {
    fontFamily: theme.fonts.Inter_Regular,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 19,
    textAlign: "left",
  },
  RemoveItem: {
    width: 89,
    height: 17,
    color: "#0C8CE9",
    textDecorationColor: "#0C8CE9",
    textDecorationLine: "underline",
    fontFamily: theme.fonts.Inter_Regular,
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 17,
    textAlign: "left",
  },
  ContainerRender: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#BDC5D0",
  },
  ContainerItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
});

export default React.memo(TodoList);
