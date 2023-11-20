import { FlatList, TouchableOpacity, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AddDevice, Container, Device, DeviceContainer, DeviceName, EmptyList, Header, HumPercent, LastVerification, Percent, SecondHeader, Subtitle, Title} from "./styles";
import { StorageData, getAllDevices } from "../../storage/devices/storageGetAllDevices";
import { useCallback, useState } from "react";
import { clearAllDevices } from "../../storage/devices/storageAddDevice";
import { updateDevices } from "../../storage/devices/storageUpdateDevices";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Home() {

  const [monitoredDevices, setMonitoredDevices] = useState<StorageData[]>([])

  async function loadAllDevices() {
    await updateDevices()
    const devices = await getAllDevices()
    if (devices) {
      setMonitoredDevices(devices);
    }
  }

  useFocusEffect(useCallback(() => {
    loadAllDevices()
    // clearAllDevices()
  }, []))

  const navigation = useNavigation()

  function handleDevicePage(deviceId: any) {
    navigation.navigate('device', { deviceId: deviceId.toString() })
  }

  function handleAddDevice() {
    navigation.navigate('addDevice')
  }

  function lastVerify(date: Date) {
    return formatDistance(new Date(),new Date(date) , { locale: ptBR })
  } 

  return (
    <Container>
      <Header>
        <Title>humy</Title>
        <TouchableOpacity onPress={handleAddDevice}>
          <AddDevice>Adicionar novo</AddDevice>
        </TouchableOpacity>
      </Header>
      <SecondHeader>
      <Subtitle>Dispositivos monitorados</Subtitle>
      <TouchableOpacity onPress={loadAllDevices}>
        <MaterialCommunityIcons name="reload" size={24} color="#6b6b6b" />
      </TouchableOpacity>
      </SecondHeader>
      <DeviceContainer>
        <FlatList
          data={monitoredDevices}
          renderItem={({ item }) => {
            const fields = item.data.feeds
            const humidity = fields[fields.length - 1].field1
            const deviceId = item.data.channel.id
            const lastVer = lastVerify(fields[fields.length - 1].created_at)

            return (
            <TouchableOpacity onPress={() => handleDevicePage(deviceId)}>
              <Device key={deviceId}>
                <View>
                  <DeviceName>{item.name}</DeviceName>
                  <LastVerification>atualização em {lastVer}</LastVerification>
                </View>
                <HumPercent>{humidity}<Percent>%</Percent></HumPercent>
              </Device>
            </TouchableOpacity>
          )}}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <EmptyList>Adicione um dispositivo para monitorar.</EmptyList>
          )}
        />
      </DeviceContainer>
      
    </Container>
  )
}