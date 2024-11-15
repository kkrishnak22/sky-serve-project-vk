🌍 Geo-Data Management and Visualization App

Overview
    This application provides a comprehensive platform for managing and visualizing geospatial data, allowing users to upload, interact with, and control layers of data. The app includes features for user management, data uploads, interactive mapping, and customizable dataset visibility, all managed with secure routes and efficient state handling.

✨ Features
🔒 User Management
    Google Sign-In: Register and log in using Google, with account and data management through Firebase.
    Protected Routes: Secure access based on user authentication status, ensuring only authorized users can view specific sections.
📂 Data Upload
        GeoJSON File Upload: Upload GeoJSON files and render them directly on a Mapbox map.
        Layer Control: Toggle datasets on and off to layer multiple datasets for enhanced visualization.
🧭 Area & Distance Calculations
        Draw & Edit Custom Shapes: Users can draw, edit, and save custom shapes for area calculation.
        Distance Measurement: Measure distances in kilometers and miles.
        Firebase Integration: Persistent data storage through Firebase, linking data to authenticated users.
📍 Point Marker Management
        Add, Delete, and Move Markers: Allows adding, removing, and moving markers with drag-and-drop functionality.
🖱️ Interactive Hover Card
        Hover Information: Displays a card with detailed information for each hovered shape or dataset layer.
🗂️ Dataset Control
        Show/Hide Layers: Users can show or hide datasets based on preferences, refining the map display.
📊 State Management
        Context API: State management is handled using React's Context API, ensuring consistent data flow and efficient updates across components.
🛠️ Tech Stack
        Backend: Firebase (for Authentication and Storage)
        Database: Firestore, for managing user-specific data and geospatial layers
        Frontend: React.js
        Development Tools: Vite, for fast builds and an optimized development environment
        Major Libraries
        Mapbox GL: For interactive mapping and geospatial data display
        @mapbox/mapbox-gl-draw: Enables drawing and editing shapes on maps
        @turf/turf: Provides geospatial analysis, including area and distance calculations
        React Toastify: Adds in-app notifications for enhanced user interaction