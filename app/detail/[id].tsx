import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";

const detail = () => {
  const { id } = useLocalSearchParams();
  const [month, setMonth] = useState<any>("");
  const data = useSelector((state) => state.Tbl_Months);

  useEffect(() => {
    const mm = data.find((item: any) => item.Id == Number(id));
    setMonth(mm);
  }, [id]);

  return (
    <View style={tw`bg-black h-full p-2`}>
      <ScrollView contentContainerStyle={tw`gap-2`}>
        <View style={tw`flex-row justify-center items-center gap-2`}>
          <Text style={tw`text-white text-lg`}>{month.MonthMm}</Text>
          <Text style={tw`text-white`}>({month.MonthEn})</Text>
        </View>
        <View style={tw`flex-row justify-center gap-2`}>
          <Text style={tw`text-white text-[13px]`}>{month.FestivalMm}</Text>
          <Text style={tw`text-white text-[13px]`}>({month.FestivalEn})</Text>
        </View>
        <Image source={month.photo} style={tw`my-2`}/>
        <Text style={tw`text-gray-400`}>{month.Detail}</Text>
      </ScrollView>
    </View>
  );
};

export default detail;
