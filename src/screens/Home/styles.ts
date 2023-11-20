import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View`
  background-color: ${() => theme.COLORS.GRAY_700};
  flex: 1;
  padding: 32px;
`

export const Title = styled.Text`
  color: ${() => theme.COLORS.GREEN_700};
  margin-top: 16px;
  font-size: ${() => theme.FONT_SIZE.XXL};
  font-weight: bold;
`

export const Subtitle = styled.Text`
  color: ${() => theme.COLORS.GRAY_500};
  margin-top: 32px;
  font-size: ${() => theme.FONT_SIZE.LG};
`
export const SecondHeader = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`


export const DeviceContainer = styled.View`
  margin-top: 16px;
  margin-bottom: 32px;
  flex: 1;
`

export const Device = styled.View`
  background-color: ${() => theme.COLORS.GRAY_600};
  margin-bottom: 16px;
  border-radius: 16px;
  padding: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const DeviceName = styled.Text`
  color: ${() => theme.COLORS.WHITE};
  font-size: ${() => theme.FONT_SIZE.LG};
`

export const LastVerification = styled.Text`
  color: ${() => theme.COLORS.GRAY_500};
  font-size: ${() => theme.FONT_SIZE.SM};
`

export const HumPercent = styled.Text`
  color: ${() => theme.COLORS.GREEN_700};
  font-size: 32px;
`

export const Percent = styled.Text`
  font-size: 18px;
`

export const EmptyList = styled.Text`
  color: ${() => theme.COLORS.GRAY_500};
  font-size: ${() => theme.FONT_SIZE.LG};
  text-align: center;
  margin-top: 200px;
  padding: 32px;
`

export const AddDevice = styled.Text`
  font-size: ${() => theme.FONT_SIZE.MD};
  text-align: center;
  color: ${() => theme.COLORS.GREEN_700};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`