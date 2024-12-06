import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Input } from './ui/input';
import { useAppContext } from './AppContext';

export function ScreenDimenInfo() {
	const { selectedScreen, floorHeight } = useAppContext();

	return (
		<Card className='min-h[300px] w-full'>
			<CardHeader>
				<CardTitle className='text-lg'>Screen Dimensions</CardTitle>
				<CardDescription>
					{selectedScreen['Make']} {selectedScreen['Screen Size']}&#34;: {selectedScreen['Screen MFR']}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='flex items-center justify-between mb-3'>
					<label className='text-gray-600 text-xs '>Height</label>
					<Input disabled className='ml-3 w-[80px]' type='number' min='0' value={selectedScreen['Height']} />
				</div>
				<div className='flex items-center justify-between mb-3'>
					<label className='text-gray-600 text-xs '>Width</label>
					<Input disabled className='ml-3 w-[80px]' type='number' step='0.5' min='0' value={selectedScreen['Width']} />
				</div>
				<div className='flex items-center justify-between'>
					<label className='text-gray-600 text-xs '>Floor Line</label>
					<Input disabled className='ml-3 w-[80px]' type='number' step='0.5' min='0' value={floorHeight} />
				</div>
			</CardContent>
		</Card>
	);
}
