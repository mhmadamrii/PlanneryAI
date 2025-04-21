import { View, Text } from 'react-native';
import { Brain, Plus } from 'lucide-react-native';
import { format } from 'date-fns';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen() {
  const today = new Date();
  const router = useRouter();

  return (
    <View className="bg-[#F8F9FA] flex-1">
      <StatusBar style="dark" />
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
        <View className="mb-[10px]">
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
          <View className="mb-[24px] p-[16px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] bg-[#FFFFFF]">
            <Text className="text-[14px] text-[#007AFF] mb-[4px]">7:00 AM</Text>
            <Text className="text-[16px] text-[#000000] mb-[4px]">
              Morning Meditation
            </Text>
            <Text className="text-[14px] text-[#666666] mb-[4px]">
              15 minutes of mindfulness to start the day
            </Text>
          </View>
          <View className="mb-[24px] p-[16px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] bg-[#FFFFFF]">
            <Text className="text-[14px] text-[#007AFF] mb-[4px]">7:00 AM</Text>
            <Text className="text-[16px] text-[#000000] mb-[4px]">
              Morning Meditation
            </Text>
            <Text className="text-[14px] text-[#666666] mb-[4px]">
              15 minutes of mindfulness to start the day
            </Text>
          </View>
          <View className="mb-[24px] p-[16px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] bg-[#FFFFFF]">
            <Text className="text-[14px] text-[#007AFF] mb-[4px]">7:00 AM</Text>
            <Text className="text-[16px] text-[#000000] mb-[4px]">
              Morning Meditation
            </Text>
            <Text className="text-[14px] text-[#666666] mb-[4px]">
              15 minutes of mindfulness to start the day
            </Text>
          </View>
          <View className="mb-[24px] p-[16px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] bg-[#FFFFFF]">
            <Text className="text-[14px] text-[#007AFF] mb-[4px]">7:00 AM</Text>
            <Text className="text-[16px] text-[#000000] mb-[4px]">
              Morning Meditation
            </Text>
            <Text className="text-[14px] text-[#666666] mb-[4px]">
              15 minutes of mindfulness to start the day
            </Text>
          </View>
          <View className="mb-[24px] p-[16px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] bg-[#FFFFFF]">
            <Text className="text-[14px] text-[#007AFF] mb-[4px]">7:00 AM</Text>
            <Text className="text-[16px] text-[#000000] mb-[4px]">
              Morning Meditation
            </Text>
            <Text className="text-[14px] text-[#666666] mb-[4px]">
              15 minutes of mindfulness to start the day
            </Text>
          </View>
          <View className="mb-[24px] p-[16px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] bg-[#FFFFFF]">
            <Text className="text-[14px] text-[#007AFF] mb-[4px]">7:00 AM</Text>
            <Text className="text-[16px] text-[#000000] mb-[4px]">
              Morning Meditation
            </Text>
            <Text className="text-[14px] text-[#666666] mb-[4px]">
              15 minutes of mindfulness to start the day
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
