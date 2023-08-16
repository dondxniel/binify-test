import { useFonts } from 'expo-font';

export default function useInitializers() {
	// Initialize fonts
	const [fontsLoaded] = useFonts({
		regular: require('../assets/fonts/Manrope/static/Manrope-Regular.ttf'),
		bold: require('../assets/fonts/Manrope/static/Manrope-Bold.ttf'),
		black: require('../assets/fonts/Manrope/static/Manrope-ExtraBold.ttf'),
	});

	return { fontsLoaded };
}
