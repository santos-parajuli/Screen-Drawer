import { Card } from '@/components/ui/card';
import { useAppContext } from './AppContext';

function ProjectInfoBox() {
	const { title, drawer, department, screenSize, date } = useAppContext();

	return (
		<Card>
			<div className='sm:first:col-span-2 pl-3 p-2 rounded-lg max-w-lg'>
				<ul>
					<li className='pt-2 pb-4 mb-2 last:mb-0 border-b border-black border-solid'>
						<span>Title: {title}</span>
					</li>
					<li className='pt-2 pb-4 mb-2 last:mb-0 border-b border-black border-solid'>
						<span>Drawn By : {drawer}</span>
					</li>
					<li className='pt-2 pb-4 mb-2 last:mb-0 border-b border-black border-solid'>
						<span>Department: {department}</span>
					</li>
					<li className='pt-2 pb-4 mb-2 last:mb-0 border-b border-black border-solid'>
						<span>
							Screen Size :{screenSize}
							{screenSize ? '"' : ''}
						</span>
					</li>
					<li className='pt-2 pb-4 mb-2 last:mb-0 border-b border-black border-solid'>
						<span>Date: {date}</span>
					</li>
				</ul>
			</div>
		</Card>
	);
}

export default ProjectInfoBox;
