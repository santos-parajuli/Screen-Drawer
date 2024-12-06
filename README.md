# LED Screen Installation Tool - SignCast

LED Screen Installation Tool is a user-friendly, web-based application that generates installation diagrams for LED screens based on user selections. Designed with a focus on functionality, responsiveness, and accessibility, this tool ensures that installation teams can efficiently plan and execute LED screen installations.

🔗 **Live Demo:** <a href="https://signcast.siwani.com.np/" target="_blank" rel="noopener noreferrer">LED Screen Installation Tool - SignCast</a>


---

## ✨ Features

### Equipment Selection
- Dropdown menus to select:
  - LED Screen model
  - Mount type
  - Media Player (mini computer)
  - Receptacle box (power outlet box)

### Dynamic Drawing Display
- Displays a simple, interactive diagram of the LED screen.
- Automatically updates the drawing when selections change.
- Shows measurements and dimensions clearly.
- Includes:
  - A dashed box for the power outlet location.
  - Adjustable distance from the floor to the screen center.

### Configuration Options
- Toggle between **horizontal** and **vertical** screen orientations.
- Select installation type: **Niche** (recessed) or **Flat Wall**.
- Adjust the **niche depth** based on user inputs.
- Input field to specify the distance from floor to screen center.

### Project Information
- Manual input fields for:
  - Project title
  - Designer’s name
  - Department
  - Screen size
  - Date

### PDF Export
- Users can download the generated installation diagram as a PDF.
- Diagrams include all relevant measurements and configurations.

---

## 🛠️ Technical Details

- **Web Accessibility**: The application is fully compliant with accessibility standards, ensuring usability for all users.
- **Responsive Design**: Works seamlessly across devices, including desktops, tablets, and mobile phones.
- **Live Application**: Hosted and accessible at [https://signcast.siwani.com.np/](https://signcast.siwani.com.np/).

---

## 🚀 Technologies Used

- **Frontend**: React, TailwindCSS, Radix UI
- **Backend**: *(Optional, specify if you used any backend services)*
- **PDF Generation**: `jspdf` and `canvg`
- **Spreadsheet Parsing**: `xlsx` library for populating dropdowns with data from a CSV file.

---

## 📦 Installation Instructions

### Clone the Repository
```bash
git clone https://github.com/your-username/signcast.git
cd signcast
