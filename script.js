// Age gate functionality
document.addEventListener('DOMContentLoaded', function() {
    const ageGate = document.querySelector('.age-gate');
    const mainContent = document.getElementById('main-content');
    const enterBtn = document.getElementById('enter-btn');
    const exitBtn = document.getElementById('exit-btn');

    // Check if user has already confirmed age
    if(localStorage.getItem('adultContentConfirmed') === 'true') {
        ageGate.style.display = 'none';
        mainContent.classList.remove('hidden');
        animatePosts();
    }

    // Enter button click handler
    enterBtn.addEventListener('click', function() {
        localStorage.setItem('adultContentConfirmed', 'true');
        ageGate.style.opacity = '0';
        ageGate.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            ageGate.style.display = 'none';
            mainContent.classList.remove('hidden');
            animatePosts();
        }, 500);
    });

    // Exit button click handler
    exitBtn.addEventListener('click', function() {
        window.location.href = 'https://www.google.com';
    });

    // Telegram integration placeholder
    // In a real implementation, you would use Telegram Bot API to fetch posts
    // Here's a basic structure for how it might work:

    /*
    function fetchTelegramPosts() {
        const botToken = 'YOUR_BOT_TOKEN';
        const channelName = '@yourchannel';
        const apiUrl = `https://api.telegram.org/bot${botToken}/getUpdates`;
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Process posts and add to content grid
                console.log('Telegram posts:', data);
            })
            .catch(error => {
                console.error('Error fetching Telegram posts:', error);
            });
    }
    
    // Uncomment to enable in production
    // fetchTelegramPosts();
    */

    // Animate posts sequentially
    function animatePosts() {
        const posts = document.querySelectorAll('.post');
        posts.forEach((post, index) => {
            setTimeout(() => {
                post.classList.add('animate-in');
            }, index * 150);
        });
    }

    // Footer button functionality
    const footerButtons = document.querySelectorAll('.footer-btn');
    footerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.textContent;
            alert(`Кнопка "${text}" буде функціонувати в повній версії сайту.`);
            
            // Example of what you might do for each button:
            /*
            switch(text) {
                case 'Telegram':
                    window.open('https://t.me/yourchannel', '_blank');
                    break;
                case 'Підписатись':
                    // Subscription logic
                    break;
                // ... other cases
            }
            */
        });
    });

    // Subscribe button functionality
    const subscribeBtn = document.querySelector('.btn-subscribe');
    if(subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            alert('Функція підписки буде реалізована в повній версії. Перенаправлення на Telegram канал.');
            // window.open('https://t.me/yourchannel', '_blank');
        });
    }
});
