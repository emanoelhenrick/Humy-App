import { Alert, TouchableOpacity, View } from "react-native";
import { CardContainer, CardContainerSecond, CardContainerThird, Container,DeleteButton,GoBack,Header,HumHealthText,HumPercent,HumPercentSecond,Subtitle, Title, TitleCard} from "./styles";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { useCallback, useState } from "react";
import { storageGetDevice } from "../../storage/devices/storageGetDevice";
import { StorageData } from "../../storage/devices/storageGetAllDevices";
import { removeDevice } from "../../storage/devices/storageRemoveDevice";

type RouteParams = {
  deviceId: string
}

export function DevicePage() {
  const [deviceData, setDeviceData] = useState<StorageData>()
  const navigation = useNavigation()
  function handleGoBack() {
    navigation.goBack()
  }

  const route = useRoute()
  const { deviceId } = route.params as RouteParams

  async function loadDevice() {
    const device = await storageGetDevice(deviceId)
    if (device) return setDeviceData(device)
    return navigation.goBack()
  }

  useFocusEffect(useCallback(() => {
    loadDevice()
  }, []))

  async function handleRemoveDevice() {
    Alert.alert('Remover',`Tem certeza que deseja remover o dispositivo ${deviceData?.name}`,
      [
        {
          text: 'Sim',
          onPress: async () => { await removeDevice(deviceId); navigation.navigate('home') }
        },
        {
          text: 'Não',
        }
      ]
    )
    
  }

  if (!deviceData) return
  const fields = deviceData.data.feeds
  const humidity = fields[fields.length -1].field1
  const maxPercent = Math.max(...fields.map(field => field.field1)) 
  const minPercent = Math.min(...fields.map(field => field.field1))

  function idealLevel() {
    if (humidity < 20) {
      return {
        text: "Abaixo do ideal",
        color: "#F75A68"
      }
    }

    if (humidity > 60) {
      return {
        text: "Acima do ideal",
        color: "#F75A68"
      }
    }

    return {
      text: "Nível ideal",
      color: "#26d07c"
    }
  }
  
  return (
    <Container>
      <Header>
        <GoBack>
          <AntDesign
            name="left"
            size={24}
            color="#26d07c"
            onPress={handleGoBack}
          />
        </GoBack>
        <Title>humy</Title>
      </Header>
      
      <Subtitle>{deviceData.name}</Subtitle>
      
      <CardContainer>
        <View>
          <TitleCard>Humidade atual</TitleCard>
          <HumPercent color={idealLevel().color}>{humidity}%</HumPercent>
        </View>
        <View>
          <HumHealthText color={idealLevel().color}>{idealLevel().text}</HumHealthText>
        </View>
      </CardContainer>

      <CardContainerSecond>
        <CardContainerThird>
          <View>
            <TitleCard>Max. do dia</TitleCard>
            <HumPercentSecond>{maxPercent}%</HumPercentSecond>
          </View>
        </CardContainerThird>

        <CardContainerThird>
          <View>
            <TitleCard>Min. do dia</TitleCard>
            <HumPercentSecond>{minPercent}%</HumPercentSecond>
          </View>
        </CardContainerThird>
      </CardContainerSecond>
      <TouchableOpacity onPress={handleRemoveDevice}>
        <DeleteButton>Remover dispositivo</DeleteButton>
      </TouchableOpacity>
      
      
    </Container>
  )
}