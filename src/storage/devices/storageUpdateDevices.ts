import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllDevices } from "./storageGetAllDevices";
import { DEVICE_COLLECTION } from "../storageConfig";
import axios from "axios";

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

export async function updateDevices() {
  const devices = await getAllDevices()
  
  if (devices) {
    const updatedDevices = []
    for await (let dev of devices) {
      const updatedData = await fetchDevice(dev.data.channel.id, dev.data.channel.api_keys[1].api_key);
      const updatedDev = { data: updatedData, name: dev.name }
      updatedDev.data.channel.api_keys = dev.data.channel.api_keys
      updatedDevices.push(updatedDev)
    }

    try {
      const storage = JSON.stringify(updatedDevices)
      await AsyncStorage.setItem(DEVICE_COLLECTION, storage)
    } catch (error) {
      throw error
    }

  }
}

export async function fetchDevice(id: number | string, apiKey: string) {
  
  const deviceData = await axios({
    method: "get",
    url: `https://api.thingspeak.com/channels/${id}/fields/1.json?api_key=${apiKey}&results=3`,
  })
  .then(response => response.data)
  .catch(e => {
    console.error(e)
    return e;
  })

  return deviceData as DeviceData
}