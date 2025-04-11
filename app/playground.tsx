import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';
import { Brain, Plus } from 'lucide-react-native';

export default function TodayScreen() {
  const today = new Date();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.date}>{format(today, 'EEEE, MMMM d')}</Text>
          <Text style={styles.title}>Today's Plan</Text>
        </View>
        <TouchableOpacity style={styles.aiButton}>
          <Brain size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Morning Routine</Text>
          <View style={styles.card}>
            <Text style={styles.taskTime}>7:00 AM</Text>
            <Text style={styles.taskTitle}>Morning Meditation</Text>
            <Text style={styles.taskDescription}>15 minutes of mindfulness to start the day</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.taskTime}>8:00 AM</Text>
            <Text style={styles.taskTitle}>Workout Session</Text>
            <Text style={styles.taskDescription}>30 minutes cardio + strength training</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Focus</Text>
          <View style={styles.card}>
            <Text style={styles.taskTime}>9:30 AM</Text>
            <Text style={styles.taskTitle}>Project Review</Text>
            <Text style={styles.taskDescription}>Weekly progress meeting with the team</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Plus size={24} color="#FFFFFF" />
          <Text style={styles.addButtonText}>Add New Task</Text>
        </TouchableOpacity>
      </ScrollView>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },
  date: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#666666',
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 28,
    color: '#000000',
    marginTop: 4,
  },
  aiButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    alignItems: 'center',
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
  card: {
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
  taskTime: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#007AFF',
    marginBottom: 4,
  },
  taskTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#000000',
    marginBottom: 4,
  },
  taskDescription: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#666666',
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  addButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 8,
  },
});
