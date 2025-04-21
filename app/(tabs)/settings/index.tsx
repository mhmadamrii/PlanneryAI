import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useState } from 'react';
import {
  Bell,
  Moon,
  User,
  Shield,
  HelpCircle,
  ChevronRight,
  LogOut,
  Globe,
  Mail,
} from 'lucide-react-native';

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(colorScheme === 'dark');

  const SettingItem = ({
    icon,
    title,
    subtitle,
    showChevron = true,
    onPress,
    rightElement,
  }: {
    icon: React.ReactNode;
    title: string;
    subtitle?: string;
    showChevron?: boolean;
    onPress?: () => void;
    rightElement?: React.ReactNode;
  }) => (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center p-[16px] bg-white rounded-[12px] mb-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
    >
      <View className="w-[32px]">{icon}</View>
      <View className="flex-1 ml-[12px]">
        <Text className="text-[16px] text-[#000000]">{title}</Text>
        {subtitle && (
          <Text className="text-[14px] text-[#666666] mt-[4px]">
            {subtitle}
          </Text>
        )}
      </View>
      {rightElement}
      {showChevron && <ChevronRight size={20} color="#666666" />}
    </TouchableOpacity>
  );

  const SectionTitle = ({ title }: { title: string }) => (
    <Text className="text-[14px] text-[#666666] mb-[8px] ml-[4px]">
      {title}
    </Text>
  );

  return (
    <View className="flex-1 bg-[#F8F9FA] pb-[130px]">
      <View className="p-[20px] pt-[60px] bg-[#FFFFFF] border-b border-[#F1F1F1]">
        <Text className="text-[28px] text-[#000000]">Settings</Text>
      </View>

      <ScrollView className="flex-1 p-[20px]">
        {/* Account Section */}
        <SectionTitle title="Account" />
        <SettingItem
          icon={<User size={20} color="#007AFF" />}
          title="John Doe"
          subtitle="john.doe@example.com"
          onPress={() => {}}
        />

        {/* Preferences Section */}
        <SectionTitle title="Preferences" />
        <SettingItem
          icon={<Bell size={20} color="#007AFF" />}
          title="Notifications"
          rightElement={
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#D1D1D6', true: '#34C759' }}
              className="mr-[8px]"
            />
          }
          showChevron={false}
        />
        <SettingItem
          icon={<Moon size={20} color="#007AFF" />}
          title="Dark Mode"
          rightElement={
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#D1D1D6', true: '#34C759' }}
              className="mr-[8px]"
            />
          }
          showChevron={false}
        />
        <SettingItem
          icon={<Globe size={20} color="#007AFF" />}
          title="Language"
          subtitle="English"
          onPress={() => {}}
        />

        {/* Support Section */}
        <SectionTitle title="Support" />
        <SettingItem
          icon={<HelpCircle size={20} color="#007AFF" />}
          title="Help & Support"
          onPress={() => {}}
        />
        <SettingItem
          icon={<Mail size={20} color="#007AFF" />}
          title="Contact Us"
          onPress={() => {}}
        />
        <SettingItem
          icon={<Shield size={20} color="#007AFF" />}
          title="Privacy Policy"
          onPress={() => {}}
        />

        {/* Sign Out */}
        <View className="mt-[24px]">
          <SettingItem
            icon={<LogOut size={20} color="#FF3B30" />}
            title="Sign Out"
            onPress={() => {}}
            showChevron={false}
          />
        </View>

        {/* App Version */}
        <View className="mt-[24px] items-center">
          <Text className="text-[14px] text-[#666666]">Version 1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
}
