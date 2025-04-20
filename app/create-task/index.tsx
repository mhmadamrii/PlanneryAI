import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, Calendar, Clock } from 'lucide-react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function CreateTaskScreen() {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleCreateTask = () => {
    // TODO: Implement task creation logic
    router.back();
  };

  return (
    <View className="flex-1 bg-[#F8F9FA]">
      <StatusBar style="dark" />
      <ScrollView className="flex-1 p-[20px]">
        <View className="mb-[24px]">
          <Text className="text-[16px] text-[#666666] mb-[8px]">
            Task Title
          </Text>
          <TextInput
            className="bg-[#FFFFFF] p-[16px] rounded-[12px] text-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
            placeholder="Enter task title"
            value={taskTitle}
            onChangeText={setTaskTitle}
          />
        </View>

        <View className="mb-[24px]">
          <Text className="text-[16px] text-[#666666] mb-[8px]">
            Description
          </Text>
          <TextInput
            className="bg-[#FFFFFF] p-[16px] rounded-[12px] text-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
            placeholder="Enter task description"
            value={taskDescription}
            onChangeText={setTaskDescription}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        <View className="mb-[24px]">
          <Text className="text-[16px] text-[#666666] mb-[8px]">Due Date</Text>
          <TouchableOpacity className="bg-[#FFFFFF] p-[16px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] flex-row items-center">
            <Calendar size={20} color="#007AFF" />
            <Text className="text-[16px] text-[#000000] ml-[12px]">
              Select date
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mb-[24px]">
          <Text className="text-[16px] text-[#666666] mb-[8px]">Due Time</Text>
          <TouchableOpacity className="bg-[#FFFFFF] p-[16px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] flex-row items-center">
            <Clock size={20} color="#007AFF" />
            <Text className="text-[16px] text-[#000000] ml-[12px]">
              Select time
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View className="p-[20px] bg-[#FFFFFF] border-t border-[#F1F1F1]">
        <TouchableOpacity
          onPress={handleCreateTask}
          className="w-full h-[56px] rounded-[12px] bg-[#007AFF] items-center justify-center"
        >
          <Text className="text-[16px] font-semibold text-[#FFFFFF]">
            Create Task
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
