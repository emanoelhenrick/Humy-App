import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View`
  background-color: ${() => theme.COLORS.GRAY_700};
  flex: 1;
  padding: 32px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 32px;
`

export const Title = styled.Text`
  color: ${() => theme.COLORS.GREEN_700};
  margin-top: 16px;
  font-size: ${() => theme.FONT_SIZE.XXL};
  font-weight: bold;
  /* margin-bottom: 32px; */
`

export const Subtitle = styled.Text`
  color: ${() => theme.COLORS.WHITE};
  font-size: ${() => theme.FONT_SIZE.LG};
  text-align: center;
`

export const GoBack = styled.View`
  color: ${() => theme.COLORS.WHITE};
  font-size: ${() => theme.FONT_SIZE.LG};
  padding: 8px 8px 8px 0;
`

export const CardContainer = styled.View`
  background-color: ${() => theme.COLORS.GRAY_600};
  margin-top: 16px;
  border-radius: 16px;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`

export const CardContainerSecond = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  
`

export const CardContainerThird = styled.View`
  background-color: ${() => theme.COLORS.GRAY_600};
  margin-top: 16px;
  border-radius: 16px;
  padding: 16px;
  flex: 1;
`

export const TitleCard = styled.Text`
  color: ${() => theme.COLORS.GRAY_500};
  font-size: ${() => theme.FONT_SIZE.MD};
`

export const HumPercent = styled.Text<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 64px;
`

export const HumPercentSecond = styled.Text`
  color: #b6e0c4;
  font-size: 32px;
`

export const HumHealthText = styled.Text<{ color: string }>`
  font-size: ${() => theme.FONT_SIZE.MD};
  color: ${(props) => props.color};
`

export const DeleteButton = styled.Text`
  padding: 16px 16px 16px 0;
  font-size: ${() => theme.FONT_SIZE.MD};
  color:  ${() => theme.COLORS.RED}
`

