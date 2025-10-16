import { CiSearch } from 'react-icons/ci';

const Navbar = () => {
	return (
		<div className='w-full flex flex-row justify-between items-center p-5'>
			<img src='/logo-live-ai.svg' className='w-20 h-10' alt='Logo' />
			<CiSearch className='cursor-pointer' size={24} />
		</div>
	);
};

export default Navbar;
