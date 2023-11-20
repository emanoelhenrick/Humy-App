import { getAllDevices } from "./storageGetAllDevices";

export async function storageGetDevice(id: string | number) {
  const devices = await getAllDevices()
  return devices.find(dev => dev.data.channel.id == id)
}