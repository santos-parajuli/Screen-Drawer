import Configuration from './components/Configuration';
import Diagram from './components/Diagram';
import DownloadButton from './components/DownloadButton';
import Navbar from './components/Navbar';
import { NicheDimenInfo } from './components/NicheDimenInfo';
import ProjectInfo from './components/ProjectInfo';
import ReceptacleBoxInfo from './components/ReceptacleBoxInfo';
import { ScreenDimenInfo } from './components/ScreenDimenInfo';
import { useAppContext } from './components/AppContext';

const App = () => {
	const { selectedScreen, niche } = useAppContext();

	return (
		<>
			<Navbar />
			<div className='grid lg:grid-cols-10 md:grid-cols-5 grid-cols-1 gap-3 p-2'>
				<div className='col-span-1 md:col-span-5 lg:col-span-5 p-2'>
					<Diagram /> {/* Reusable Diagram component */}
				</div>
				{selectedScreen && (
					<div className='flex flex-col col-span-1 md:col-span-3 lg:col-span-3 gap-2'>
						<div className=' gap-1 flex justify-evenly'>
							{niche && <NicheDimenInfo />}
							<ScreenDimenInfo />
						</div>
						<ReceptacleBoxInfo />
						<DownloadButton />
					</div>
				)}
				<div className='col-span-1 md:col-span-2 lg:col-span-2'>
					<Configuration />
					<ProjectInfo />
				</div>
			</div>
		</>
	);
};

export default App;
