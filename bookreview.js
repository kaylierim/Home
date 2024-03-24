const reviews = [
    {
        title: "Tomorrow, Tomorrow, and Tomorrow",
        author: "Gabrielle Zevin",
        content: "<p>I already knew from the start of this book that it would be special. There are times when you are reading a book and you feel disconnected, disengaged, or even uninterested. However, this book made me feel seen, warm, and loved? It was strangely cathartic.</p> <p>Tomorrow, and Tomorrow, and Tomorrow is a tale of two best friends who make video games together. However, it goes much deeper than just a story. It taps into themes of friendship, life meaning, loss, disability, and the human condition.</p><p>This book made me laugh and cry (several times).</p><p class='quote'><span class='retro'>'SADIE MIRANDA GREEN, YOU HAVE DIED OF DYSENTERY!'</span> Sam could be ignored, but the childish shared reference could not be. It was an invitation to play. She turned.</p><p>Throughout my time reading this book, I couldn't be without a highlighter. The writing was superb; it evoked emotions.</p><p> Yes, a hundred times yes I recommend this book.</p> ",
        image: "./images/tomorrowbook.jpg",
        id: "tomorrow"
    },
    {
        title: "What I Wish I Knew When I Was 20",
        author: "Tina Seelig",
        content: "<p>This book was lent to me by one of my father's good friends. Seelig's book dives deep into the field of business and innovation.</p> <p>I am glad this book was given to me because, as a computer science major, I don't get much exposure to the \"entrepreneurial mindset\". </p> <p>My main takeaways from this book include:</p> <ul> <li>You don't have to ask for permission, just do it</li> <li>You can make do with what you already have</li> <li>Goldberg story</li> <li>Lao-Tzu's quote</li> </ul> <h3>You don't have to ask for permission, just do it</h3> <p>Throughout the book, Seelig recounts success stories of people who did not let their imposter syndrome get the best of them. They reached their full potential by \"not asking for permission\". They didn't have to ask for permission to start their own business or to publish their own book or to seize an opportunity. </p> <p>\"Over time, I've became increasingly aware that the world is divded into people who wait for others to give them permission to do the things they want to do and people who grant themselves permission.\" (57) </p> <p>Seelig tells her students to \"never miss an opportunity to be fabulous\". She explains that being fabulous means \"making the decision to go beyond what's expected at all times\" (163).</p> <p>These lessons are crucial to learn early because students often have to follow specific guildlines in order to do well. However, this is not how it works in the real world. Contrary to college or high school life, there are no strict rubrics that dictate whether one \"got 100 or failed\".</p> <h3>You can make do with what you already have</h3> <p>Many times in this book, Seelig talks about the assignment she gives her students at Standford. Most of these assignments include developing innovative ideas utilizing what they already have. For example, they might use rubberbands or paperclips to create a make believe brand.</p> <p>To a certain extent, this concept ties into the last bullet point because it shows that you don't need to be someone with abundant resources or a genius brain to be as successful as Steve Jobs or Bill Gates. One could simply see an opportunity and seize it with what they can.</p> <h3>Goldberg story</h3> <p>Summed up, this is a story of a man, Goldberg, who wanted to win the lottery. He prayed to God every day but he never won. One day, he got fed up and said that God let him down. God responded by saying that Goldberg could at least buy a ticket.</p> <p>This is the story that stuck with me the most. Sometimes, I find myself thinking or being like Goldberg. Let's say I want success but how am I actively achieving it?</p> <h3>Lao-Tzu's quote</h3> <p>\"The master of the art of living makes little distinction between his work and his play, his labor and his leisure, his mind and his body, his education and his reaction, his love and his religion. He simply pursues his vision of excellence in whatever he does, leaving ohers to decide whether he is working or playing. To him, he is always doing both.\"</p> <p>This quote describes a certain lifestyle I hope I always live by. Although work might be stressful, I enjoy a challenge. I hope I can always remember that the journey is just as valuable as the destination. </p>",
        image: "./images/whatiwishiknewwheniwas20.jpg",
        id: "what-i-wish"
    }
];

function createReview(review) {
    const box = document.createElement('div');
    box.classList.add(`review-box`);
    box.id = review.id;

    const image = document.createElement('img');
    image.classList.add('book-image');
    image.src = review.image;
    box.appendChild(image);

    const rightBox = document.createElement('div');
    rightBox.classList.add('review-box-right');
    box.appendChild(rightBox);

    const title = document.createElement('h2');
    title.classList.add('book-title');
    title.textContent = review.title;
    rightBox.appendChild(title);

    const author = document.createElement('h3');
    author.classList.add('book-author');
    author.textContent = review.author;
    rightBox.appendChild(author);

    const content = document.createElement('p');
    content.classList.add('review-content');
    content.innerHTML = review.content.substring(0, 125) + "...";
    rightBox.appendChild(content);

    return box;
}

function initReviews() {
    const container = document.getElementById('reviews-container');
    reviews.forEach(review => {
        const reviewBox = createReview(review);
        container.appendChild(reviewBox);
        var style = document.createElement("style");
        style.innerHTML = `#${review.id}::before { background-image: url("${review.image}"); }`;

        const id = document.getElementById(review.id);
        id.appendChild(style);
    })
}

initReviews();