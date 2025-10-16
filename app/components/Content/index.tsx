import { List } from '@mantine/core';
import SideMenu from './SideMenu';
import { highlightText } from '~/utils/utility';
import { useSidemenuContext } from '~/hooks';
import { useMediaQuery } from '@mantine/hooks';

const Content = () => {
	const { filterData, search } = useSidemenuContext();
	const isMobile = useMediaQuery('(max-width: 36em)');

	const sideMenuWidthClass = isMobile ? 'w-2/5' : 'w-1/5';

	const contentWidthClass = isMobile ? 'w-3/5' : 'w-4/5';

	return (
		<div className='w-full h-full flex flex-row'>
			<div className={`${sideMenuWidthClass} h-full`}>
				<SideMenu />
			</div>

			<div className={`${contentWidthClass} h-full p-5`}>
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
