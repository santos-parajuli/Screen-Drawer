import { Button } from './ui/button';
import { Canvg } from 'canvg';
import jsPDF from 'jspdf';
// DownloadButton.js
import { useAppContext } from './AppContext';

const DownloadButton = () => {
	const { svgRef, title, drawer, department, screenSize, date } = useAppContext();

	const downloadPDF = async () => {
		const svgElement = svgRef.current;
		if (!svgElement) {
			alert('SVG element not found.');
			return;
		}
		// Serialize the SVG to a string
		const serializer = new XMLSerializer();
		const svgString = serializer.serializeToString(svgElement);
		// Create a canvas and render the SVG onto it
		const canvas = document.createElement('canvas');
		canvas.width = 1000;
		canvas.height = 1000;
		const ctx = canvas.getContext('2d');

		// Use canvg to render the SVG on the canvas
		await (await Canvg.from(ctx, svgString)).start();

		// Convert the canvas to an image (PNG)
		const imgData = canvas.toDataURL('image/png');

		// Add the image to the PDF
		const pdf = new jsPDF();
		pdf.addImage(imgData, 'PNG', 10, 10, 150, 150); // Adjust dimensions as needed

		// Add AppContext data to the PDF
		const data = [`Title: ${title}`, `Drawn By: ${drawer}`, `Department: ${department}`, `Screen Size: ${screenSize}"`, `Date: ${date}`];

		pdf.setFontSize(12);
		data.forEach((line, i) => {
			pdf.text(line, 10, 170 + i * 10);
		});

		// Save the PDF
		pdf.save('diagram.pdf');
	};

	return (
		<Button className='w-full mt-3' onClick={downloadPDF}>
			Download PDF
		</Button>
	);
};

export default DownloadButton;
