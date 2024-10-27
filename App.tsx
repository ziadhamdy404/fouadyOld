import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {
  AppStack,
  AuthStack,
  BottomTab,
  TopTabNavigator,
} from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './SplashScreen';
import {LogBox} from 'react-native';

// Disable all LogBox warnings

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [activeScreen, setActiveScreen] = useState('AuthMain'); // Default screen to display

  useEffect(() => {
    LogBox.ignoreAllLogs(true);
    // Simulate a delay for the splash screen
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 2000); // Set the splash screen duration to 3 seconds (3000 ms)

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

  return (
    <>
      {isSplashVisible ? (
        <SplashScreen navigation={undefined} /> // Show SplashScreen if isSplashVisible is true
      ) : (
        //   <NavigationContainer>
        //   <View style={styles.container}>
        //     {/* Top Tab Navigator */}
        //     <TopTabNavigator setActiveScreen={setActiveScreen} />

        //     {/* Main Content Area - Displays only one screen at a time */}
        //     <View style={styles.content}>{getScreenContent()}</View>

        //     {/* Bottom Tab Navigator */}
        //     <BottomTab setActiveScreen ={setActiveScreen} />
        //     {setActiveScreen}
        //   </View>
        // </NavigationContainer>
        <NavigationContainer>
          {/* <AppStack /> */}
          <AuthStack></AuthStack>
          {/* <AppStack></AppStack> */}
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
