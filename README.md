Cooking Planner

A simple and effective meal planning application built with Angular.

🚀 Features

📅 Weekly Meal Planner: Organize meals for each day of the week.

📋 Shopping List: Generate a shopping list based on planned recipes.

📂 Recipe Management: Add, edit, and delete recipes easily.

📌 Favorites & Categories: Save favorite recipes and organize them by category.

📤 Export Shopping List: Download the list as a PDF or copy it to the clipboard.

📖 Installation & Setup

1️⃣ Prerequisites

Make sure you have the following installed:

Node.js (LTS version recommended)

Angular CLI

2️⃣ Clone the Repository

git clone https://github.com/rociogarrido/cooking-planner.git
cd cooking-planner

3️⃣ Install Dependencies

npm install

4️⃣ Run the Application

ng serve

Visit http://localhost:4200/ in your browser.

🔧 Configuration

Environment Variables

Create a .env file or configure environment.ts with necessary API keys or settings if needed.

export const environment = {
  production: false,
  apiUrl: 'https://your-api-url.com',
};

🛠️ Tech Stack

Frontend: Angular, TypeScript, Angular Material

State Management: Services & RxJS

Styling: SCSS, Flexbox/Grid

Data Storage: Local Storage / Firebase (optional)

📌 Development Guidelines

Code Formatting

This project uses Prettier and ESLint for code formatting and linting. Run:

npm run format
npm run lint

Testing

To run unit tests:

ng test

To run end-to-end tests:

ng e2e

📤 Deployment

For production builds, run:

ng build --prod

Then deploy the dist/ folder to your preferred hosting provider.


