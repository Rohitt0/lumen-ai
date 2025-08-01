# LumenAI 💡

LumenAI is a cutting-edge React application designed to interact with the Gemini AI model. It provides a user-friendly interface for submitting prompts, uploading files, and receiving AI-generated responses. The application features a clean and intuitive design, making it easy for users to leverage the power of AI for various tasks such as brainstorming, coding assistance, summarization, and more.

## 🚀 Key Features

- **Interactive Prompt Input:** A user-friendly input box with support for text prompts and file uploads.
- **AI-Powered Responses:** Seamlessly integrates with the Gemini API to generate intelligent and relevant responses.
- **Suggestion Buttons:** Pre-defined prompts for quick and easy interaction with the AI.
- **File Upload Support:** Ability to upload files to provide context for the AI.
- **Animated UI:** Utilizes `framer-motion` for smooth and engaging animations.
- **About and Features Pages:** Dedicated pages to learn more about the application and its capabilities.
- **Tooltips and Dialogs:** Enhanced user experience with informative tooltips and interactive dialogs.

## 🛠️ Tech Stack

- **Frontend:**
    - React
    - JavaScript (ES Modules)
    - JSX
    - HTML
    - CSS
    - Tailwind CSS
    - `framer-motion` (for animations)
    - `@radix-ui/react-tooltip` (for tooltips)
    - `@radix-ui/react-dialog` (for dialogs)
    - `lucide-react` (for icons)
    - `class-variance-authority`
    - `clsx`
    - `tailwind-merge`
    - `tailwindcss-animate`
- **Backend / AI Interaction:**
    - Gemini API
    - `src/api/gemini.js` (custom API interaction logic)
    - Environment variables for API key
- **Build Tool:**
    - Vite
    - `@vitejs/plugin-react`
    - PostCSS
    - Autoprefixer
- **Other:**
    - ESLint (for linting)
    - TypeScript (for type checking)
    - Node.js
    - npm

## 📦 Getting Started

### Prerequisites

- Node.js (version >= 18)
- npm or yarn package manager
- A Gemini API key (obtainable from Google AI Studio)

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd lumenai
    ```

2.  Install dependencies:

    ```bash
    npm install # or yarn install
    ```

3.  Set up environment variables:

    - Create a `.env` file in the root directory.
    - Add your Gemini API key:

    ```
    VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
    ```

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev # or yarn dev
    ```

2.  Open your browser and navigate to the address provided by Vite (usually `http://localhost:5173`).

## 💻 Usage

1.  Once the application is running, you will be presented with the landing page.
2.  Enter your prompt in the input box.
3.  Optionally, upload files to provide additional context to the AI.
4.  Click the send button to submit your prompt to the Gemini API.
5.  The AI's response will be displayed below the input box.
6.  Use the suggestion buttons for inspiration or quick prompts.
7.  Navigate to the "About" and "Features" pages to learn more about the application.

## 📂 Project Structure

```
lumenai/
├── src/
│   ├── components/
│   │   ├── AboutPage.jsx
│   │   ├── FeaturesPage.jsx
│   │   ├── PromptInputBox.jsx
│   ├── api/
│   │   ├── gemini.js
│   ├── assets/
│   │   ├── brainstorm.png
│   │   ├── code.png
│   │   ├── summarize.png
│   │   ├── advice.png
│   ├── App.jsx
│   ├── main.jsx
│   ├── LandingPage.jsx
│   ├── index.css
├── vite.config.js
├── package.json
├── README.md
```

## 📸 Screenshots

<img width="1919" height="958" alt="image" src="https://github.com/user-attachments/assets/355d7c63-3028-44f3-a341-0236f87a0c10" />


## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## 📝 Live Demo

(https://lumen-ai-delta.vercel.app)

## 📬 Contact

If you have any questions or suggestions, feel free to contact me at [your-email@example.com](mailto:your-email@example.com).

## 💖 Thanks Message

Thank you for checking out LumenAI! We hope you find it useful and enjoyable. Your feedback is highly appreciated.
