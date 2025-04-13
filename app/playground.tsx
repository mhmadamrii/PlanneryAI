import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { CircleCheck as CheckCircle2, Circle } from 'lucide-react-native';

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>
        <Text style={styles.subtitle}>Manage your daily tasks</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today</Text>
          <View style={styles.taskItem}>
            <TouchableOpacity>
              <Circle size={24} color="#007AFF" />
            </TouchableOpacity>
            <View style={styles.taskContent}>
              <Text style={styles.taskTitle}>Review project proposal</Text>
              <Text style={styles.taskTime}>Due 2:00 PM</Text>
            </View>
          </View>
          <View style={styles.taskItem}>
            <TouchableOpacity>
              <CheckCircle2 size={24} color="#34C759" />
            </TouchableOpacity>
            <View style={styles.taskContent}>
              <Text style={[styles.taskTitle, styles.completedTask]}>
                Morning workout
              </Text>
              <Text style={styles.taskTime}>Completed</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tomorrow</Text>
          <View style={styles.taskItem}>
            <TouchableOpacity>
              <Circle size={24} color="#007AFF" />
            </TouchableOpacity>
            <View style={styles.taskContent}>
              <Text style={styles.taskTitle}>Team meeting</Text>
              <Text style={styles.taskTime}>10:00 AM</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>New Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 28,
    color: '#000000',
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#666666',
    marginTop: 4,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#333333',
    marginBottom: 12,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  taskContent: {
    marginLeft: 12,
    flex: 1,
  },
  taskTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#000000',
    marginBottom: 4,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#8E8E93',
  },
  taskTime: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#666666',
  },
  addButton: {
    margin: 20,
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  addButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
