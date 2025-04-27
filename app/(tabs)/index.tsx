import { View, Text, FlatList } from 'react-native';
import { Brain, Plus } from 'lucide-react-native';
import { format } from 'date-fns';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IData {
  id: string;
  title: string;
  description: string;
  time: string;
}

const DUMMY_DATAS = [
  {
    id: '1',
    title: 'Morning Meditation',
    description: '15 minutes of mindfulness to start the day',
    time: '7:00 AM',
  },
  {
    id: '2',
    title: 'Workout',
    description: '30 minutes of cardio and strength training',
    time: '8:00 AM',
  },
  {
    id: '3',
    title: 'Breakfast',
    description: 'Healthy meal to fuel up for the day',
    time: '9:00 AM',
  },
  {
    id: '4',
    title: 'Meeting with Client',
    description: 'Discuss project updates and requirements',
    time: '10:00 AM',
  },
  {
    id: '5',
    title: 'Lunch',
    description: 'Healthy meal to fuel up for the day',
    time: '12:00 PM',
  },
  {
    id: '6',
    title: 'Team Meeting',
    description: 'Discuss project updates and requirements',
    time: '2:00 PM',
  },
  {
    id: '7',
    title: 'Dinner',
    description: 'Healthy meal to fuel up for the day',
    time: '6:00 PM',
  },
] as const;

export default function HomeScreen() {
  const today = new Date();
  const router = useRouter();

  const _renderItem = ({ item }: { item: IData }) => (
    <View className="mb-[24px] p-[16px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] bg-[#FFFFFF]">
      <Text className="text-[14px] text-[#007AFF] mb-[4px]">{item.time}</Text>
      <Text className="text-[16px] text-[#000000] mb-[4px]">{item.title}</Text>
      <Text className="text-[14px] text-[#666666] mb-[4px]">
        {item.description}
      </Text>
    </View>
  );

  return (
    <SafeAreaView className="bg-[#F8F9FA] flex-1">
      <StatusBar style="dark" />
      <View className="p-[20px] bg-[#FFFFFF] flex-row justify-between items-center border-b border-[#F1F1F1]">
        <View>
          <Text>{format(today, 'EEEE, MMMM d')}</Text>
          <Text className="font-bold text-[28px] mt-[4px]">Today's Plan</Text>
        </View>
        <TouchableOpacity className="w-[44px] h-[44px] rounded-[22px] bg-[#F0F8FF] justify-center items-center">
          <Brain size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <View className="flex-1 mb-[20px] p-[20px]">
        <View>
          <Text className="font-semibold text-[18px] mb-[12px]">
            Morning Routine
          </Text>

          <FlatList
            data={DUMMY_DATAS}
            renderItem={_renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
