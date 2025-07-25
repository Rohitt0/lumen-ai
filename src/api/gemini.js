// Helper to convert a file to a base64 string for the API
const fileToGenerativePart = async (file) => {
    const base64EncodedDataPromise = new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
        reader.readAsDataURL(file);
    });
    return {
        inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
};

/**
 * Calls the Gemini API with a message and optional files.
 * @param {string} message The user's text prompt.
 * @param {File[]} files An array of files to send (e.g., images).
 * @returns {Promise<string>} The text response from the API.
 */
export const callGeminiApi = async (message, files) => {
    console.log("Sending to Gemini:", message);

    try {
        // Access the API key securely from environment variables
        // IMPORTANT: Create a .env file in your project root and add VITE_GEMINI_API_KEY=your_key
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
        
        const promptParts = [ { text: message } ];

        // If files are provided, convert them and add them to the request
        if (files && files.length > 0) {
            const imageParts = await Promise.all(files.map(fileToGenerativePart));
            promptParts.push(...imageParts);
        }

        const payload = {
            contents: [{ role: "user", parts: promptParts }],
        };

        // Make the API call
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`API Error: ${response.status} ${response.statusText}\n${errorBody}`);
        }

        const result = await response.json();
        
        // Safely extract the text from the response
        if (result.candidates && result.candidates[0]?.content?.parts?.[0]) {
            return result.candidates[0].content.parts[0].text;
        } else {
            console.log("Unexpected API response:", result);
            return "Sorry, I couldn't get a response. The response format might have changed.";
        }

    } catch (error) {
        console.error("Gemini API call failed:", error);
        return `Error: ${error.message}`;
    }
};
