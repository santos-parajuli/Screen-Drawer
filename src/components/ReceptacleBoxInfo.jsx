import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Input } from './ui/input';
import { useAppContext } from './AppContext';

function ReceptacleBoxInfo() {
	const { selectedReceptacleBox } = useAppContext();

	return (
		<Card className='h-fit w-full'>
			<CardHeader>
				<CardTitle className='text-lg'>Receptacle Box Dimensions</CardTitle>
				<CardDescription>
					{selectedReceptacleBox['Brand']}: {selectedReceptacleBox['MFG. PART']}
				</CardDescription>
			</CardHeader>
			<CardContent className='flex justify-between px-6 '>
				<div className=''>
					<h2 className='text-xl'>Notes</h2>
					<h5 className='text-md'>Install recessed receptacel box with:</h5>
					<p className='text-sm text-gray-800 dark:text-gray-300'>2x Terminated Power Outlets</p>
					<p className='text-sm text-gray-800 dark:text-gray-300'>1x Terminated Data CAT5 Ethernet Outlet</p>
				</div>
				<div className='ml-5 p-3 rounded-lg border-2'>
					<div className='flex items-center justify-between mb-3'>
						<label className='text-gray-600 text-xs '>Height</label>
						<Input disabled className='ml-3 w-[80px]' type='number' min='0' value={selectedReceptacleBox['Height (in)']} />
					</div>
					<div className='flex items-center justify-between mb-3'>
						<label className='text-gray-600 text-xs '>Width</label>
						<Input disabled className='ml-3 w-[80px]' type='number' step='0.5' min='0' value={selectedReceptacleBox['Width (in)']} />
					</div>
					<div className='flex items-center justify-between'>
						<label className='text-gray-600 text-xs '>Depth</label>
						<Input disabled className='ml-3 w-[80px]' type='number' step='0.5' min='0' value={selectedReceptacleBox['Depth (in)']} />
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export default ReceptacleBoxInfo;
