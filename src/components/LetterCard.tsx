import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, TouchableHighlight } from "react-native";

import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
import { RectButton, CircleButton } from "./Button";
import { Alphabets } from "../type";
import { FontDisplay } from "expo-font";

export interface IProps {
  data: Alphabets;
}

const LetterCard = (props: IProps) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 400,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={props.data.image}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              borderTopLeftRadius: SIZES.font,
              borderTopRightRadius: SIZES.font,
            }}
          />
          <TouchableHighlight
            style={{
              position: "absolute",
              width: 250,
              height: 250,
              borderRadius: 250 / 2,
              backgroundColor: "white",
              borderColor: "gray",
              borderWidth: 10,
            }}
          >
            <Text
              style={{
                position: "absolute",
                fontSize:60,
                fontWeight: "bold",
                color: "black",
              top:"35%",
              left:"35%",
              }}
            >
              {props.data.uppercase} {props.data.lowercase}
            </Text>
          </TouchableHighlight>
          <CircleButton imgUrl={assets.heart} right={10} top={10} />
        </View>
      </View>

      <SubInfo />

      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={props.data.name}
          subTitle={props.data.name}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice ascii={props.data.ascii_code} />
        </View>
      </View>
    </View>
  );
};

export default LetterCard;
