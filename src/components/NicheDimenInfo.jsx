import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Input } from './ui/input';
import { useAppContext } from './AppContext';

export function NicheDimenInfo() {
	const { selectedScreen, selectedMount, nicheGap, nicheDepth } = useAppContext();

	return (
		<Card className='min-h[250px] w-full'>
			<CardHeader>
				<CardTitle className='text-lg'>Niche Dimensions</CardTitle>
				<CardDescription>
					<span>
						Mount: {selectedMount['Brand']}[{selectedMount['MFG. PART']}]
					</span>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='flex items-center justify-between mb-3'>
					<label className='text-gray-600 text-xs '>Height</label>
					<Input disabled className='ml-3 w-[80px]' type='number' min='0' value={Number(selectedScreen['Height'] + nicheGap * 2).toFixed(1)} />
				</div>
				<div className='flex items-center justify-between mb-3'>
					<label className='text-gray-600 text-xs '>Width</label>
					<Input disabled className='ml-3 w-[80px]' type='number' step='0.5' min='0' value={Number(selectedScreen['Width'] + nicheGap * 2).toFixed(1)} />
				</div>
				<div className='flex items-center justify-between'>
					<label className='text-gray-600 text-xs '>Depth</label>
					<Input disabled className='ml-3 w-[80px]' type='number' step='0.5' min='0' value={nicheDepth} />
				</div>
			</CardContent>
		</Card>
	);
}
