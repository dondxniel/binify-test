import { createConfig } from '@gluestack-style/react';
import { config } from '@gluestack-ui/react';

const customTheme = createConfig({
	...config.theme,
	aliases: config.theme.aliases,
	tokens: {
		...config.theme.tokens,
		fonts: {
			body: 'regular',
			heading: 'regular',
		},
	},
});

export default customTheme;
