import { createContext, useContext, useState, type ReactNode } from 'react';
import { sampleData } from '~/constants';

type SidemenuCategory = 'apps' | 'documents';

interface SidemenuContextType {
	selectedCategory: SidemenuCategory;
	setSelectedCategory: (category: SidemenuCategory) => void;
	filterData: string[];
	setFilterData: (data: string[]) => void;
}

const SidemenuContext = createContext<SidemenuContextType | undefined>(
	undefined
);

interface SidemenuProviderProps {
	children: ReactNode;
}

export const SidemenuProvider = ({ children }: SidemenuProviderProps) => {
	const [selectedCategory, setSelectedCategory] =
		useState<SidemenuCategory>('apps');
	const [filterData, setFilterData] = useState<string[]>(sampleData);

	const value = {
		selectedCategory,
		setSelectedCategory,
		filterData,
		setFilterData,
	};

	return (
		<SidemenuContext.Provider value={value}>
			{children}
		</SidemenuContext.Provider>
	);
};

export const useSidemenuContext = () => {
	const context = useContext(SidemenuContext);
	if (context === undefined) {
		throw new Error(
			'useSidemenuContext must be used within a SidemenuProvider'
		);
	}
	return context;
};
