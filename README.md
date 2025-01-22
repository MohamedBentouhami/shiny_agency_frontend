# Shiny Agency Frontend Application

This is the frontend application for the Shiny Agency project, built using React.

## Getting Started

To run the project locally, follow these steps:

### Prerequisites
- Node.js and npm installed on your system.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/MohamedBentouhami/shiny_agency_frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd shiny-agency
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

In the project directory, you can run:

#### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Key Components
- **Home**: Highlights the agency's mission, offers a survey to help users identify their needs, and provides a call-to-action to begin the test.
- **Header**: A responsive navigation bar with links to the home page, freelancers' profiles, and the survey.
- **Freelances**: Displays a list of service providers with dynamic data fetching from the backend API.
- **Survey**: A multi-step form that uses React Router for navigation between questions and Context API to store users' responses.
- **Results**: Processes survey responses and fetches personalized recommendations from the backend API.


## Note
This project only includes the frontend application. Ensure the backend API is running at `http://localhost:8000` for full functionality.
