/* eslint-disable react-hooks/exhaustive-deps */
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { useEffect } from 'react';

const SelectComponent = ({ label, placeholder, data, valueField, onChange }) => {
	// Set default value as the first item's value in data
	const defaultValue = data?.[0]?.[valueField];
	useEffect(() => {
		// Trigger onChange for the default value when the component is mounted
		if (defaultValue) {
			onChange(defaultValue);
		}
	}, []);

	return (
		<div>
			<label className='text-gray-600 text-xs'>{label}</label>
			<Select className='mb-5' onValueChange={onChange} defaultValue={defaultValue}>
				<SelectTrigger className='w-[100%]'>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent>
					{data?.map((item) => (
						<SelectItem key={item[valueField]} value={item[valueField]}>
							{item[valueField]}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default SelectComponent;
