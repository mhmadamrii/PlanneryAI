import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useState, useEffect } from 'react';
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

  // Sync dark mode state with system theme
  useEffect(() => {
    setDarkMode(colorScheme === 'dark');
  }, [colorScheme]);

  // Handle dark mode toggle
  const handleDarkModeToggle = (value: boolean) => {
    setDarkMode(value);
  };

  const SectionTitle = ({ title }: { title: string }) => (
    <Text className={`text-[14px] ${darkMode ? 'text-[#8E8E93]' : 'text-[#666666]'} mb-[8px] ml-[4px]`}>
      {title}
    </Text>
  );

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
    darkMode: boolean;
  }) => (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center p-[16px] ${
        darkMode ? 'bg-[#2C2C2E]' : 'bg-white'
      } rounded-[12px] mb-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.05)]`}
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
      {showChevron && <ChevronRight size={20} color={darkMode ? '#8E8E93' : '#666666'} />}
    </TouchableOpacity>
  );

  return (
    <View className={`flex-1 ${darkMode ? 'bg-[#1C1C1E]' : 'bg-[#F8F9FA]'} pb-[130px]`}>
      <View className={`p-[20px] pt-[60px] ${darkMode ? 'bg-[#2C2C2E]' : 'bg-[#FFFFFF]'} border-b ${darkMode ? 'border-[#38383A]' : 'border-[#F1F1F1]'}`}>
        <Text className={`text-[28px] ${darkMode ? 'text-white' : 'text-[#000000]'}`}>Settings</Text>
      </View>

      <ScrollView className="flex-1 p-[20px]">
        {/* Account Section */}
        <SectionTitle title="Account" />
        <SettingItem
          icon={<User size={20} color="#007AFF" />}
          title="John Doe"
          subtitle="john.doe@example.com"
          onPress={() => {}}
          darkMode={darkMode}
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
          darkMode={darkMode}
        />
        <SettingItem
          icon={<Moon size={20} color="#007AFF" />}
          title="Dark Mode"
          rightElement={
            <Switch
              value={darkMode}
              onValueChange={handleDarkModeToggle}
              trackColor={{ false: '#D1D1D6', true: '#34C759' }}
              className="mr-[8px]"
            />
          }
          showChevron={false}
          darkMode={darkMode}
        />
        <SettingItem
          icon={<Globe size={20} color="#007AFF" />}
          title="Language"
          subtitle="English"
          onPress={() => {}}
          darkMode={darkMode}
        />

        {/* Support Section */}
        <SectionTitle title="Support" />
        <SettingItem
          icon={<HelpCircle size={20} color="#007AFF" />}
          title="Help & Support"
          onPress={() => {}}
          darkMode={darkMode}
        />
        <SettingItem
          icon={<Mail size={20} color="#007AFF" />}
          title="Contact Us"
          onPress={() => {}}
          darkMode={darkMode}
        />
        <SettingItem
          icon={<Shield size={20} color="#007AFF" />}
          title="Privacy Policy"
          onPress={() => {}}
          darkMode={darkMode}
        />

        {/* Sign Out */}
        <View className="mt-[24px]">
          <SettingItem
            icon={<LogOut size={20} color="#FF3B30" />}
            title="Sign Out"
            onPress={() => {}}
            showChevron={false}
            darkMode={darkMode}
          />
        </View>

        {/* App Version */}
        <View className="mt-[24px] items-center">
          <Text className={`text-[14px] ${darkMode ? 'text-[#8E8E93]' : 'text-[#666666]'}`}>
            Version 1.0.0
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
