import axios from "axios"

export async function fetchAllChannels() {
  const channels = await axios({
    method: "get",
    url: `https://api.thingspeak.com/channels.json?api_key=620F4ASLOTF3OKVW`,
  })
  .then(response => response.data)
  return channels
}