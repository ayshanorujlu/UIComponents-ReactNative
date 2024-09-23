import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  const handleSave = () => {
    console.log("Task Title:", taskTitle);
    console.log("Category:", category);
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Notes:", notes);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add New Task</Text>
      </View>
      <Text style={styles.label}>Task Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <Text style={styles.label}>Category</Text>
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <View style={styles.dateTimeContainer}>
        <View style={styles.dateTimeInput}>
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            placeholder="Date"
            value={date}
            onChangeText={setDate}
          />
        </View>
        <View style={styles.dateTimeInput}>
          <Text style={styles.label}>Time</Text>
          <TextInput
            style={styles.input}
            placeholder="Time"
            value={time}
            onChangeText={setTime}
          />
        </View>
      </View>
      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Notes"
        value={notes}
        onChangeText={setNotes}
        multiline={true}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTask;

