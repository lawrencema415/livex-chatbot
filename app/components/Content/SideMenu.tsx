import { Button } from '@mantine/core';
import { sampleData, sampleData2 } from '~/constants';
import { useSidemenuContext } from '~/hooks';

const SideMenu = () => {
	const { selectedCategory, setSelectedCategory, setFilterData } =
		useSidemenuContext();

	const handleCategoryChange = (category: 'apps' | 'documents') => {
		setSelectedCategory(category);

		if (category === 'apps') {
			setFilterData(sampleData);
		} else {
			setFilterData(sampleData2);
		}
	};

	return (
		<div className='flex flex-col space-y-5 p-4'>
			<Button
				variant={selectedCategory === 'apps' ? 'filled' : 'outline'}
				onClick={() => handleCategoryChange('apps')}
				fullWidth
			>
				Apps
			</Button>
			<Button
				variant={selectedCategory === 'documents' ? 'filled' : 'outline'}
				onClick={() => handleCategoryChange('documents')}
				fullWidth
			>
				Documents
			</Button>
		</div>
	);
};

export default SideMenu;
