import React, { useCallback } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import { CustomHeader } from "../../components/CustomHeader";
import InputTask from "../../components/InputTask";
import TodoList from "../../components/TodoList";
import { clearStorage, containsKey, loadData, saveData } from "../../storage/";
import { TASK_KEY } from "../../constants";



import Button from "../../components/Button";
import { theme } from "../../styles/theme";


// const initialState = {
//   data: [],
//   newTask: "",
//   taskEditable: null,
//   error: false,
// };


function Home() {
    const [data, setData] = React.useState([]);
    const [newTask, setNewTask] = React.useState("Task");
    const [taskEditable, setTaskEditable] = React.useState(null);
    const [error, setError] = React.useState(false);


    // console.log("Rendered...");

    React.useEffect(() => {
        // console.log("useEffect I");
        (async () => {
            const isKeyTask = await containsKey(TASK_KEY);
            if (isKeyTask) {
                const localDAta = await loadData(TASK_KEY)
                setData(localDAta)
            }
        })()
    }, []);

    React.useEffect(() => {
        // console.log("useEffect II");

        (async () => {
            const isKeyTask = await containsKey(TASK_KEY);
            if (isKeyTask) {
                await saveData(TASK_KEY, data);
            }
        })()
    }, [data]);

    const onHandleAddTask = () => {
        if (newTask === "") {
            setError(true);
            return;
        }

        let id = Math.floor(Math.random() * 100);

        setData([
            ...data,
            {
                id,
                task: `${newTask} ${id}`,
                isCompleted: false,
            },
        ]);
        // setNewTask("");
        setError(false);
    };

    const onHandleEditTask = () => {
        if (newTask === "") {
            setError(true);
            return;
        }

        let editingTask = data.find((item) => item.id == taskEditable.idTask);
        editingTask.task = newTask;

        setData([...data]);

        setNewTask("");
        setError(false);
    };

    const onDeleteTask = (idTask) => {
        let taskItems = data.filter((task) => task.id !== idTask);

        setData([...taskItems]);
    };

    const onEditTask = useCallback((item) => {
        setNewTask(item.task);
        setTaskEditable({ edit: true, idTask: item.id });
    }, []);

    const onFinishTask = (id) => {
        let taskItem = data.find((task) => task.id == id);
        taskItem.isCompleted = !taskItem.isCompleted;
        setData([...data]);
    };


    return (
        <SafeAreaView style={styles.app}>
            <CustomHeader title={"Your Task"} />

            <TodoList
                data={data}
                onDeleteTask={onDeleteTask}
                onEditTask={onEditTask}
                onFinishTask={onFinishTask}
            />

            <CustomHeader title={"Add New Task"} />

            <View style={{ padding: 16 }}>
                <InputTask value={newTask} onChangeText={setNewTask} error={error} />

                <Button
                    onPress={taskEditable ? onHandleEditTask : onHandleAddTask}
                    text={taskEditable ? "Edit" : "Add"}
                    style={buttonStyles.button}
                    textStyle={buttonStyles.text}
                    color={undefined}
                    disabled={undefined} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: theme.colors.ui.WHITE,
    },
});

const buttonStyles = StyleSheet.create({
    button: {
        width: "100%",
        height: 61,
        backgroundColor: theme.colors.ui.BUTTON,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginBottom: 25,
        marginTop: 55,
    },
    text: {
        color: theme.colors.text.WHITE,
        fontWeight: "700",
        fontSize: 16,
        textAlign: "center",
        fontFamily: theme.fonts.Roboto_Regular,
    },
});

export default Home;
