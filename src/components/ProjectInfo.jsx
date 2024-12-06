import { Card, CardContent } from '@/components/ui/card';

import { Input } from './ui/input';
import { Label } from './ui/label';

// import { useAppContext } from './AppContext';

const ProjectInfo = () => {
	// const { nicheDepth } = useAppContext();

	return (
		<Card className='w-full h-fit mt-2'>
			<CardContent>
				<h4 className='mt-3'>Project Info</h4>
				<div className='grid w-full max-w-sm items-center gap-1 my-2'>
					<Label htmlFor='title'>Title</Label>
					<Input type='text' id='title' placeholder='Tile ?' />
				</div>
				<div className='grid w-full max-w-sm items-center gap-1 mb-2'>
					<Label htmlFor='drawer'>Drawer</Label>
					<Input type='text' id='drawer' placeholder='Drawer Name ?' />
				</div>
				<div className='grid w-full max-w-sm items-center gap-1 mb-2'>
					<Label htmlFor='department'>Department</Label>
					<Input type='text' id='department' placeholder='Department ?' />
				</div>
				<div className='grid w-full max-w-sm items-center gap-1 mb-2'>
					<Label htmlFor='screenSize'>Screen Size</Label>
					<Input type='number' id='screenSize' placeholder='Screen Size ?' />
				</div>
				<div className='grid w-full max-w-sm items-center gap-1 mb-2'>
					<Label htmlFor='date'>Date</Label>
					<Input type='date' id='email' placeholder='Date' />
				</div>
			</CardContent>
		</Card>
	);
};

export default ProjectInfo;
