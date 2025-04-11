import { View, Text } from 'react-native';
import { Brain, Plus } from 'lucide-react-native';
import { format } from 'date-fns';

import {
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function HomeScreen() {
  const today = new Date();

  return (
    <View className="bg-[#F8F9FA] flex-1">
      <View className="p-[20px] pt-[60px] bg-[#FFFFFF] flex-row justify-between items-center border-b border-[#F1F1F1]">
        <View>
          <Text>{format(today, 'EEEE, MMMM d')}</Text>
          <Text className="font-bold text-[28px] mt-[4px]">Today's Plan</Text>
        </View>
        <TouchableOpacity className="w-[44px] h-[44px] rounded-[22px] bg-[#F0F8FF] justify-center items-center">
          <Brain size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 p-[20px]">
        <View className="mb-[24px]">
          <Text className="font-semibold text-[18px] mb-[12px]">
            Morning Routine
          </Text>
          <View className="mb-[24px] p-[16px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] bg-[#FFFFFF]">
            <Text className="text-[14px] text-[#007AFF] mb-[4px]">7:00 AM</Text>
            <Text className="text-[16px] text-[#000000] mb-[4px]">
              Morning Meditation
            </Text>
            <Text className="text-[14px] text-[#666666] mb-[4px]">
              15 minutes of mindfulness to start the day
            </Text>
          </View>

          <View className="mb-[24px]">
            <View className="flex-row items-center gap-[8px] mb-[8px]">
              <View className="w-[4px] h-[4px] rounded-full bg-[#007AFF]" />
              <Text className="font-medium text-[16px]">Workout Session</Text>
            </View>
            <Text className="text-[14px] text-[#666666]">
              30 minutes cardio + strength training
            </Text>
          </View>
        </View>

        <TouchableOpacity className="w-full h-[44px] rounded-[12px] bg-[#007AFF] flex-row items-center justify-center text-[#FFFFFF]">
          <Plus size={24} color="#FFFFFF" />
          <Text className="font-semibold text-[16px] text-[#FFFFFF] mt-[4px]">
            Add New Task
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
