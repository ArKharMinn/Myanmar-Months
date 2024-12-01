import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";

const Month = () => {
  const [month, setMonth] = useState<any>([]);
  const data = useSelector((state) => state.Tbl_Months);

  useEffect(() => {
    setMonth(data);
  }, []);
  return (
    <View>
      <View
        style={tw`flex-row flex-wrap gap-3 justify-center p-4 items-center`}
      >
        {month.map((item: any) => {
          return (
            <TouchableOpacity
              onPress={() => router.push(`/detail/${item.Id}`)}
              key={item.Id}
            >
              <ImageBackground source={item.image} style={tw`w-43 h-30`}>
                <Text
                  style={tw`bg-black bg-opacity-50 bottom-0 w-full absolute text-white py-2 text-center`}
                >
                  {item.MonthMm}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Month;
