export async function fetchAllChannels() {

  const channels = await fetch('https://api.thingspeak.com/channels.json?api_key=620F4ASLOTF3OKVW')
    .then(response => response.json())

  console.log(channels);
  
}