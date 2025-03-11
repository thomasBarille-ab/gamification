import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Goals from '../../components/Goals';
import AddGoal from '../../components/AddGoal';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Goals">
      <Stack.Screen name="Goals" component={Goals} options={{ title: 'Mes Objectifs' }} />
      <Stack.Screen name="AddGoal">
        {props => {
          const onAddGoal = props.route.params?.onAddGoal;
          if (!onAddGoal) return null;
          return <AddGoal {...props} onAddGoal={onAddGoal} />;
        }}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Navigation; 