import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './src/pages/Welcome';
import News from './src/pages/News';
import Hizmetlerimiz from './src/pages/Hizmetlerimiz';
import Dilek from './src/pages/Dilek';
import Şikayet from './src/pages/Şikayet';
import Öneri from './src/pages/Öneri';
import Oylamalar from './src/pages/Oylamalar';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Hizmetlerimiz" component={Hizmetlerimiz} />
        <Stack.Screen name="Dilek" component={Dilek} />
        <Stack.Screen name="Şikayet" component={Şikayet} />
        <Stack.Screen name="Öneri" component={Öneri} />
        <Stack.Screen name="Devam eden oylamalar" component={Oylamalar} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
