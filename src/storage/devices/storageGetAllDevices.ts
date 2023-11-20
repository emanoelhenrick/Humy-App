import AsyncStorage from "@react-native-async-storage/async-storage";

import { DEVICE_COLLECTION } from "../storageConfig";

interface FieldData {
  entry_id: number;
  field1: number;
  created_at: Date;
}

interface DeviceData {
  channel: {
    created_at: Date;
    updated_at: Date;
    id: number;
    api_keys: [{
      api_key: string
    },
    {
      api_key: string
    }]
  },
  feeds: FieldData[]
}

export interface StorageData {
  name: string,
  data: DeviceData
}

export async function getAllDevices() {
  try {
    const storage = await AsyncStorage.getItem(DEVICE_COLLECTION)
    const devices:StorageData[] | []  = storage ? JSON.parse(storage) : []
    return devices
  } catch (error) {
    throw error
  }
}