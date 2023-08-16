import {
	BottomTabBarProps,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import BottomTab from '../components/BottomTab';
import Home from './Home';

const Tab = createBottomTabNavigator();

export default function Navigation() {
	return (
		<NavigationContainer>
			<StatusBar
				// hidden={true}
				// barStyle={'dark-content'}
				translucent={false}
				style={'dark'}

				// backgroundColor={'white'}
			/>
			<Tab.Navigator
				screenOptions={{
					headerShown: false,
				}}
				tabBar={(props: BottomTabBarProps) => <BottomTab {...props} />}
			>
				<Tab.Screen name='Home' component={Home} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
