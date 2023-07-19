import React, { useState } from "react";

import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (note.trim()) {
      // @ts-ignore
      setNotes([...notes, note]);
      setNote("");
    }
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    // @ts-ignore
    setNotes(newNotes);
  };

  // @ts-ignore
  const renderItem = ({ item }) => (
    <View style={styles.noteView}>
      <View style={styles.noteItem}>
        <Text>{item}</Text>
      </View>

      <TouchableOpacity onPress={deleteNote}>
        <Text style={styles.addButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add note..."
          value={note}
          onChangeText={setNote}
        />
        <TouchableOpacity onPress={addNote}>
          <Text style={styles.addButton}>Add</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={notes}
          renderItem={renderItem}
          // @ts-ignore
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
  },
  addButton: {
    color: "blue",
    fontSize: 16,
  },
  noteItem: {
    padding: 10,

    marginBottom: 10,
    borderRadius: 5,
    paddingRight: 25,
  },
  noteView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
