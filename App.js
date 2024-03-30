import{ createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RegisterUi } from './Signup';
import { LoginUi } from './Login';
import { HomeUi } from './Home';
import { NoteViewUi } from './NoteView';

const Stack = createNativeStackNavigator();

function App() {
  const ui = (
    <NavigationContainer>
      <Stack.Navigator>
      
        
        <Stack.Screen name='Login' component={LoginUi}/>
        <Stack.Screen name='Signup' component={RegisterUi}/>
        <Stack.Screen name='Home' component={HomeUi} />  
        <Stack.Screen name='NoteView' component={NoteViewUi}/>   
        
      </Stack.Navigator>
    </NavigationContainer>
  );
  return ui;
}

export default App;