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
import Home from "./components/Home";
import Month from "./components/Month";

export default function Index() {
  const [page,setPage] = useState<string>('')

  const getPage = () => {
    switch (page) {
      case 'month':
        
        return <Month/>;
    
      default:
        return <Home/>;
    }
  }

  return (
    <View style={tw`bg-black h-full`}>
      <View style={tw`flex-row p-3 items-center`} >
        <TouchableOpacity style={tw`flex-1 justify-center items-center gap-2`} onPress={()=>setPage('')}>
          <Text style={tw`text-center text-white ${page == ''?"text-xl":""}`}>Home</Text>
          <View style={tw`${page == ""?"h-2 bg-blue-600 w-2 rounded-full":""}`}></View>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex-1 justify-center items-center gap-2`} onPress={()=>setPage('month')}>
          <Text style={tw`text-center text-white ${page == 'month'?"text-xl":""}`}>Months</Text>
          <View style={tw`${page == "month"?"h-2 bg-blue-600 w-2 rounded-full":""}`}></View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {getPage()}
      </ScrollView>
    </View>
  );
}
