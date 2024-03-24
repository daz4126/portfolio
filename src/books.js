const books = [
    {title: "Jump Start Sinatra", 
    image: new URL('/src/images/sinatra.jpeg', import.meta.url), 
    description: "This short SitePoint book provides readers with a fun and yet practical introduction to Sinatra, a framework that makes web development with Ruby extremely simple. It's not intended to be a completely comprehensive guide to the framework or an in-depth Ruby tutorial, but will quickly get you up to speed with Sinatra and give you the confidence to start experimenting on your own. The book is built around a real-life example project: a content management system. It's a fun and easily understandable project that is used to demonstrate the concepts outlined in the book in a practical way. This is a clear, approachable and very easy-to-follow book that will get you to to speed with Sinatra in no time.", 
    link: "https://www.amazon.co.uk/Jump-Start-Sinatra-Darren-Jones/dp/0987332147/",
    tags: ["Ruby","Sinatra","Git", "Databases"]
},

{title: "JavaScript: Novice to Ninja", 
    image: new URL('/src/images/javascript.jpeg', import.meta.url), 
    description: "JavaScript is a must-have skill for all web developers. JavaScript: Novice to Ninja is a fun, practical, and comprehensive guide to the modern usage of this deceptively powerful language. Comprehensively updated to cover ECMAScript 6 and modern JavaScript development, the second edition of this step-by-step introduction to coding in JavaScript will show you how to to solve real-world problems, design eye-catching animations, build smarter forms, and develop richer applications.", 
    link: "https://www.amazon.co.uk/JavaScript-Novice-Ninja-Darren-Jones-ebook/dp/B0C1556VYB/",
    tags: ["JavaScript","Intermediate","Advanced"]
},

{title: "Learn To Code With JavaScript", 
    image: new URL('/src/images/code.jpeg', import.meta.url), 
    description: "A hands-on, practical Introduction to coding! Do you want to learn to code? Perhaps you want to learn how to build the next social media sensation or blockbuster game? Or perhaps you just want to get some valuable coding experience under your belt? This easy-to-follow, practical, and fun guide is the perfect place to start on your coding journey. You'll be learning to program with JavaScript - the most popular programming language on Earth. And it runs in web browsers, making it particularly suited to creating web-based apps and games. But the principles and techniques that you'll learn will provide you with a foundation to go on and learn many other languages, too.", 
    link: "https://www.amazon.co.uk/Learn-Code-JavaScript-Darren-Jones-ebook/dp/B0C156NSNS/",
    tags: ["JavaScript","Coding","Beginner", "DOM", "Web Apps"]
},

{title: "6 JavaScript Projects", 
    image: new URL('/src/images/6apps.jpeg', import.meta.url), 
    description: "There's no doubt that the JavaScript ecosystem changes fast. Not only are new tools and frameworks introduced and developed at a rapid rate, the language itself has undergone big changes with the introduction of ES2015 (aka ES6). Understandably, many articles have been written complaining about how difficult it is to learn modern JavaScript development these days. We're aiming to minimize that confusion with this set of books on modern JavaScript. I contributed a tutorial section explaining how to build a to do list in Hyperapp.", 
    link: "https://www.oreilly.com/library/view/6-javascript-projects/9781492067238/",
    tags: ["JavaScript","Hyperapp","State", "To Do list"]
},
    
]

  export { books }