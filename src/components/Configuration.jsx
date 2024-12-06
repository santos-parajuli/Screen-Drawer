import * as XLSX from 'xlsx';

import { Card, CardContent } from '@/components/ui/card';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

import { Input } from './ui/input';
import SelectComponent from './SelectComponent';
import { Separator } from './ui/separator';
import { useAppContext } from './AppContext';
import { useEffect } from 'react';

const Configuration = () => {
	const { nicheDepth, setNicheDepth, setSelectedMount, setSelectedMediaPlayer, setSelectedReceptacleBox, setNiche, niche, setNicheGap, orientation, setOrientation, setSelectedScreen, setJsonData, jsonData, floorHeight, setFloorHeight, nicheGap } =
		useAppContext();

	useEffect(() => {
		const fetchXlsx = async () => {
			try {
				// Fetch the Excel file
				const response = await fetch('/data.xlsx');
				const arrayBuffer = await response.arrayBuffer();
				const workbook = XLSX.read(arrayBuffer, { type: 'array' });
				// Extract data from all worksheets
				const sheetData = {};
				workbook.SheetNames.forEach((sheetName) => {
					const worksheet = workbook.Sheets[sheetName];
					const json = XLSX.utils.sheet_to_json(worksheet);
					sheetData[sheetName] = json;
				});
				setJsonData(sheetData);
			} catch (error) {
				console.error('Error fetching or parsing XLSX file:', error);
			}
		};
		fetchXlsx();
	}, [setJsonData]);

	const handleSelectChangeForScreen = (value) => {
		// the first sheet is for Screen
		const firstSheet = Object.keys(jsonData)[0];
		const selectedScreen = jsonData[firstSheet]?.find((item) => item['Screen MFR'] === value);
		if (Number(selectedScreen['Screen Size']) >= 55) {
			setNicheGap(2);
		} else {
			setNicheGap(1.5);
		}
		setSelectedScreen(selectedScreen);
	};
	const handleSelectChangeForMediaPlayer = (value) => {
		// the second sheet is for Media Player
		const secondSheet = Object.keys(jsonData)[1];
		const selectedMediaPlayer = jsonData[secondSheet]?.find((item) => item['MFG. PART'] === value);
		setSelectedMediaPlayer(selectedMediaPlayer);
	};
	const handleSelectChangeForMount = (value) => {
		// the third sheet is for Mount
		const thirdSheet = Object.keys(jsonData)[2];
		const selectedMount = jsonData[thirdSheet]?.find((item) => item['MFG. PART'] === value);
		setSelectedMount(selectedMount);
	};

	const handleSelectChangeForReceptacleBox = (value) => {
		// the fourth sheet is for Receptacle Box
		const fourthSheet = Object.keys(jsonData)[3];
		const selectedReceptacleBox = jsonData[fourthSheet]?.find((item) => item['MFG. PART'] === value);
		setSelectedReceptacleBox(selectedReceptacleBox);
	};

	const handelOrientationChange = (value) => {
		console.log(value);
		if (value === '') {
			return;
		}
		setOrientation(value);
	};
	const handelNicheChange = (value) => {
		if (value === 'flatwall') {
			setNiche(false);
		} else {
			setNiche(true);
		}
	};

	return (
		<Card className='w-full h-fit'>
			<CardContent>
				<h4 className='mt-3'>Configuration</h4>
				{jsonData && (
					<>
						<SelectComponent label='Screen' placeholder='Select the Screen MFR' data={jsonData[Object.keys(jsonData)[0]]} valueField='Screen MFR' onChange={handleSelectChangeForScreen} />
						<SelectComponent label='Media Player' placeholder='Select Media Player' data={jsonData[Object.keys(jsonData)[1]]} valueField='MFG. PART' onChange={handleSelectChangeForMediaPlayer} />
						<SelectComponent label='Mount' placeholder='Select Mount' data={jsonData[Object.keys(jsonData)[2]]} valueField='MFG. PART' onChange={handleSelectChangeForMount} />
						<SelectComponent label='Receptacle Box' placeholder='Select Receptacle Box' data={jsonData[Object.keys(jsonData)[3]]} valueField='MFG. PART' onChange={handleSelectChangeForReceptacleBox} />
					</>
				)}
				<Separator className='my-2' />
				<ToggleGroup variant='outline' type='single' defaultValue={orientation} onValueChange={handelOrientationChange}>
					<ToggleGroupItem disabled={orientation === 'vertical'} value='vertical' className={`w-1/2 ${orientation === 'vertical' ? 'bg-slate-800 text-white' : ''}`}>
						Vertical
					</ToggleGroupItem>
					<ToggleGroupItem disabled={orientation === 'horizontal'} value='horizontal' className={`w-1/2 ${orientation === 'horizontal' ? 'bg-slate-800 text-white' : ''}`}>
						Horizontal
					</ToggleGroupItem>
				</ToggleGroup>

				<ToggleGroup className='mt-2' variant='outline' type='single' defaultValue='niche' onValueChange={handelNicheChange}>
					<ToggleGroupItem disabled={niche} value='niche' className='w-1/2'>
						Niche
					</ToggleGroupItem>
					<ToggleGroupItem disabled={!niche} value='flatwall' className='w-1/2'>
						Flat Wall
					</ToggleGroupItem>
				</ToggleGroup>
				<Separator className='my-2' />
				<div className='flex items-center justify-between mb-3'>
					<label className='text-gray-600 text-xs '>Floor Distance</label>
					<Input className='ml-3 w-[80px]' type='number' min='0' value={floorHeight} onChange={(e) => setFloorHeight(Number(e.target.value))} />
				</div>
				<div className='flex items-center justify-between mb-3'>
					<label className='text-gray-600 text-xs '>Niche Gap</label>
					<Input className='ml-3 w-[80px]' type='number' step='0.5' min='0' value={nicheGap} onChange={(e) => setNicheGap(Number(e.target.value))} />
				</div>
				<div className='flex items-center justify-between'>
					<label className='text-gray-600 text-xs '>Niche Depth</label>
					<Input className='ml-3 w-[80px]' type='number' step='0.5' min='0' value={nicheDepth} onChange={(e) => setNicheDepth(Number(e.target.value))} />
				</div>
			</CardContent>
		</Card>
	);
};

export default Configuration;
