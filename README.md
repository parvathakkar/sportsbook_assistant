# Sportsbook Assistant

> Your ultimate destination for sports betting insights and analysis

## Overview

Sportsbook Assistant is a modern web application that provides real-time sports betting insights and analysis for NBA, NHL, NFL, and MLB games. Built with React and Material-UI, this application offers a sleek, user-friendly interface for sports enthusiasts and bettors.

## Features

### Multi-Sport Coverage
- NBA (National Basketball Association)
- NHL (National Hockey League)
- NFL (National Football League)
- MLB (Major League Baseball)

## Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/sportsbook-assistant.git
   cd sportsbook-assistant
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```
   REACT_APP_API_KEY=your_api_key_here
   ```

4. **Start the Application**
   ```bash
   npm start
   ```
   Visit `http://localhost:3000` in your browser

## Project Structure

```
sportsbook-assistant/
├── public/              # Static files
│   ├── index.html
│   └── assets/
├── src/                 # Source code
│   ├── Components/      # React components
│   │   ├── navbar/     # Navigation components
│   │   ├── game/       # Game-related components
│   │   └── ...
│   ├── App.js          # Main application component
│   ├── App.css         # Global styles
│   └── index.js        # Application entry point
├── package.json         # Project dependencies
└── README.md           # Project documentation
```

## Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Modern web browser

### Available Scripts
- `npm start` - Runs the app in development mode