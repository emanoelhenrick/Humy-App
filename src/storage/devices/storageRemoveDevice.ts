import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllDevices } from "./storageGetAllDevices";
import { DEVICE_COLLECTION } from "../storageConfig";

export async function removeDevice(id: string) {
  const storedDevices = await getAllDevices()
  const updatedDevices = storedDevices.filter(dev => dev.data.channel.id.toString() !== id)

  try {
    const storage = JSON.stringify(updatedDevices)
    await AsyncStorage.setItem(DEVICE_COLLECTION, storage)
  } catch (error) {
    throw error
  }
  
}