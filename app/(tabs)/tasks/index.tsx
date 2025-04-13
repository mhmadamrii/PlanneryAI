import { CircleCheck as CheckCircle2, Circle } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function TasksScreen() {
  return (
    <View className="flex-1 bg-[#F8F9FA]">
      <View className="p-[20px] pt-[60px] bg-[#FFFFFF] border-b border-[#F1F1F1] flex-col justify-between items-center]">
        <Text className="text-[28px] text-[#000000]">Tasks</Text>
        <Text className="text-[16px] text-[#666666]">
          Manage your daily tasks
        </Text>
      </View>
      <ScrollView className="flex-1 p-[20px]">
        <View className="mb-[24px]">
          <Text className="font-semibold text-[18px] mb-[12px]">Today</Text>
          <View className="mb-[24px] p-[16px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] bg-[#FFFFFF] flex-row items-center">
            <TouchableOpacity>
              <Circle size={24} color="#007AFF" />
            </TouchableOpacity>
            <View className="ml-[12px] flex-1">
              <Text className="text-[16px] text-[#000000] mb-[4px]">
                Review project proposal
              </Text>
              <Text className="text-[14px] text-[#666666]">Due 2:00 PM</Text>
            </View>
          </View>
        </View>
        <View className="mb-[24px]">
          <Text className="font-semibold text-[18px] mb-[12px]">Tomorrow</Text>
          <View className="mb-[24px] p-[16px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] bg-[#FFFFFF] flex-row items-center">
            <TouchableOpacity>
              <Circle size={24} color="#007AFF" />
            </TouchableOpacity>
            <View className="ml-[12px] flex-1">
              <Text className="text-[16px] text-[#000000] mb-[4px]">
                Team meeting
              </Text>
              <Text className="text-[14px] text-[#666666]">10:00 AM</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
