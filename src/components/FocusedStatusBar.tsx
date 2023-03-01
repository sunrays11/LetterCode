import React from "react";
import { StatusBar, StatusBarStyle } from "react-native";
import { useIsFocused } from "@react-navigation/core";


export interface Props {
  backgroundColor: string;
  barStyle?: null | StatusBarStyle | undefined;
  translucent?: boolean;
}
const FocusedStatusBar = (props : Props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
