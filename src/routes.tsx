import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name="OrphanagesMap" component={OrphanagesMap} />
      <Screen name="OrphanageDetails" component={OrphanageDetails} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;