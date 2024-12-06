// I have used Signcast logo. No copyright infingement !! 
// There is a light and dark mode in the app.
import { ModeToggle } from './ui/mode-toggle';

function Navbar() {
	return (
		<div className='flex items-center justify-between px-10 py-3 bg-gray-800 dark:bg-black '>
			<img src='/logo.png' className='h-[50px]' />
			<ModeToggle />
		</div>
	);
}

export default Navbar;
