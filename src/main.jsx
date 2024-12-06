import './index.css';

import App from './App.jsx';
import { AppContextProvider } from './components/AppContext';
import { StrictMode } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
			<AppContextProvider>
				<App />
			</AppContextProvider>
		</ThemeProvider>
	</StrictMode>
);
