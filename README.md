WhatsNext Task Manager Documentation 
1. Overview 
WhatsNext Task Manager is a simple and interactive web application designed to help users 
manage their daily tasks efficiently. It provides a clean interface for signing up, logging in, 
and organizing tasks with edit, delete, and countdown features. This project uses HTML, 
CSS, Bootstrap, and JavaScript with LocalStorage for temporary session and user 
management. 
2. Key Features 
• User Sign Up and Sign In using temporary LocalStorage. 
• Access control — Tasks page only accessible when logged in. 
• Task creation, editing, and deletion. 
• Countdown timer for added tasks. 
• Responsive design with modern UI using Bootstrap 5. 
• Logout functionality that clears session data. 
3. Tech Stack 
• HTML5 – Page structure and layout. 
• CSS3 & Bootstrap 5 – Styling and responsiveness. 
• JavaScript (ES6) – Core interactivity and LocalStorage management. 
• LocalStorage – Temporary data persistence during user session. 
4. File Structure 
The project files are organized as follows: 
├── index.html — Homepage 
├── SignIn.html — User login page 
├── signUp.html — User registration page 
├── tasks.html — Task management interface 
├── style1.css — Styling for Sign In page 
├── signup.css — Styling for Sign Up page 
├── styleTask.css — Styling for Task Manager 
└── script.js — Handles dynamic task logic (embedded in HTML). 
5. How It Works 
The application workflow is straightforward: 
1. User visits the Sign Up page and creates an account. Data is stored temporarily in 
LocalStorage. 
2. User logs in using the same credentials on the Sign In page. Upon success, a session flag is 
stored (isLoggedIn = true). 
3. Once logged in, the user can access the Tasks page where they can add, edit, or delete 
tasks. 
4. The Logout button clears the session data and redirects the user back to the Sign In page. 
6. Future Improvements 
• Integrate backend authentication with Django or Flask. 
• Store user and task data in a real database (e.g., PostgreSQL, Firebase). 
• Add user profile customization and persistent task history. 
• Enable notifications and reminders for task deadlines. 
• Implement drag-and-drop task organization and progress tracking. 
7. Credits 
Project Author: Sandra 
Guided by: ChatGPT (OpenAI) 
Date: October 2025 
All design, logic, and structure created for academic and presentation purposes. 
