import { List } from '@mantine/core';
import SideMenu from './SideMenu';
import { useSidemenuContext } from '../../hooks/useSidemenuContext';

const Content = () => {
	const { filterData } = useSidemenuContext();

	return (
		<div className='w-full h-full flex flex-row'>
			<div className='w-1/5 h-full'>
				<SideMenu />
			</div>
			<div className='w-4/5 h-full p-5'>
				<List>
					{filterData.map((item, index) => (
						<List.Item key={index}>{item}</List.Item>
					))}
				</List>
			</div>
		</div>
	);
};

export default Content;
