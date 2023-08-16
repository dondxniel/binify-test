import { GluestackUIProvider } from '@gluestack-ui/react';
import config from './gluestack.config';
import useInitializers from './hooks/useInitializers';
import Navigation from './screens';

export default function App() {
	const { fontsLoaded } = useInitializers();

	if (!fontsLoaded) {
		return null;
	}

	return (
		<GluestackUIProvider config={config}>
			<Navigation />
		</GluestackUIProvider>
	);
}
