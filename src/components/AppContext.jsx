import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [selectedScreen, setSelectedScreen] = useState(null);
	const [selectedReceptacleBox, setSelectedReceptacleBox] = useState(null);
	const [selectedMount, setSelectedMount] = useState(null);
	const [selectedMediaPlayer, setSelectedMediaPlayer] = useState(null);
	const [floorHeight, setFloorHeight] = useState(40);
	const [jsonData, setJsonData] = useState(null);
	const [orientation, setOrientation] = useState('horizontal');
	const [niche, setNiche] = useState(true);
	const [nicheGap, setNicheGap] = useState(2);
	const [nicheDepth, setNicheDepth] = useState(8);
	const [svgRef, setSvgRef] = useState(null);

	return (
		<AppContext.Provider
			value={{
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
export const useAppContext = () => {
	return useContext(AppContext);
};
