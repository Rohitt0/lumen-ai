# Lumen AI ✨

Lumen AI is a simple and modern AI assistant built with **React** and **Vite**.

It allows you to ask questions, brainstorm ideas, write or understand code, summarize text, get advice, and send files/images along with your prompts. Lumen AI uses the **Google Gemini API** to generate responses.

<img width="1919" height="958" alt="image" src="https://github.com/user-attachments/assets/dd852ef8-e014-43dd-8728-910fa37d1450" />

Try here: https://lumen-ai-delta.vercel.app

##  Features

* 💬 Ask questions and chat with AI
* 🧠 Brainstorm ideas
* 💻 Get help with coding
* 📝 Summarize text
* 💡 Get advice
* 📎 Send files/images with your prompts
* 📖 Markdown-formatted AI responses
* 🎨 Clean and responsive user interface
* ✨ Smooth animations
* 📄 About and Features pages

## 🛠️ Tech Stack

Lumen AI is built using:

* **React** — User interface
* **Vite** — Development and build tool
* **Tailwind CSS** — Styling
* **Framer Motion** — Animations
* **React Markdown** — Displaying formatted AI responses
* **Lucide React** — Icons
* **Google Gemini API** — AI responses
* **JavaScript** — Application logic

## 🚀 Getting Started

Follow these steps to run Lumen AI on your computer.

### 1. Clone the repository

```bash
git clone https://github.com/Rohitt0/lumen-ai.git
```

Go into the project folder:

```bash
cd lumen-ai
```

### 2. Install dependencies

Make sure you have **Node.js** installed.

Then run:

```bash
npm install
```

### 3. Add your Gemini API key

Lumen AI uses the Google Gemini API to generate responses.

Create a `.env` file in the root of the project:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

Replace:

```text
your_gemini_api_key_here
```

with your actual Gemini API key.

> ⚠️ **Important:** Never upload your API key to GitHub or share it publicly.

### 4. Start the development server

Run:

```bash
npm run dev
```

Vite will provide a local URL in your terminal, usually something like:

```text
http://localhost:5173
```

Open it in your browser and start using Lumen AI.

## 🧠 How Lumen AI Works

The application follows a simple flow:

```text
User enters a prompt
        ↓
Lumen AI receives the prompt
        ↓
Prompt is sent to Google Gemini
        ↓
Gemini generates a response
        ↓
Response is returned to Lumen AI
        ↓
Response is displayed to the user
```

Users can also attach files/images. These files are converted into data that can be sent along with the prompt.

## 📁 Project Structure

```text
lumen-ai/
│
├── public/
│   └── # Public/static files
│
├── src/
│   │
│   ├── api/
│   │   └── gemini.js
│   │       # Gemini API integration
│   │
│   ├── assets/
│   │   └── # Images and other assets
│   │
│   ├── components/
│   │   └── # Reusable React components
│   │
│   ├── App.jsx
│   │   # Main application
│   │
│   ├── LandingPage.jsx
│   │   # Main Lumen AI interface
│   │
│   ├── App.css
│   │   # Application styles
│   │
│   ├── LandingPage.css
│   │   # Landing page styles
│   │
│   ├── index.css
│   │   # Global styles
│   │
│   └── main.jsx
│       # React entry point
│
├── .gitignore
├── package.json
├── package-lock.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 📦 Available Commands

### Start development server

```bash
npm run dev
```

Runs the application locally with Vite.

### Build for production

```bash
npm run build
```

Creates an optimized production build.

### Preview production build

```bash
npm run preview
```

Runs the production build locally so you can test it before deployment.

### Run ESLint

```bash
npm run lint
```

Checks the project for common JavaScript and React issues.

## 🎯 Quick Actions

Lumen AI provides some ready-to-use actions on the home page:

### 🧠 Brainstorm

Helps you generate ideas and explore different possibilities.

### 💻 Code

Provides a quick starting prompt for coding-related questions.

### 📝 Summarize Text

Helps summarize long pieces of text into shorter, easier-to-understand content.

### 💡 Get Advice

Provides a quick way to ask Lumen AI for suggestions or guidance.

## 🔐 Environment Variables

The project currently uses:

| Variable              | Description           |
| --------------------- | --------------------- |
| `VITE_GEMINI_API_KEY` | Google Gemini API key |

Example:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

Make sure `.env` is included in `.gitignore`.

## ⚠️ Security Note

The current Gemini API integration uses the API key from the frontend environment.

For a production application, consider moving the Gemini API request to a **backend/server-side API** so your API key is not exposed to users.

For example:

```text
Frontend
   ↓
Your Backend
   ↓
Gemini API
```

instead of:

```text
Frontend
   ↓
Gemini API
```

This provides better protection for your API credentials.

## 🤝 Contributing

Contributions are welcome!

If you want to improve Lumen AI:

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/my-feature
```

3. Make your changes.
4. Test your changes.

```bash
npm run lint
npm run build
```

5. Commit your changes.

```bash
git commit -m "Add my feature"
```

6. Push your branch.

```bash
git push origin feature/my-feature
```

7. Open a Pull Request.

## 🐛 Issues

Found a bug or have an idea?

Feel free to open an issue in the GitHub repository.

## 🔮 Future Improvements

Some possible improvements for Lumen AI:

* 🔐 Add a backend API for better API-key security
* 💾 Save chat history
* 👤 Add user authentication
* 🌙 Improve theme customization
* 📱 Improve mobile experience
* 🗂️ Add conversation history
* 🎙️ Add voice input
* 🔊 Add AI voice responses
* ⚡ Add streaming Gemini responses
* 📊 Add usage tracking

## 📄 License

No license is currently specified for this project.

If you plan to make the project open source, consider adding a license such as the MIT License.

## 🔗 Repository

**GitHub:**
https://github.com/Rohitt0/lumen-ai

---

Made with ❤️ using React, Vite, and Google Gemini.
