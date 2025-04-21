import React from 'react';

import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { PaperProvider } from 'react-native-paper';
import {
  Calendar,
  Chrome as Home,
  Settings,
  ListTodo,
} from 'lucide-react-native';

export default function TabLayout() {
  return (
    <PaperProvider>
      <StatusBar style="dark" />
      <FloatingActionButton />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Today',
            tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="tasks/index"
          options={{
            title: 'Tasks',
            tabBarIcon: ({ color, size }) => (
              <ListTodo size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="calendar/index"
          options={{
            title: 'Calendar',
            tabBarIcon: ({ color, size }) => (
              <Calendar size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings/index"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Settings size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </PaperProvider>
  );
}
