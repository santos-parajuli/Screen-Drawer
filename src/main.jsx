import './index.css';

import App from './App.jsx';
import { AppContextProvider } from './components/AppContext';
import { StrictMode } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		{* ThemeProvider is used to manage the dark and light mode throughout the website *}
		<ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
			{* Since this is a mini app, i choose Context to store data through out the app so that data can be shared among the components *}
			<AppContextProvider>
				<App />
			</AppContextProvider>
		</ThemeProvider>
	</StrictMode>
);
