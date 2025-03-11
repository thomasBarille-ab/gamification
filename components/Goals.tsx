import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Goals = () => {
  const navigation = useNavigation();
  const [goals, setGoals] = useState([
    { id: 1, name: 'Courir 5 km', completed: false },
    { id: 2, name: 'Faire 50 pompes', completed: false },
  ]);
  const [xp, setXp] = useState(0);

  const completeGoal = (id: number) => {
    setGoals(goals.map(goal =>
      goal.id === id ? { ...goal, completed: true } : goal
    ));
    setXp(xp + 100); // Ajoute 100 XP pour chaque objectif atteint
  };

  const onAddGoal = (newGoal: { name: string; xp: number }) => {
    setGoals([...goals, { id: goals.length + 1, name: newGoal.name, completed: false }]);
    setXp(xp + newGoal.xp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes Objectifs</Text>
      <Button title="Ajouter un Objectif" onPress={() => navigation.navigate('AddGoal', { onAddGoal })} />
      {goals.map(goal => (
        <View key={goal.id}>
          <Text>{goal.name} {goal.completed ? '✓' : ''}</Text>
          {!goal.completed && (
            <Button title="Compléter" onPress={() => completeGoal(goal.id)} />
          )}
        </View>
      ))}
      <Text style={styles.xp}>XP: {xp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  xp: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default Goals; 