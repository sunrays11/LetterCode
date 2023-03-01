import React, { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { LetterCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, LetterData } from "../constants";
import { Alphabets } from "../type";

const Home = () => {
  const [letter, setLetter] = useState<Alphabets[]>(LetterData);

  const handleSearch = (value: string) => {
    if (value.length === 0) {
      setLetter(LetterData);
    }

    const filteredData = LetterData.filter((item: Alphabets) =>
      item.letter.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setLetter(LetterData);
    } else {
      setLetter(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={letter}
            renderItem={({ item }) => <LetterCard data={item} />}
            keyExtractor={(item) => item.name}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
