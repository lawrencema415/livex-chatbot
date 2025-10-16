import SideMenu from './SideMenu';

const Content = () => {
	return (
		<div className='w-full h-full flex flex-row'>
			<div className='w-1/5 h-full'>
				<SideMenu />
			</div>
			<div className='w-4/5 h-full p-5'>Content</div>
		</div>
	);
};

export default Content;
