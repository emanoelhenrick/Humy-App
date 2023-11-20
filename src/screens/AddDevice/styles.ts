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
  margin-bottom: 16px;
`

export const CodeInput = styled.TextInput`
  background-color: ${() => theme.COLORS.GRAY_600};
  padding: 16px;
  border-radius: 8px;
  color: ${() => theme.COLORS.WHITE};
  font-size: ${() => theme.FONT_SIZE.LG};
  margin-bottom: 16px;
`

export const AddButton = styled.Text`
  background-color: ${() => theme.COLORS.GREEN_700};
  text-align: center;
  font-size: ${() => theme.FONT_SIZE.LG};
  padding: 16px;
  border-radius: 8px;
`

