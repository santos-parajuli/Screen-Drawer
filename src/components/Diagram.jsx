import { useEffect, useRef, useState } from 'react';

import { useAppContext } from './AppContext';

const Diagram = () => {
	// Access data from context
	const { nicheDepth, setNicheDepth, selectedScreen, selectedReceptacleBox, floorHeight, orientation, niche, nicheGap, selectedMount, selectedMediaPlayer, setSvgRef } = useAppContext();
	const [tvWidth, setTvWidth] = useState(50);
	const [tvHeight, setTvHeight] = useState(40);
	const [receptacleBoxWidth, setReceptacleBoxWidth] = useState(5);
	const [receptacleBoxHeight, setReceptacleBoxHeight] = useState(4);

	const svgRef = useRef(null); // Reference to the SVG element

	useEffect(() => {
		if (selectedScreen) {
			const storedWidth = selectedScreen['Width'];
			const storedHeight = selectedScreen['Height'];
			if (orientation === 'horizontal') {
				setTvWidth(storedWidth ? Number(storedWidth) : 50);
				setTvHeight(storedHeight ? Number(storedHeight) : 40);
			} else {
				setTvHeight(storedWidth ? Number(storedWidth) : 50);
				setTvWidth(storedHeight ? Number(storedHeight) : 40);
			}
		}
		if (selectedReceptacleBox) {
			setReceptacleBoxHeight(Number(selectedReceptacleBox['Height (in)']));
			setReceptacleBoxWidth(Number(selectedReceptacleBox['Width (in)']));
		}
		if (selectedMediaPlayer && selectedMount && selectedScreen) {
			setNicheDepth(Number(selectedScreen['Depth']) + Math.max(Number(selectedMediaPlayer['Depth'], Number(selectedMount['Depth (in)']) + 1)));
		}
		setSvgRef(svgRef); // Set the SVG ref in AppContext
	}, [setSvgRef, selectedScreen, orientation, selectedReceptacleBox, selectedMediaPlayer, selectedMount, setNicheDepth]);

	const maxDimension = Math.max(tvWidth, tvHeight, floorHeight);
	const scaleFactor = 200 / maxDimension;
	const scaledTVWidth = tvWidth * scaleFactor;
	const scaledTVHeight = tvHeight * scaleFactor;
	const scaledFloorHeight = floorHeight * scaleFactor;

	const padding = 100;
	const viewBoxWidth = scaledTVWidth + padding * 2;
	const viewBoxHeight = scaledFloorHeight + scaledTVHeight + padding * 2;

	const centerX = viewBoxWidth / 2;
	const tvTopY = viewBoxHeight - scaledFloorHeight - scaledTVHeight / 2 - padding;

	const nichePadding = niche ? nicheGap * scaleFactor : 0;
	const outerBoxWidth = scaledTVWidth + nichePadding * 2;
	const outerBoxHeight = scaledTVHeight + nichePadding * 2;
	const receptacleBoxTopY = tvTopY + scaledTVHeight / 2 - receptacleBoxHeight * scaleFactor - 10;

	return (
		<div className='w-full overflow-auto dark:bg-[#a09d9d] border-2  rounded-3xl'>
			<svg className='' id='svg-diagram' viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight - padding + 20}`} width='100%' height='100%' ref={svgRef} preserveAspectRatio='xMidYMid meet'>
				{/* Floor Line */}
				<line x1='0' y1={viewBoxHeight - padding} x2={viewBoxWidth} y2={viewBoxHeight - padding} stroke='black' strokeWidth='2' />

				{/* Niche Box (conditional based on niche and screen size) */}
				{niche && <rect x={centerX - scaledTVWidth / 2 - nichePadding} y={tvTopY - scaledTVHeight / 2 - nichePadding} width={outerBoxWidth} height={outerBoxHeight} fill='none' stroke='black' strokeWidth='1' />}

				{/* TV Rectangle */}
				<rect x={centerX - scaledTVWidth / 2} y={tvTopY - scaledTVHeight / 2} width={scaledTVWidth} height={scaledTVHeight} fill='#6b6b6b ' stroke='black' strokeWidth='2' />

				{/* Dotted Center Lines */}
				<line x1='0' y1={tvTopY} x2={viewBoxWidth} y2={tvTopY} stroke='black' strokeDasharray='5,5' opacity='0.5' />
				<line x1={centerX} y1='0' x2={centerX} y2={viewBoxHeight - padding} stroke='black' strokeDasharray='5,5' opacity='0.5' />
				{/* Receptacle Box (conditional rendering) */}
				{selectedReceptacleBox && (
					<rect
						x={centerX - (receptacleBoxWidth * scaleFactor) / 2}
						y={receptacleBoxTopY}
						width={receptacleBoxWidth * scaleFactor}
						height={receptacleBoxHeight * scaleFactor}
						fill='none'
						stroke='black'
						strokeWidth='2'
						strokeDasharray='1,1'
						opacity={0.8}
					/>
				)}
				{/* Dotted Rectangle for Niche Depth (conditional rendering based on niche) */}
				{niche && nicheDepth > 0 && (
					<rect
						x={centerX - scaledTVWidth / 2 + nicheDepth * scaleFactor}
						y={tvTopY - scaledTVHeight / 2 + nicheDepth * scaleFactor}
						width={scaledTVWidth - nicheDepth * scaleFactor * 2}
						height={scaledTVHeight - nicheDepth * scaleFactor * 2}
						fill='none'
						stroke='black'
						strokeDasharray='5,5'
						strokeWidth='2'
					/>
				)}
				{/* Dimension Lines */}
				{/* Floor Height */}
				<line
					x1={centerX - scaledTVWidth / 2 - 60}
					y1={viewBoxHeight - padding - 2.5} // Adjusted
					x2={centerX - scaledTVWidth / 2 - 60}
					y2={tvTopY + 2.5} // Adjusted
					stroke='black'
					markerEnd='url(#arrow-end)'
					markerStart='url(#arrow-start)'
					opacity='0.7'
				/>
				<text x={centerX - scaledTVWidth / 2 - 50} y={(viewBoxHeight - padding + tvTopY + scaledTVHeight / 2) / 2} textAnchor='middle' writingMode='vertical-rl' style={{ fontSize: '12px' }}>
					{floorHeight} &#34;
				</text>
				{/* TV Width */}
				<line
					x1={centerX - scaledTVWidth / 2 + 2.5}
					y1={tvTopY - scaledTVHeight / 2 - 20}
					x2={centerX + scaledTVWidth / 2 - 2.5}
					y2={tvTopY - scaledTVHeight / 2 - 20}
					stroke='black'
					markerEnd='url(#arrow-end)'
					markerStart='url(#arrow-start)'
					opacity='0.7'
				/>
				<text x={centerX} y={tvTopY - scaledTVHeight / 2 - 30} textAnchor='middle' style={{ fontSize: '12px' }}>
					{tvWidth} &#34;
				</text>
				{/* TV Height */}
				<line
					x1={centerX + scaledTVWidth / 2 + 20}
					y1={tvTopY - scaledTVHeight / 2 + 2.5}
					x2={centerX + scaledTVWidth / 2 + 20}
					y2={tvTopY + scaledTVHeight / 2 - 2.5}
					stroke='black'
					markerEnd='url(#arrow-end)'
					markerStart='url(#arrow-start)'
					opacity='0.7'
				/>
				<text x={centerX + scaledTVWidth / 2 + 30} y={tvTopY} textAnchor='middle' writingMode='vertical-rl' style={{ fontSize: '12px' }}>
					{tvHeight} &#34;
				</text>

				{/* Outer Box Dimensions */}
				{/* Width of Outer Box */}
				{niche && (
					<>
						<line
							x1={centerX - outerBoxWidth / 2 + 2.5}
							y1={tvTopY + outerBoxHeight / 2 + 10} // Move the dimension line further down
							x2={centerX + outerBoxWidth / 2 - 2.5}
							y2={tvTopY + outerBoxHeight / 2 + 10} // Move the dimension line further down
							stroke='black'
							markerEnd='url(#arrow-end)'
							markerStart='url(#arrow-start)'
							opacity='0.7'
						/>
						<text
							x={centerX}
							y={tvTopY + outerBoxHeight / 2 + 30} // Move the label further down to avoid overlap
							textAnchor='middle'
							style={{ fontSize: '12px' }}>
							{(Math.round((outerBoxWidth / scaleFactor) * 10) / 10).toFixed(1)} &#34;
						</text>
					</>
				)}

				{/* Height of Outer Box */}
				{niche && (
					<>
						<line
							x1={centerX - outerBoxWidth / 2 - 20}
							y1={tvTopY - outerBoxHeight / 2 + 2.5} // Adjusted
							x2={centerX - outerBoxWidth / 2 - 20}
							y2={tvTopY + outerBoxHeight / 2 - 2.5} // Adjusted
							stroke='black'
							markerEnd='url(#arrow-end)'
							markerStart='url(#arrow-start)'
							opacity='0.7'
						/>
						<text
							x={centerX - outerBoxWidth / 2 - 30} // Move the label further left to avoid overlap
							y={tvTopY}
							textAnchor='middle'
							writingMode='vertical-rl'
							style={{ fontSize: '12px' }}>
							{(Math.round((outerBoxHeight / scaleFactor) * 10) / 10).toFixed(1)} &#34;
						</text>
					</>
				)}

				{/* Arrowhead Definitions */}
				<defs>
					<marker id='arrow-end' markerWidth='5' markerHeight='5' refX='0' refY='2.5' orient='auto' markerUnits='userSpaceOnUse'>
						<path d='M0,0 L5,2.5 L0,5 Z' fill='black' />
					</marker>
					<marker id='arrow-start' markerWidth='5' markerHeight='5' refX='0' refY='2.5' orient='auto' markerUnits='userSpaceOnUse'>
						<path d='M5,0 L0,2.5 L5,5 Z' fill='black' />
					</marker>
				</defs>
			</svg>
		</div>
	);
};

export default Diagram;
