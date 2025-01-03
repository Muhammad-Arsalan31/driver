import React, { useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { icons } from "@/constants";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Map from "./Map";
import OpenStreetMapMap from "./OpenStreeMap";

const RideLayout = ({
  title,
  children,
  snapPoints,
}: {
  title: string;
  children: React.ReactNode;
  snapPoints: string[];
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleClose = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.close();
    }
  };
  return (
    <GestureHandlerRootView>
      <View className="flex-1 bg-white">
        <View className="flex flex-col h-screen bg-blue-500">
          <View className="flex flex-row absolute z-10 top-16 items-center justify-start px-5">
            <TouchableOpacity onPress={() => router.back()}>
              <View className="w-10 h-10 bg-white rounded-full items-center justify-center">
                <Image
                  source={icons.backArrow}
                  resizeMode="contain"
                  className="h-6 w-6"
                />
              </View>
            </TouchableOpacity>
            <Text className="text-xl font-JakartaSemiBold ml-5">
              {title || "Go Back"}
            </Text>
          </View>
          {/* <Map /> */}
          <OpenStreetMapMap />
          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints || ["40%", "85%"]}
            enablePanDownToClose={true}
            index={0}
          >
            <BottomSheetView style={{ flex: 1, padding: 20 }}>
              {children}
            </BottomSheetView>
          </BottomSheet>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default RideLayout;
