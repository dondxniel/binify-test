import { HStack, Heading, Image, Text, VStack } from '@gluestack-ui/react';
import React from 'react';
import { Dimensions, ImageBackground, View } from 'react-native';
// import Icon from '../assets/binify/InstantpickupIcon.svg';

export default function QuickActionCard({
	bg,
	img,
	title,
	details,
	Icon,
}: any) {
	const calculatedHeight =
		(Dimensions.get('window').height / 5.7 < 140
			? 140
			: Dimensions.get('window').height / 5.7) + 10;

	return (
		<HStack borderRadius={8} overflow='hidden' height={calculatedHeight}>
			<ImageBackground source={bg} style={{ flex: 1 }}>
				<HStack flex={1} py={20} px={17} space='md'>
					<View style={{ marginTop: 22 }}>
						<Icon />
					</View>
					<VStack height='100%' space='xl' px={3} flex={1}>
						<Heading
							color='white'
							fontFamily='bold'
							size='xl'
							lineHeight={'$xl'}
						>
							{title}
						</Heading>
						<Text size='sm' color='white' lineBreakMode='tail'>
							{details}
						</Text>
					</VStack>
				</HStack>
			</ImageBackground>
			<Image source={img} style={{ height: '100%' }} />
		</HStack>
	);
}
