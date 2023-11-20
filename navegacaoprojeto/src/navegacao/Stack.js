import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tela1 from '../views/Tela1';
import Tela2 from '../views/Tela2';
import Tela3 from '../views/Tela3';
import PassoStack from '../components/PassoStack';

const Stack = createStackNavigator()

export default props => (
  <Stack.Navigator intialRouteName="Tela1">
    <Stack.Screen name="Tela1" 
      options={{ title: 'Informações' }}>
        {props => (
          <PassoStack {...props} avancar="Tela2">
            <Tela1 />
          </PassoStack>
       )}
      </Stack.Screen>
      <Stack.Screen name="Tela2">
        {props => (
          <PassoStack {...props} avancar="Tela3" voltar>
            <Tela2 />
          </PassoStack>
        )}
      </Stack.Screen>
    <Stack.Screen name="Tela3" component={Tela3} />
  </Stack.Navigator> 
);