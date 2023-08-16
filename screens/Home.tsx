import {
	Avatar,
	HStack,
	Input,
	InputIcon,
	InputInput,
	Text,
	VStack,
} from '@gluestack-ui/react';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InstantPickupIcon from '../assets/binify/InstantpickupIcon.svg';
import SchedulePickupIcon from '../assets/binify/SchedulePickupIcon.svg';
import Location from '../assets/binify/location.svg';
import Sunrise from '../assets/binify/sunrise.svg';
import QuickActionCard from '../components/QuickActionCard';
import TipsCard from '../components/TipsCard';

const menuImg = require('../assets/binify/Menu.png');

export default function Home() {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<SafeAreaView style={styles.sav} edges={['top', 'left', 'right']}>
				<VStack space='3xl'>
					<HStack justifyContent='space-between' alignItems='center'>
						<Avatar />
						<VStack alignItems='center' space={'sm'}>
							<View>
								<Sunrise />
							</View>
							<Text fontFamily='bold' size='lg'>
								Good morning, Sharon
							</Text>
						</VStack>
						<Image source={menuImg} style={styles.icon} />
					</HStack>
					<VStack
						p={10}
						borderWidth={1}
						borderColor='#d9d9d9'
						borderRadius={8}
						space={'sm'}
					>
						<Text color='#b7b4b4'>Your pickup address is</Text>
						<Input
							backgroundColor='#e9e9e9'
							borderColor='transparent'
							borderRadius={8}
							height={53}
						>
							<InputInput
								placeholder='No 1. Phase One Estaste Extention, Lokoja'
								placeholderTextColor={'#8a8a8a'}
							/>
							<InputIcon padding={13}>
								<Location />
							</InputIcon>
						</Input>
					</VStack>
					<VStack space={'lg'}>
						<Text size='lg'>What would you like to do?</Text>
						<QuickActionCard
							title={'Instant Waste Pickup'}
							details={'Request to pickup waste immediately'}
							Icon={InstantPickupIcon}
							bg={require('../assets/binify/InstantPickupBg.png')}
							img={require('../assets/binify/Instant-pickup-image.png')}
						/>
						<QuickActionCard
							title={'Scheduled Waste Pickup'}
							details={'Create a routine for waste pickup'}
							Icon={SchedulePickupIcon}
							bg={require('../assets/binify/SchedulePickupBg.png')}
							img={require('../assets/binify/SchedulePickupImage.png')}
						/>
					</VStack>
					<VStack space={'lg'}>
						<Text size='lg'>Tips</Text>
						<ScrollView
							horizontal
							showsHorizontalScrollIndicator={false}
						>
							<TipsCard
								img={require('../assets/binify/Tips1.png')}
							/>
							<TipsCard
								img={require('../assets/binify/Tips2.png')}
							/>
						</ScrollView>
					</VStack>
				</VStack>
			</SafeAreaView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	sav: { flex: 1, padding: 15 },
	icon: {
		height: 14,
		width: 23,
	},
});
