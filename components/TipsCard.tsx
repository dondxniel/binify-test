import { HStack, Text, VStack } from '@gluestack-ui/react';
import React from 'react';
import { Dimensions, Image } from 'react-native';

export default function TipsCard({ img }: any) {
	const w = Dimensions.get('window').width / 1.5;
	return (
		<HStack
			elevation={'$0.5'}
			space='md'
			width={w}
			bg='white'
			p={20}
			borderRadius={8}
			mr={15}
		>
			<Image source={img} style={{ height: 69, width: 80 }} />
			<VStack flex={1}>
				<Text color='#8a8a8a'>
					How To dispose your waste for easy recycling
				</Text>
				<Text size='xs'>1 Min read</Text>
			</VStack>
		</HStack>
	);
}
