import { useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';

import { Input } from '@mantine/core';

import { sampleData, sampleData2 } from '~/constants';
import { useSidemenuContext } from '~/hooks';

const SearchInput = () => {
	const { search, setSearch, setFilterData, selectedCategory } =
		useSidemenuContext();

	useEffect(() => {
		const sourceData = selectedCategory === 'apps' ? sampleData : sampleData2;
		const trimmedSearch = search.trim();

		if (trimmedSearch === '') {
			setFilterData(sourceData);
		} else {
			const filtered = sourceData.filter((item) =>
				item.toLowerCase().includes(trimmedSearch.toLowerCase())
			);

			setFilterData(filtered);
		}
	}, [search, selectedCategory, setFilterData]);

	return (
		<Input
			value={search}
			onChange={(e) => setSearch(e.target.value)}
			size='md'
			radius='lg'
			placeholder={`Search ${selectedCategory}...`}
			leftSection={<CiSearch size={16} />}
		/>
	);
};

export default SearchInput;
