import React from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import CheckBoxCompleteTask from '../CheckBoxCompleteTask';
import {styles} from './styles';
import {theme} from '../../styles/theme';

type Props = {
  data: Task[];
  onDeleteTask: (id: number) => void;
  onEditTask: (task: Task) => void;
  onFinishTask: (id: number) => void;
};

const TodoList = ({data, onDeleteTask, onEditTask, onFinishTask}: Props) => {
  const renderItem = ({item}: {item: Task}) => {
    return (
      <Pressable
        onPress={() => onEditTask(item)}
        style={styles.ContainerRender}>
        <Pressable onPress={() => onFinishTask(item.id)}>
          <CheckBoxCompleteTask isChecked={item.isCompleted} />
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

  const itemSeparator = () => (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.ui.BORDER_BOTTOM,
      }}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        showVerticalScrollIndicator={false}
        testID="listTask"
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};

export default React.memo(TodoList);
