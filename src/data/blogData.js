// src/data/blogData.js
import voltUndergroundImage from '../assets/images/volt-underground.png';
import hiPubImage from '../assets/images/hi-pub.png';
import colorRacerImage from '../assets/images/color-racer.jpg';
// Import more images here as needed...

export const blogData = [
    {
      slug: 'volt-underground',
      title: 'Volt Underground: Revolutionizing Events',
      image: voltUndergroundImage, // Use the imported image
      excerpt: 'Discover how Volt Underground is changing the way we experience events.',
      content: `
        <p>Welcome to <strong>Volt Underground</strong>, a revolutionary ticket-selling platform designed exclusively for the underground DJ music scene. Whether you're a devoted fan or a newcomer looking to explore electrifying beats, Volt Underground bridges the gap between music enthusiasts and their favorite underground events. With an intuitive interface and robust features, our platform makes discovering and securing tickets for the hottest DJ performances a breeze.</p>
        
        <h2>About the Project</h2>
        <p>Volt Underground was built with the goal of streamlining the connection between underground music lovers and the thriving DJ scene. This full-stack application leverages modern technologies to deliver a seamless and engaging user experience.</p>
  
        <h3>Tech Stack</h3>
        <ul>
          <li><strong>Frontend:</strong> React, TypeScript, JavaScript, CSS</li>
          <li><strong>Backend:</strong> Node.js, Express, GraphQL, MongoDB, Mongoose</li>
          <li><strong>Authentication & Security:</strong> Bcrypt, JWT</li>
          <li><strong>Dev Tools:</strong> VS Code, Dotenv, Nodemon, Insomnia, Git, GitHub</li>
          <li><strong>Deployment:</strong> Render, MongoDB Atlas</li>
        </ul>
  
        <h3>Features You'll Love</h3>
        <ol>
          <li><strong>Personalized User Profiles</strong>
            <ul>
              <li>Track ticket purchases: View details of past and upcoming events.</li>
              <li>Stay connected: Revisit memories of your favorite shows and discover new ones.</li>
            </ul>
          </li>
          <li><strong>Intuitive Event Browsing</strong>
            <ul>
              <li>Event details: See location, date, genre, and more.</li>
              <li>Custom filters: Find events that match your preferences, whether it's a specific DJ or venue.</li>
            </ul>
          </li>
          <li><strong>Hassle-Free Ticket Purchases</strong>
            <p>Secure tickets with ease using our streamlined purchasing process, ensuring you never miss a beat.</p>
          </li>
          <li><strong>Real-Time Data with GraphQL</strong>
            <ul>
              <li>Personalized event recommendations.</li>
              <li>Real-time updates on ticket availability.</li>
            </ul>
          </li>
        </ol>
  
        <p><strong>Volt Underground</strong> is available as a deployed app at <a href="https://volt-underground.onrender.com" target="_blank" rel="noopener noreferrer">volt-underground.onrender.com</a>.</p>
  
        <h2>Future Development</h2>
        <p>We're committed to evolving Volt Underground with exciting new features, including:</p>
        <ul>
          <li>Search Functionality: Find events by artist, venue, or genre.</li>
          <li>Dynamic Event Calendar: Browse events by date and location.</li>
          <li>Integrated Payment System: Securely purchase tickets via Stripe or PayPal.</li>
          <li>Event Recommendations: Personalized suggestions based on your preferences.</li>
          <li>Real-Time Ticket Updates: Stay informed on ticket availability.</li>
          <li>User Reviews & Ratings: Share your feedback on events, DJs, and venues.</li>
          <li>Push Notifications: Receive alerts about upcoming events and ticket releases.</li>
        </ul>
  
        <h2>Contribute to Volt Underground</h2>
        <p>We believe in the power of open-source collaboration. Whether you're a developer, designer, or music lover, your contributions are invaluable to us.</p>
        <ul>
          <li>Fork the repo, implement your enhancements, and submit a pull request.</li>
          <li>Open issues with the tag "enhancement" to suggest features.</li>
          <li>Don't forget to star the project on GitHub if you love what we're building!</li>
        </ul>
  
        <h2>Meet the Team</h2>
        <p>Volt Underground is brought to life by:</p>
        <ul>
          <li>Parsa McMoody</li>
          <li>Jake Magri</li>
          <li>Brendan Murfield</li>
        </ul>
        <p>Together, we're redefining how music lovers engage with the underground scene.</p>
  
        <h2>Join the Movement</h2>
        <p>Explore, discover, and groove with Volt Underground. Let's amplify the underground DJ music scene—one event at a time. Visit <a href="https://volt-underground.onrender.com" target="_blank" rel="noopener noreferrer">Volt Underground</a> to dive into the rhythm today.</p>
      `,
      affiliateLink: 'https://affiliate.link/voltunderground',
    },
    {
      slug: 'hi-pub',
      title: 'Hi, Pub!: A New Way to Connect',
      image: hiPubImage, // Use the imported image
      excerpt: 'Exploring how Hi, Pub! makes virtual events more engaging.',
      content: `
        <p>Step into the world of <strong>Hipub</strong>, a one-of-a-kind social platform that brings the camaraderie of a real-world pub to your screen. With Hipub, users can connect, chat, and enjoy a laid-back atmosphere guided by the lively AI bartender, Finn. Whether you're here for casual chats or nightlife recommendations, Hipub has something for everyone.</p>
  
        <h2>What is Hipub?</h2>
        <p>Hipub is a virtual meeting space where users interact in a main room, asking questions, sharing stories, or seeking guidance from Finn, the AI bartender. With its engaging design and intelligent conversational capabilities, Hipub creates an experience that's as close to a neighborhood pub as it gets—without leaving your couch.</p>
  
        <h2>About the Project</h2>
        <p>Hipub is built on modern technologies, offering seamless user interactions and dynamic features:</p>
  
        <h3>Tech Stack</h3>
        <ul>
          <li><strong>Frontend:</strong> JavaScript, CSS</li>
          <li><strong>Backend:</strong> Node.js, Express, PostgreSQL, Sequelize</li>
          <li><strong>Authentication & Security:</strong> Bcrypt, JWT</li>
          <li><strong>Dev Tools:</strong> VS Code, Nodemon, Dotenv</li>
        </ul>
  
        <h3>Key Features</h3>
        <ul>
          <li><strong>Roleplaying Bartender (Finn)</strong>
            <p>Finn, powered by OpenAI, is the heart of Hipub. He's witty, engaging, and occasionally mysterious, ensuring every conversation feels personal and fun.</p>
          </li>
          <li><strong>Personalized Conversations</strong>
            <p>When users log in, Finn remembers past interactions, creating a seamless conversational flow by incorporating history into prompts.</p>
          </li>
          <li><strong>Location-Based Recommendations</strong>
            <p>Share your location with Finn, and he'll use the Places API to suggest pubs, bars, and restaurants nearby—complete with his signature charm.</p>
          </li>
        </ul>
  
        <h2>Getting Started</h2>
        <p>Hipub is accessible as a deployed app on Render. Visit <a href="https://render.com" target="_blank" rel="noopener noreferrer">Hipub on Render</a> to dive in!</p>
      `,
      affiliateLink: 'https://affiliate.link/hipub',
    },
    {
      slug: 'color-racer',
      title: 'Color Racer: Gamification for Fun',
      image: colorRacerImage, // Use the imported image
      excerpt: 'Color Racer is a fast-paced, visually immersive game where speed and color come together...',
      content: `
    <p>Welcome to <strong>Color Racer</strong>, a thrilling two-player typing race designed to test your speed, accuracy, and ability to type faster than your opponent. Whether you're a seasoned typist or a beginner, Color Racer offers an engaging way to challenge yourself and friends in a friendly competition. Get ready to race to the finish line by typing as fast as you can!</p>

    <h2>About the Project</h2>
    <p>Color Racer is an exciting game developed as the first project for a coding bootcamp. The goal is simple yet challenging: race against another player by typing as quickly as possible. Each player controls their car by typing a specific key. The faster you type, the faster your car moves towards the finish line. It's a fun and competitive way to practice your typing speed while having a blast with friends!</p>

    <h3>How to Play</h3>
    <p>Here's how you can get started with Color Racer:</p>
    <ul>
        <li><strong>Enter Your Name:</strong> Upon visiting the game's page, players will be prompted to enter their names to personalize the experience.</li>
        <li><strong>Choose Your Car:</strong> After entering their name, players can choose from a range of colorful cars. Which one will you race in?</li>
        <li><strong>Start the Game:</strong> Once the car is selected, hit the "Start" button, and the race begins! A timer starts counting down to track your performance.</li>
        <li><strong>Typing Race:</strong> Player 1 uses the "a" key and Player 2 uses the "l" key (remember to keep Caps Lock off) to move their cars forward. The faster you type, the faster your car goes!</li>
        <li><strong>Save Your Score:</strong> After the race, if you've managed to cross the finish line, you can save your time to local storage to track your progress.</li>
        <li><strong>Play Again:</strong> Challenge yourself to improve by clicking "Play Again" to start a new race.</li>
    </ul>

    <h3>Project Features</h3>
    <ul>
        <li><strong>Real-Time Event Handling:</strong> The game uses <code>keydown</code> and <code>keyup</code> event listeners to capture user input and track the typing progress for each player.</li>
        <li><strong>Timer Functionality:</strong> A timer begins as soon as the race starts and measures how fast each player types to complete the race.</li>
        <li><strong>Local Storage:</strong> After each race, users can save their scores to local storage, allowing them to keep track of their best times and improve with every game.</li>
        <li><strong>Interactive Gameplay:</strong> Choose from a variety of colorful cars and race head-to-head with a friend. The game's lively visuals keep things engaging throughout.</li>
        <li><strong>Save & Replay:</strong> Once the race is finished, players can save their scores and try again to beat their previous times, encouraging healthy competition.</li>
    </ul>

    <h3>Technologies Used</h3>
    <ul>
        <li><strong>HTML:</strong> The structure and layout of the game are defined using basic HTML elements.</li>
        <li><strong>CSS:</strong> Styling is achieved with <code>style.css</code> and <code>reset.css</code> to ensure the game looks polished across all devices.</li>
        <li><strong>JavaScript:</strong> Game logic is powered by two main JavaScript files: <code>form-logic.js</code> for user input handling and <code>game-logic.js</code> to manage the race, timer, and local storage features.</li>
    </ul>

    <h3>Installation</h3>
    <p>This game doesn't require any installation. Simply visit the game's website and get started right away. All of the game's assets and files are hosted online for instant play!</p>

    <h3>Contributors</h3>
    <p>This project was made possible by the contributions of the following individuals:</p>
    <ul>
        <li>Jake M</li>
        <li>Parsa M</li>
        <li>Michael T</li>
    </ul>

    <h3>License</h3>
    <p>This project is licensed under the MIT License, meaning you are free to use, modify, and distribute the code with appropriate attribution. Enjoy creating your own variations of Color Racer!</p>

    <h3>Conclusion</h3>
    <p>Color Racer is more than just a game—it's a fun and competitive way to hone your typing skills. Whether you're looking to challenge friends or race against your own best times, the game offers endless replayability. So, get your fingers ready, pick your car, and race to the finish line!</p>

    <p><strong>Play Now:</strong> Ready to test your typing speed? Visit <a href="your-deployed-link-here">Color Racer - Play Now</a> and let the race begin!</p>

      `,
      affiliateLink: 'https://affiliate.link/colorracer',
    },
  ];
  