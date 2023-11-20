import axios from 'axios'
import { fetchAllChannels } from './fetchAllChannels';

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

export async function fetchDevice(id: number | string) {
  const channels = await fetchAllChannels()
  if (!channels) return

  const deviceChannel = channels.find((channel: { id: string | number; }) => channel.id == id)
  if (!deviceChannel) return

  const deviceData:DeviceData = await axios({
    method: "get",
    url: `https://api.thingspeak.com/channels/${id}/fields/1.json?api_key=${deviceChannel.api_keys[1].api_key}&results=3`,
  })
  .then(response => response.data)
  .catch(e => {
    console.error(e)
    return e;
  })
  deviceData.channel.api_keys = deviceChannel.api_keys
  return deviceData as DeviceData
}