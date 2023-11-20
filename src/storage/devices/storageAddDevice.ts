import AsyncStorage from "@react-native-async-storage/async-storage";
import { DEVICE_COLLECTION } from "../storageConfig";
import { getAllDevices } from "./storageGetAllDevices";

export async function addDevice(newDevice: any) {
  try {
    const storedDevices = await getAllDevices()
    const storage = JSON.stringify([...storedDevices, newDevice])
    await AsyncStorage.setItem(DEVICE_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}

export async function clearAllDevices() {
  await AsyncStorage.setItem(DEVICE_COLLECTION, '')
}