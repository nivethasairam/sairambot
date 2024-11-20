document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    alert("Welcome to Sri Sairam Engineering College");

    function addMessage(content, type) {
        const message = document.createElement('div');
        message.classList.add('message', type);
        message.textContent = content;
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }

    function getChatbotResponse(query) {
        const responses = {
            morning: "Morning menu includes: normal dosa ₹50, ghee dosa ₹60, onion dosa ₹60, podi dosa ₹60,egg dosa ₹60, idly ₹45, vada ₹15, pongal ₹50. Available until 9:00 AM.",
            morning_thursday: "Thursday morning menu includes: normal dosa ₹50, ghee dosa ₹60, onion dosa ₹60, podi dosa ₹60, idly ₹45, vada ₹15, pongal ₹50. Available until 9:00 AM.",
            monday: "Monday's afternoon menu includes: biriyani ₹110, chapathi ₹45, chicken noodles ₹85, egg noodles ₹75, egg rice ₹75, chicken rice ₹85, veg noodles ₹75, veg fried rice ₹75. Available from 11:30 AM - 1:30 PM.",
            tuesday: "Tuesday's afternoon menu includes: biriyani ₹110, chapathi ₹45, chicken noodles ₹85, egg noodles ₹75, egg rice ₹75, chicken rice ₹85, veg noodles ₹75, veg fried rice ₹75. Available from 11:30 AM - 1:30 PM.",
            wednesday: "Wednesday's afternoon menu includes: biriyani ₹110, chapathi ₹45, chicken noodles ₹85, egg noodles ₹75, egg rice ₹75, chicken rice ₹85, veg noodles ₹75, veg fried rice ₹75. Available from 11:30 AM - 1:30 PM.",
            thursday: "Thursday's afternoon menu includes: paneer fried rice ₹75, veg noodles ₹75, paneer noodles ₹75, sambar sadam ₹70, veg biriyani ₹70, veg fried rice ₹75. Special day so only vegetarian foods available! Available from 11:30 AM - 1:30 PM.",
            friday: "Friday's afternoon menu includes: biriyani ₹110, chapathi ₹45, chicken noodles ₹85, egg noodles ₹75, egg rice ₹75, chicken rice ₹85, veg noodles ₹75, veg fried rice ₹75. Available from 11:30 AM - 1:30 PM.",
            saturday: "Saturday's afternoon menu includes: biriyani ₹110, chapathi ₹45, chicken noodles ₹85, egg noodles ₹75, egg rice ₹75, chicken rice ₹85, veg noodles ₹75, veg fried rice ₹75. Available from 11:30 AM - 1:30 PM.",
            sunday: "Sunday's afternoon menu includes: biriyani ₹110, chapathi ₹45, chicken noodles ₹85, egg noodles ₹75, egg rice ₹75, chicken rice ₹85, veg noodles ₹75, veg fried rice ₹75. Available from 11:30 AM - 1:30 PM.",
            greeting: "Hello! This is Nyva. I'm here to help you with the menu information. You can ask me about the menu for morning or afternoon. For example, you can ask: - What's the morning menu? - What's available in the afternoon? What would you like to know?",
            how_are_you: "I'm great! Thanks for asking. How can I assist you today?",
            thank_you: "You're welcome! If you have any more questions, feel free to ask.",
            goodbye: "Goodbye! Have a great day!",
            location: "Opening the location for Sri Sairam Engineering College Canteen..."
        };

        const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
        query = query.toLowerCase();

        if (query.includes('morning')) {
            if (today === 'thursday') {
                return responses.morning_thursday;
            } else {
                return responses.morning;
            }
        } else if (query.includes('afternoon')) {
            return responses[today] || "No menu available for today.";
        } else if (query.includes('hi') || query.includes('hello') || query.includes('good morning') || query.includes('good afternoon') || query.includes('good evening') || query.includes('good night')) {
            return responses.greeting;
        } else if (query.includes('how are you') || query.includes('how are u') || query.includes('how r you') || query.includes('how r u')) {
            return responses.how_are_you;
        } else if (query.includes('thank you') || query.includes('thanks') || query.includes('thankyou')) {
            return responses.thank_you;
        } else if (query.includes('bye') || query.includes('goodbye')) {
            return responses.goodbye;
        } else if (query.includes('map') || query.includes('google map') || query.includes('how to visit') || query.includes('where is canteen') || query.includes('canteen location') || query.includes('location')) {
            // Open the Google Maps location in a new tab
            window.open('https://www.google.com/maps/dir/?api=1&destination=Sri+Sairam+Engineering+College+canteen', '_self');
            return responses.location;
        } else {
            return "Please specify whether you want to know about the morning or afternoon menu. I can help with: - Morning menu - Afternoon menu";
        }
    }

    sendButton.addEventListener('click', () => {
        const query = userInput.value.trim();
        if (query) {
            addMessage(query, 'user');
            const response = getChatbotResponse(query);
            addMessage(response, 'bot');
            userInput.value = '';
        }
    });

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});
