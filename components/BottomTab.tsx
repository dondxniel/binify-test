import { HStack, Text, VStack } from '@gluestack-ui/react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Dimensions, Image, StyleSheet } from 'react-native';

export default function BottomTab(props: BottomTabBarProps) {
	const homeImg = require('../assets/binify/Home.png');
	const historyImg = require('../assets/binify/History.png');
	const tipsImg = require('../assets/binify/Tips.png');
	const NotifImg = require('../assets/binify/Notification.png');
	return (
		<HStack
			justifyContent='space-between'
			height={Dimensions.get('window').height / 11}
			backgroundColor='white'
			paddingHorizontal='$7'
			// paddingBottom={20}
			paddingTop='$2'
		>
			<VStack alignItems='center'>
				<Image source={homeImg} style={styles.img} />
				<Text>Home</Text>
			</VStack>
			<VStack alignItems='center'>
				<Image source={historyImg} style={styles.img} />
				<Text color='#d9d9d9'>History</Text>
			</VStack>
			<VStack alignItems='center'>
				<Image source={tipsImg} style={styles.img} />
				<Text color='#d9d9d9'>Tips</Text>
			</VStack>
			<VStack alignItems='center'>
				<Image source={NotifImg} style={styles.img} />
				<Text color='#d9d9d9'>Notifications</Text>
			</VStack>
		</HStack>
	);
}

const styles = StyleSheet.create({
	img: {
		height: 24,
		width: 24,
	},
});
