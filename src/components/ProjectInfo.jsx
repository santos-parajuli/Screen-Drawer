import { Card, CardContent } from '@/components/ui/card';

import { Input } from './ui/input';
import { Label } from './ui/label';
import { useAppContext } from './AppContext';

const ProjectInfo = () => {
	const { title, setTitle, drawer, department, setDepartment, screenSize, setScreenSize, date, setDate, setDrawer } = useAppContext();

	return (
		<Card className='w-full h-fit mt-2'>
			<CardContent>
				<h4 className='mt-3'>Project Info</h4>
				<div className='grid w-full max-w-sm items-center gap-1 my-2'>
					<Label htmlFor='title'>Title</Label>
					<Input type='text' id='title' placeholder='Tile ?' value={title} onChange={(e) => setTitle(e.target.value)} />
				</div>
				<div className='grid w-full max-w-sm items-center gap-1 mb-2'>
					<Label htmlFor='drawer'>Drawer</Label>
					<Input type='text' id='drawer' placeholder='Drawer Name ?' value={drawer} onChange={(e) => setDrawer(e.target.value)} />
				</div>
				<div className='grid w-full max-w-sm items-center gap-1 mb-2'>
					<Label htmlFor='department'>Department</Label>
					<Input type='text' id='department' placeholder='Department ?' value={department} onChange={(e) => setDepartment(e.target.value)} />
				</div>
				<div className='grid w-full max-w-sm items-center gap-1 mb-2'>
					<Label htmlFor='screenSize'>Screen Size</Label>
					<Input type='number' id='screenSize' placeholder='Screen Size ?' value={screenSize} onChange={(e) => setScreenSize(Number(e.target.value))} />
				</div>
				<div className='grid w-full max-w-sm items-center gap-1 mb-2'>
					<Label htmlFor='date'>Date</Label>
					<Input type='date' id='email' placeholder='Date' value={date} onChange={(e) => setDate(new Date(e.target.value).toISOString().split('T')[0])} />
				</div>
			</CardContent>
		</Card>
	);
};

export default ProjectInfo;
