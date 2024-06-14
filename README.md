# Bristol Crime Heat Map

This is a React application that displays a heat map of crimes in Bristol using data from the UK Police API. The application allows users to filter crimes by category and view detailed information about individual crimes by zooming in on the map.

## Features

-   Displays a heat map of crimes in Bristol.
-   Allows filtering of crimes by category.
-   Switches to individual crime markers with popups at maximum zoom level.
-   Users can select a specific date to view crimes for that month.
-   "Select All" and "Deselect All" buttons for quick category selection.

## Technologies Used

-   React
-   react-leaflet
-   leaflet.heat
-   axios
-   Tailwind CSS
-   Firebase (for hosting)

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation and Usage

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/bristol-crime-heat-map.git
    cd bristol-crime-heat-map
    ```

2. Install the dependencies:

```bash
npm install
```

3. Running the App Locally
   To run the app locally in development mode, use:

```bash
npm start
```

This will start the development server and open the app in your default browser.

Usage
Open the application in your browser.
Use the date selector to choose a month and year.
Use the category filters to select which types of crimes to display.
Zoom in on the map to switch from a heat map to individual crime markers with detailed popups.

### Folder Structure

```java
my-app/
├── public/
├── src/
│   ├── api/
│   │   └── policeData.js
│   ├── components/
│   │   ├── CrimeFilter.js
│   │   ├── DateSelector.js
│   │   ├── HeatmapLayer.js
│   │   └── Map.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── .firebaserc
├── firebase.json
├── package.json
├── README.md
└── .gitignore
```

### Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
