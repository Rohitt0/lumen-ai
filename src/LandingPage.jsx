import React from 'react';
import './LandingPage.css'; // Make sure to import the CSS file
import { motion } from 'framer-motion'; // Import motion for animations
import brainstorm from "./assets/brainstorm.png"
import code from "./assets/code.png"
import summarize from "./assets/summarize.png"
import advice from "./assets/advice.png"
import { PromptInputBox } from './components/PromptInputBox'; // Make sure this path is correct
import { callGeminiApi } from './api/gemini.js'; // 1. Import the API function

const LandingPage = ({ onNavigate }) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [geminiResponse, setGeminiResponse] = React.useState('');
    // State to control the text inside the prompt box
    const [promptInput, setPromptInput] = React.useState('');

    // This function sets the prompt box text when a suggestion is clicked
    const handleSuggestionClick = (text) => {
        setPromptInput(text);
    };

    const handleSend = async (message, files) => {
        setIsLoading(true);
        setGeminiResponse(''); // Clear any previous response

        const responseText = await callGeminiApi(message, files);
        
        setGeminiResponse(responseText);
        setIsLoading(false);
        setPromptInput(''); // Clear the input box after sending
    };

    return (
        <div className="main-container">

            <motion.header
                initial={{ opacity: 0, filter: 'blur(8px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full max-w-7xl mx-auto"
            >
                <nav className="flex items-center justify-between p-4">
                    <button onClick={() => onNavigate('home')} className="bg-transparent border-none cursor-pointer p-0">
                        <div className="top-logo">
                            Lumen AI
                        </div>
                    </button>
                    <div className="hidden md:flex items-center space-x-8 text-gray-400">
                        <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">About</button>
                        <button onClick={() => onNavigate('features')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">Features</button>
                    </div>
                </nav>
            </motion.header>

            <main className="text-center px-4 flex-grow flex flex-col items-center justify-center">
                
                <div className="w-full max-w-4xl mx-auto mb-8">
                    {(geminiResponse || isLoading) && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="gemini-response rounded-xl p-6 text-left whitespace-pre-wrap min-h-[100px]"
                        >
                            {isLoading ? "Lumen is thinking..." : geminiResponse}
                        </motion.div>
                    )}
                </div>

                {!geminiResponse && !isLoading && (
                    <>
                        <motion.h1
                            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5 }}
                            className="main-heading"
                        >
                            What <span className='special-font'>mystery </span>
                            <br />
                            can i help solve today?
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="sub-heading"
                        >
                            Fueled by algorithms and a desire to help.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="sub-buttons"
                        >
                            {/* Updated buttons with onClick handlers */}
                            <button onClick={() => handleSuggestionClick('Help me brainstorm ')} className=" border border-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-700 transition-colors">
                                <img src={brainstorm} alt="Brainstorm icon" className="w-4 h-4 inline-block align-middle" />
                                Brainstorm
                            </button>
                            <button onClick={() => handleSuggestionClick('Code this: ')} className=" border border-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-700 transition-colors">
                                <img src={code} alt="code icon" className="w-4 h-4 inline-block align-middle" />
                                Code
                            </button>
                            <button onClick={() => handleSuggestionClick('Summarize this text: ')} className=" border border-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-700 transition-colors">
                                <img src={summarize} alt="summarize icon" className="w-4 h-4 inline-block align-middle" />
                                Summarize text
                            </button>
                            <button onClick={() => handleSuggestionClick('Give advice for ')} className=" border border-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-700 transition-colors">
                                <img src={advice} alt="Get advice icon" className="w-4 h-4 inline-block align-middle" />
                                Get advice
                            </button>
                        </motion.div>
                    </>
                )}
            </main>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="prompt-box"
            >
                {/* Pass the value and onValueChange props to control the input */}
                <PromptInputBox
                    value={promptInput}
                    onValueChange={setPromptInput}
                    onSend={handleSend}
                    isLoading={isLoading}
                    placeholder="Ask me anything..."
                />
            </motion.div>
        </div >
    );
};

export default LandingPage;
