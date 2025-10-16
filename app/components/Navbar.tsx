import SearchInput from './SearchInput';

const Navbar = () => {
	return (
		<div className='w-full flex flex-row justify-between items-center p-5'>
			<img src='/logo-live-ai.svg' className='w-20 h-10' alt='Logo' />
			<SearchInput />
		</div>
	);
};

export default Navbar;
