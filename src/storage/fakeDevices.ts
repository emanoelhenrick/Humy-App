interface Device {
  id: string;
  name: string;
  currentPercent: number;
  maxPercent: number;
  minPercent: number;
  lastVerify: Date
}

export const monitoredDevices: Device[] = [
  { name: "Sala de estar", currentPercent: 68, id: 'A1', maxPercent: 72, minPercent: 56, lastVerify: new Date() },
  { name: "Quarto manel", currentPercent: 57, id: 'A2', maxPercent: 89, minPercent: 42, lastVerify: new Date() },
  { name: "Cozinha", currentPercent: 56, id: 'A3', maxPercent: 65, minPercent: 37, lastVerify: new Date() },
]