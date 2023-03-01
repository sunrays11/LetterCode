import React from "react";
import { View, Text, Image, TextInput } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

export interface Props {
  onSearch?: ((text: string) => void) | undefined;
}

const HomeHeader = (props: Props) => {


  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}

      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 60,
            height: 60,
            backgroundColor: COLORS.white,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center" }}
        />
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.avatar}
            resizeMode="contain"
            style={{ width: "100%", height: "100%", backgroundColor: COLORS.white,borderRadius: 30,
            alignItems: "center",
            justifyContent: "center" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello Kiddo 👋
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let’s begin our fun learning experience
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search alphabet"
            style={{ flex: 1 }}
            onChangeText={props.onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
