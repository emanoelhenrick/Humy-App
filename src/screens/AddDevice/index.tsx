import { Alert, TouchableOpacity } from "react-native";
import { Container, Title, Subtitle, CodeInput, AddButton} from "./styles";
import { useState } from "react";
import { fetchDevice } from "../../storage/devices/api/fetchDevice";
import { addDevice } from "../../storage/devices/storageAddDevice";
import { useNavigation } from "@react-navigation/native";
import { storageGetDevice } from "../../storage/devices/storageGetDevice";

export function AddDevice() {

  const navigation = useNavigation()

  const [deviceCode, setDeviceCode] = useState('')
  const [deviceName, setDeviceName] = useState('')

  async function handleAddDevice() {

    if (!deviceCode) {
      return Alert.alert('Código inválido','Digite o código de identificação do dispositivo.')
    }

    if (!deviceName) {
      return Alert.alert('Nome inválido','Digite um nome de identificação para o dispositivo.')
    }

    const isDeviceAlreadyExists = await storageGetDevice(deviceCode)
    if (isDeviceAlreadyExists) {
      return Alert.alert('Já existe','O dispositivo já foi adicionado')
    }

    const deviceData = await fetchDevice(deviceCode)
    if (!deviceData) {
      return Alert.alert('Código inválido','Digite o código de identificação do dispositivo.')
    }
    
    const newDevice = { name: deviceName, data: deviceData }
    await addDevice(newDevice)
    navigation.navigate('home')
  }

  return (
    <Container>
      <Title>humy</Title>
      <Subtitle>Adicionar novo dispositivo</Subtitle>
      <CodeInput
        placeholder="Digite o código do dispositivo"
        placeholderTextColor={'#6b6b6b'}
        onChangeText={setDeviceCode}
      />
      <CodeInput
        placeholder="Digite um nome"
        placeholderTextColor={'#6b6b6b'}
        onChangeText={setDeviceName}
      />
      <TouchableOpacity onPress={handleAddDevice}>
        <AddButton>Adicionar</AddButton>
      </TouchableOpacity>
    </Container>
  )
}