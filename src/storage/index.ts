import AsyncStorage from "@react-native-async-storage/async-storage";

const saveData = async(key: string, data: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (e: any) {
    console.log(e.message);
  }
};

const loadData = async(key: string) => {
 try {
   const value = await AsyncStorage.getItem(key);
   return value !== null ? JSON.parse(value) : null;
 } catch (e: any) {
   console.log(e.message);
 }
};

const containsKey = async (key: string): Promise<boolean> => {
  let containKey: boolean = false;
  try {
    let allKeys = await AsyncStorage.getAllKeys();
     containKey  = allKeys.includes(key);

  } catch (e:any) {
    console.error(e.message);
  }

  return containKey;
}

const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e: any) {
    console.error(e.message);
  }
}

const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e: any) {
    console.error(e.message);
  }
}

export { saveData, loadData, removeItem, containsKey, clearStorage };
