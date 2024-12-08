import { createContext, useContext, useState } from 'react';
// Create a new context for the app's global state
const AppContext = createContext();

// Provider component to wrap around the parts of the app that need access to the context
export const AppContextProvider = ({ children }) => {
	// State variables for managing app data
	const [selectedScreen, setSelectedScreen] = useState(null); // Holds the selected LED screen
	const [selectedReceptacleBox, setSelectedReceptacleBox] = useState(null); // Holds the selected power outlet box
	const [selectedMount, setSelectedMount] = useState(null); // Holds the selected mount type
	const [selectedMediaPlayer, setSelectedMediaPlayer] = useState(null); // Holds the selected media player (mini-computer)
	const [floorHeight, setFloorHeight] = useState(40); // Holds the height of the floor from which the screen is mounted
	const [jsonData, setJsonData] = useState(null); // Holds the loaded JSON data (e.g., from CSV file)
	const [orientation, setOrientation] = useState('horizontal'); // Screen orientation (horizontal or vertical)
	const [niche, setNiche] = useState(true); // Whether the screen is installed in a niche or flat wall
	const [nicheGap, setNicheGap] = useState(2); // The gap between the screen and the niche
	const [nicheDepth, setNicheDepth] = useState(8); // The depth of the niche where the screen is installed
	const [svgRef, setSvgRef] = useState(null); // Reference to the SVG diagram for rendering
	const [title, setTitle] = useState(''); // Holds the Title
	const [drawer, setDrawer] = useState(''); // Holds the drawer name
	const [department, setDepartment] = useState(''); // Holds the department
	const [screenSize, setScreenSize] = useState(null); // Holds the screen size
	const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Holds the date

	return (
		<AppContext.Provider
			value={{
				// Expose the state values and their respective setter functions to the context
				title,
				setTitle,
				drawer,
				department,
				setDepartment,
				screenSize,
				setScreenSize,
				date,
				setDate,
				setDrawer,
				svgRef,
				setSvgRef,
				nicheDepth,
				setNicheDepth,
				selectedMount,
				selectedMediaPlayer,
				setSelectedMediaPlayer,
				setSelectedMount,
				selectedReceptacleBox,
				setSelectedReceptacleBox,
				nicheGap,
				setNicheGap,
				niche,
				setNiche,
				selectedScreen,
				setSelectedScreen,
				floorHeight,
				setFloorHeight,
				jsonData,
				setJsonData,
				orientation,
				setOrientation,
			}}>
			{children}
		</AppContext.Provider>
	);
};
// Custom hook to easily access the app's global state in any component

export const useAppContext = () => {
	return useContext(AppContext);
};
