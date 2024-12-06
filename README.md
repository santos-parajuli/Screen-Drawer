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
- Adjust the **niche gap** based on user inputs.
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

- **Frontend**: React, TailwindCSS, Shadcn UI
- **PDF Generation**: `jspdf` and `canvg`
- **Spreadsheet Parsing**: `xlsx` library for populating dropdowns with data from a CSV file.

---

## 📦 Installation Instructions

### Clone the Repository
```bash
git clone https://github.com/your-username/signcast.git
cd signcast
```

### Install Dependencies
```bash
npm install
```

### Run the Development Server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

## 🧑‍💻 How It Works

- **Equipment Data**: Load options for dropdowns from a CSV file using the `xlsx` library.
- **Dynamic Diagrams**: Drawings dynamically adjust based on user input, reflecting accurate measurements and configurations.
- **PDF Export**: Use `jspdf` and `canvg` to convert SVG diagrams to downloadable PDF files.

---

## 📋 Success Criteria

- **Real-Time Updates**: Diagrams update dynamically as users make changes.
- **Accuracy**: All measurements are precise and configurable.
- **Usability**: Intuitive and easy-to-use interface.
- **Responsiveness**: Works flawlessly on all device types.
- **Accessibility**: Fully supports screen readers and keyboard navigation.

---

## 📧 Contact

For questions or suggestions, feel free to reach out to santosh.parajuli255@gmail.com.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

Enjoy using LED Screen Installation Tool and revolutionize your LED installation planning!

