import { List } from '@mantine/core';
import SideMenu from './SideMenu';
import { highlightText } from '~/utils/utility';
import { useSidemenuContext } from '~/hooks';

const Content = () => {
	const { filterData, search } = useSidemenuContext();

	return (
		<div className='w-full h-full flex flex-row'>
			<div className='w-1/5 h-full'>
				<SideMenu />
			</div>
			<div className='w-4/5 h-full p-5'>
				<List>
					{filterData.map((item, index) => (
						<List.Item key={index}>{highlightText(item, search)}</List.Item>
					))}
				</List>
			</div>
		</div>
	);
};

export default Content;
