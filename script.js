const motivationalQuotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "The secret of getting ahead is getting started. – Mark Twain",
    "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game-winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. – Michael Jordan",
    "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve. – Mary Kay Ash",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "It’s hard to beat a person who never gives up. – Babe Ruth",
    "I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’ – Leah Busque",
    "If people are doubting how far you can go, go so far that you can’t hear them anymore. – Michele Ruiz",
    "We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success. – Arianna Huffington",
    "Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE. – Joss Whedon",
    "Everything you can imagine is real. – Pablo Picasso",
    "Do what you can with all you have, wherever you are. – Theodore Roosevelt",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "Try not to become a man of success. Rather become a man of value. – Albert Einstein",
    "Never bend your head. Always hold it high. Look the world straight in the eye. – Helen Keller",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "When you have a dream, you’ve got to grab it and never let go. – Carol Burnett",
    "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination. – Jimmy Dean",
    "No matter what you’re going through, there’s a light at the end of the tunnel. – Demi Lovato",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. – Albert Einstein",
    "You are braver than you believe, stronger than you seem, and smarter than you think. – A.A. Milne",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Do not wait to strike till the iron is hot; but make it hot by striking. – William Butler Yeats",
    "Whether you think you can or think you can’t, you’re right. – Henry Ford",
    "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
    "Go confidently in the direction of your dreams! Live the life you’ve imagined. – Henry David Thoreau",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    "Dream big and dare to fail. – Norman Vaughan",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Our greatest glory is not in never falling, but in rising every time we fall. – Confucius",
    "Too many of us are not living our dreams because we are living our fears. – Les Brown",
    "I didn’t get there by wishing for it or hoping for it, but by working for it. – Estée Lauder",
    "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
    "A year from now you may wish you had started today. – Karen Lamb",
    "Light tomorrow with today! – Elizabeth Barrett Browning",
    "Someday is not a day of the week. – Denise Brennan-Nelson",
    "Make each day your masterpiece. – John Wooden",
    "Don’t count the days, make the days count. – Muhammad Ali",
    "You get what you give. – Jennifer Lopez",
    "Be not afraid of going slowly, be afraid only of standing still. – Chinese Proverb",
    "We may encounter many defeats but we must not be defeated. – Maya Angelou",
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    "Don’t wait. The time will never be just right. – Napoleon Hill",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. – Roy T. Bennett",
    "I am not a product of my circumstances. I am a product of my decisions. – Stephen Covey"
];


const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    return motivationalQuotes[randomIndex];
};

document.getElementById("button").addEventListener("click", () => {
    document.getElementById("motivationalQuote").innerText = randomQuote();
});
