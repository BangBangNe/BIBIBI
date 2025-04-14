document.addEventListener('DOMContentLoaded', function() {
    const firstCard = document.getElementById('first-card');
    const secondCard = document.getElementById('second-card');
    const messageContainer = document.getElementById('message-container');
    const greetButton = document.getElementById('greet-button');
    const nextMessageButton = document.getElementById('next-message-button');
    const messageText = document.getElementById('message-text');
    const messages = [
        "TOAI YÊU BIBI 100 lần 🔥",
        "Đồ gay 💖",
        "Sao cutie zayy 🌺",
        "Măm croissant khôm? ✨",
        "BIBIBIBIBIBIBIBI 🎀",
        "Bibi giỏi thía 🌟",
        "Skytour toai sẽ dán sticker khắp người 💕",
        "Cắt lông đầu giống MTP đuy! 💗",
        "MTP!!!!! 💎",
        "Muốn đi chưi với bibi ⭐",
        "Ôm ôm 🤗",
        "Muốn call waaaaaaa 💓",
        "Bibi siu giỏi, cố lênnnnn 💪",
    ];
    
    const firstMessage = messages[0];

    let remainingMessages = [...messages.slice(1)];
    shuffleArray(remainingMessages);
    
    let isFirstClick = true;
    
    // When greet button is clicked, switch to second card
    greetButton.addEventListener('click', () => {
        firstCard.classList.remove('active');
        secondCard.classList.add('active');
        
        // Show first message (not random)
        messageText.textContent = firstMessage;
        messageContainer.classList.add('message-pop');
        
        // Reset animation
        setTimeout(() => {
            messageContainer.classList.remove('message-pop');
        }, 500);
        
        isFirstClick = false;
    });
    
    // When next message button is clicked, show next random message
    nextMessageButton.addEventListener('click', () => {
        displayNextMessage();
    });
    
    // Function to display the next message with animation
    function displayNextMessage() {
        // If we've used all messages, reshuffle and start again
        if (remainingMessages.length === 0) {
            // For subsequent rounds, include the first message in the shuffle
            remainingMessages = [...messages];
            shuffleArray(remainingMessages);
        }
        
        // Get and remove the first message from the shuffled array
        const message = remainingMessages.shift();
        
        // Display the message with animation
        messageText.textContent = message;
        messageContainer.classList.add('message-pop');
        
        // Reset animation
        setTimeout(() => {
            messageContainer.classList.remove('message-pop');
        }, 500);
    }
    
    // Fisher-Yates shuffle algorithm to randomize array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});