import React from 'react';
import {View, Text, FlatList, Pressable, Animated} from 'react-native';
import CheckBoxCompleteTask from '../CheckBoxCompleteTask';
import {styles} from './styles';
import {theme} from '../../styles/theme';
import {
  GestureHandlerRootView,
  RectButton,
  Swipeable,
} from 'react-native-gesture-handler';

type Props = {
  data: Task[];
  onDeleteTask: (id: number) => void;
  onEditTask: (task: Task) => void;
  onFinishTask: (id: number) => void;
};

type ActionProps = {
  progress: Animated.AnimatedInterpolation<string | number>;
  dragX: Animated.AnimatedInterpolation<string | number>;
  idTask: number;
};

const TodoList = ({data, onDeleteTask, onEditTask, onFinishTask}: Props) => {
  const RightActions = ({progress, dragX, idTask}: ActionProps) => {
    const opacity = dragX.interpolate({
      inputRange: [-150, 0],
      outputRange: [1, 0.9],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View style={[styles.swipedConfirmationContainer, {opacity}]}>
        <RectButton onPress={() => onDeleteTask(idTask)}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </RectButton>
      </Animated.View>
    );
  };

  const renderItem = ({item}: {item: Task}) => {
    return (
      <GestureHandlerRootView>
        <Swipeable
          renderRightActions={(progress, dragX) => (
            <RightActions progress={progress} dragX={dragX} idTask={item.id} />
          )}>
          <Pressable
            onPress={() => onEditTask(item)}
            style={styles.ContainerRender}>
            <Pressable onPress={() => onFinishTask(item.id)}>
              <CheckBoxCompleteTask isChecked={item.isCompleted} />
            </Pressable>

            <View style={styles.ContainerItem}>
              <Text style={styles.item}>{item.task}</Text>
              {/* <Pressable onPress={() => onDeleteTask(item.id)}>
              <Text style={styles.RemoveItem}>Remove Item</Text>
            </Pressable> */}
            </View>
          </Pressable>
        </Swipeable>
      </GestureHandlerRootView>
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
