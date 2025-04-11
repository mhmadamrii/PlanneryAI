import { View, Text } from 'react-native';
import { format, eachDayOfInterval, startOfWeek, endOfWeek } from 'date-fns';

export default function CalendarScreen() {
  const today = new Date();
  const weekStart = startOfWeek(today);
  const weekEnd = endOfWeek(today);
  const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd });

  return (
    <View className="flex-1 justify-center items-center bg-blue-400">
      <Text>Calendar</Text>
    </View>
  );
}
