import React, {useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from 'react-native';

import {CustomHeader} from '../../components/CustomHeader';
import InputTask from '../../components/InputTask';
import TodoList from '../../components/TodoList';
import {clearStorage, containsKey, loadData, saveData} from '../../storage/';
import {TASK_KEY} from '../../constants';

import Button from '../../components/Button';
import {theme} from '../../styles/theme';

// const initialState = {
//   data: [],
//   newTask: "",
//   taskEditable: null,
//   error: false,
// };

//solution for android system.
const isAndroid = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

function Home() {
  const [data, setData] = React.useState<Task[]>([]);
  const [newTask, setNewTask] = React.useState('');
  const [taskEditable, setTaskEditable] = React.useState(null);
  const [error, setError] = React.useState<boolean>(false);

  // console.log("Rendered...");

  React.useEffect(() => {
    // console.log("useEffect I");
    async function loadDataLocalStorage() {
      const isKeyTask = await containsKey(TASK_KEY);
      const localData = await loadData(TASK_KEY);

      if (isKeyTask && localData !== null) {
        setData(localData);
      }
    }

    loadDataLocalStorage();
  }, []);

  async function saveDataStorage() {
    if (data.length > 0) {
      await saveData(TASK_KEY, data);
    }
  }

  React.useEffect(() => {
    // console.log("useEffect II");
    saveDataStorage();
  }, [data]);

  const onHandleAddTask = () => {
    if (newTask === '') {
      setError(true);
      return;
    }

    const id = Math.floor(Math.random() * 100);
    const task: Task = {
      id,
      task: `${newTask}`,
      isCompleted: false,
    };

    setData([...data, task]);
    setNewTask('');
    setError(false);
  };

  const onHandleEditTask = () => {
    if (newTask === '') {
      setError(true);
      return;
    }

    const editingTask: any = data.find(item => item.id == taskEditable.idTask);
    editingTask.task = newTask;

    setData([...data]);

    setNewTask('');
    setError(false);
  };

  const onDeleteTask = (id: number) => {
    const taskItems = data.filter(task => task.id !== id);

    setData([...taskItems]);
  };

  const onEditTask = useCallback((item: Task) => {
    setNewTask(item.task);
    setTaskEditable({edit: true, idTask: item.id});
  }, []);

  const onFinishTask = (id: number) => {
    const taskItem: any = data.find(task => task.id == id);

    taskItem.isCompleted = !taskItem.isCompleted;
    setData([...data]);
  };

  return (
    <SafeAreaView style={styles.app}>
      <CustomHeader title={'Your Task'} />

      <TodoList
        data={data}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
        onFinishTask={onFinishTask}
      />

      <CustomHeader title={'Add New Task'} />

      <View style={styles.bottomContainer}>
        <InputTask value={newTask} onChangeText={setNewTask} error={error} />

        <Button
          onPress={taskEditable ? onHandleEditTask : onHandleAddTask}
          text={taskEditable ? 'Edit' : 'Add'}
          style={buttonStyles.button}
          textStyle={buttonStyles.text}
          color={undefined}
          disabled={undefined}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: theme.colors.ui.WHITE,
    paddingTop: isAndroid,
  },
  bottomContainer: {
    padding: 16,
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    width: '100%',
    height: 61,
    backgroundColor: theme.colors.ui.BUTTON,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom: 25,
    marginTop: 55,
  },
  text: {
    color: theme.colors.text.WHITE,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: theme.fonts.Roboto_Regular,
  },
});

export default Home;
