import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { format } from 'date-fns';
import { Clock, MapPin } from 'lucide-react-native';

export default function CalendarScreen() {
  const [selected, setSelected] = useState(format(new Date(), 'yyyy-MM-dd'));

  const markedDates = {
    [selected]: {
      selected: true,
      selectedColor: '#007AFF',
    },
    '2024-01-15': { marked: true, dotColor: '#007AFF' },
    '2024-01-20': { marked: true, dotColor: '#007AFF' },
    '2024-01-25': { marked: true, dotColor: '#007AFF' },
  };

  const AgendaItem = ({
    time,
    title,
    location,
    duration,
    category,
  }: {
    time: string;
    title: string;
    location?: string;
    duration: string;
    category: string;
  }) => (
    <View className="mb-[16px] p-[16px] bg-white rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
      <View className="flex-row justify-between items-center mb-[8px]">
        <Text className="text-[14px] text-[#007AFF] font-medium">{time}</Text>
        <Text className="text-[12px] text-[#666666] px-[8px] py-[4px] bg-[#F8F9FA] rounded-[12px]">
          {duration}
        </Text>
      </View>

      <Text className="text-[16px] text-[#000000] font-semibold mb-[8px]">
        {title}
      </Text>

      {location && (
        <View className="flex-row items-center">
          <MapPin size={16} color="#666666" />
          <Text className="text-[14px] text-[#666666] ml-[4px]">
            {location}
          </Text>
        </View>
      )}

      <View className="mt-[12px] flex-row justify-between items-center">
        <View className="px-[12px] py-[4px] bg-[#F0F8FF] rounded-[12px]">
          <Text className="text-[12px] text-[#007AFF]">{category}</Text>
        </View>
        <Clock size={16} color="#666666" />
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-[#F8F9FA] pb-[120px]">
      <View className="p-[20px] pt-[60px] bg-[#FFFFFF] border-b border-[#F1F1F1]">
        <Text className="text-[28px] text-[#000000] font-bold">Calendar</Text>
      </View>

      <Calendar
        style={{
          backgroundColor: '#FFFFFF',
          borderBottomWidth: 1,
          borderBottomColor: '#F1F1F1',
        }}
        theme={{
          backgroundColor: '#FFFFFF',
          calendarBackground: '#FFFFFF',
          textSectionTitleColor: '#666666',
          selectedDayBackgroundColor: '#007AFF',
          selectedDayTextColor: '#FFFFFF',
          todayTextColor: '#007AFF',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#007AFF',
          selectedDotColor: '#FFFFFF',
          arrowColor: '#007AFF',
          monthTextColor: '#2d4150',
          indicatorColor: '#007AFF',
        }}
        onDayPress={(day: any) => {
          setSelected(day.dateString);
        }}
        markedDates={markedDates}
        enableSwipeMonths={true}
      />

      <ScrollView className="flex-1 p-[20px]">
        <View className="flex-row justify-between items-center mb-[16px]">
          <Text className="text-[18px] text-[#000000] font-semibold">
            {format(new Date(selected), 'MMMM d, yyyy')}
          </Text>
          <TouchableOpacity
            className="px-[12px] py-[6px] bg-[#007AFF] rounded-[12px]"
            onPress={() => {
              /* Navigate to create event */
            }}
          >
            <Text className="text-[14px] text-white font-medium">
              Add Event
            </Text>
          </TouchableOpacity>
        </View>

        <AgendaItem
          time="09:00 AM"
          title="Team Stand-up"
          location="Meeting Room 3"
          duration="30 min"
          category="Work"
        />

        <AgendaItem
          time="11:30 AM"
          title="Lunch with Sarah"
          location="Cafe Downtown"
          duration="1 hour"
          category="Personal"
        />

        <AgendaItem
          time="02:00 PM"
          title="Project Review"
          location="Conference Room"
          duration="2 hours"
          category="Work"
        />

        <AgendaItem
          time="05:00 PM"
          title="Gym Session"
          location="Fitness Center"
          duration="1 hour"
          category="Health"
        />
      </ScrollView>
    </View>
  );
}
