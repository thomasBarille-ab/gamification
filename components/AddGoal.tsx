import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddGoal = ({ onAddGoal }: { onAddGoal: (goal: { name: string; xp: number }) => void }) => {
  const [goalName, setGoalName] = useState<string>('');
  const [difficulty, setDifficulty] = useState<string>('');

  const calculateXP = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'facile':
        return 50;
      case 'moyen':
        return 100;
      case 'difficile':
        return 150;
      default:
        return 0;
    }
  };

  const handleAddGoal = () => {
    const xp = calculateXP(difficulty);
    onAddGoal({ name: goalName, xp });
    setGoalName('');
    setDifficulty('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter un Objectif</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom de l'objectif"
        value={goalName}
        onChangeText={setGoalName}
      />
      <TextInput
        style={styles.input}
        placeholder="Difficulté (facile, moyen, difficile)"
        value={difficulty}
        onChangeText={setDifficulty}
      />
      <Button title="Ajouter" onPress={handleAddGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default AddGoal; 