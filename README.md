# Cheesy Choices!
![screenshot_2024-07-04_131949_720](https://github.com/CHughes13/CI-Hackathon-2-Hack-and-Cheese/assets/82895994/fe018b05-c4be-4fa4-9aae-c030dfa3233b)
![screenshot_2024-07-04_131932_720](https://github.com/CHughes13/CI-Hackathon-2-Hack-and-Cheese/assets/82895994/0236b3cb-cd39-4576-a3fb-ba7aff5ee561)
![screenshot_2024-07-04_131957_720](https://github.com/CHughes13/CI-Hackathon-2-Hack-and-Cheese/assets/82895994/7040593d-6c19-41f1-917d-7a5ae6df8e6d)

## Overview

Cheesy Choices is a web-based trivia game that tests users on a wide range of subjects from geography to science. Users can enter their name, choose whether to play with a timer, and then proceed to answer multiple choice questions. The application keeps track of users' scores, correct and incorrect responses, and their best streak of correct answers.

This web application was created and built by team **Hack & Cheese**:
- Lewis Freeman - [GitHub](https://github.com/LewF-Dev), [LinkedIn](https://www.linkedin.com/in/lewis-freeman-89230a310/)
- Mohammed Essa - [GitHub](https://github.com/MoEssa1), [LinkedIn](https://www.linkedin.com/in/mohammed-essa-05745b256/)
- Christina Hughes - [GitHub](https://github.com/CHughes13), [LinkedIn](https://www.linkedin.com/in/christina-hughes-50233041/)

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.3
- [Balsamiq](https://balsamiq.com/) used to create wireframes
- ChatGPT used throughout for coding advice and inspiration
- [Jamboard](https://jamboard.google.com/d/1XjsnzAiuQ_O_WgiFDCjuUN0aw7v927GWzUWEdflyDuE/viewer?ts=667ec8a4&pli=1&f=1) (digital interactive whiteboard)
- [Trello](https://trello.com/b/CIy6Ngeo/hackathon-2-hack-cheese-project-board) (Project board)

![Trello Project Board](assets/images/Hack-&-Cheese-Project-Board.png)


## Initial Planning Stage - Wireframes

Here are the initial wireframes for the Cheesy Choices application, along with screen shots of the initial design. These provide a visual outline of the planned layout and functionality.

#### Welcome Screen
![Welcome Screen Wireframe](assets/images/cheesy-choices-desktop-wireframes-welcome-screen.png)

#### Question Screen
![Quiz Screen Wireframe](assets/images/cheesy-choices-desktop-wireframes-quiz-screen.png) 

#### Mobile View
![Mobile View Wireframes](assets/images/cheesy-choices-phone-wireframes.png)
#

## Initial Design
These are screenshots of the project around the beginning of development:

![Welcome screen screenshot](assets/images/cheesy-choices-initial-design-welcome-screen.png)
-
![Quiz screen screenshot](assets/images/cheesy-choices-initial-design-quiz-screen.png)
-
![Alert message screenshot](assets/images/cheesy-choices-initial-design-alert-message.png)
-
![incorrect screen screenshot](assets/images/cheesy-choices-initial-design-incorrect-screen.png)




## Features

### Existing Features
- __Username Input__
  - Allows user to enter their name. Gives the quiz a more personalised touch. Quiz will not start without a username – the user will be prompted via an alert to select a username.

- __Timer Option__
  - Offers the user the option play a timed quiz mode which will increase the quiz difficulty level. This can be toggled on/off at on the home screen.
![screenshot_2024-07-04_at_13 21 36](https://github.com/CHughes13/CI-Hackathon-2-Hack-and-Cheese/assets/82895994/1d3ed57a-99df-49cd-b155-38a76f05dfd3)

- __Multiple Choice Answer Buttons__
  - When the user is presented with a question they are provided with four multiple choice buttons to choose from. When the user hovers their mouse cursor over the answer, the button changes to a lighter colour. When an answer is selected, it will either: turn green if it is correct, or it will turn red if it is incorrect and the button displaying the correct answer will turn green.
![screenshot_2024-07-04_at_13 20 54_720](https://github.com/CHughes13/CI-Hackathon-2-Hack-and-Cheese/assets/82895994/0eda82ea-44fb-4d64-998d-3a12d6fe61ec)

- __Home Button__ 
  - This button will allow the user to easily navigate back to the home screen and replay the quiz.

- __Score Tracker__ 
  - This scoreboard keeps track of the users correct answers, incorrect answers, and their best streak (number of questions they have answered correctly in a row). Tracks and displays scores dynamically, with visual feedback on answers.
 
- __Result Screen Message__ 
  - Personal message based on the score you get.
![screenshot_2024-07-04_at_13 22 40_360](https://github.com/CHughes13/CI-Hackathon-2-Hack-and-Cheese/assets/82895994/d0847c74-6fa0-4530-a5fc-58124b0985ac)

- __Responsive Design__ 
  - Responsive design for compatibility with various devices and screen sizes, from mobile to desktop.
![screenshot_2024-07-04_132148_720](https://github.com/CHughes13/CI-Hackathon-2-Hack-and-Cheese/assets/82895994/f1bce015-c6bb-4873-9527-5ce40feca079)

- __Footer__ 
  - Footer section includes links to the relevant social media sites for Cheesy Choices. To allow for easy navigation, the links open in a new tab.
  - Copyright line includes year of publication and team name. This allows users to see how up to date the information on the web application is.
  - Features at the bottom of the page throughout (and has a matching colour theme with other elements on the site), this lets the user know they're still on the same webpage.
  - The footer is important as it encourages the user to interact and stay connected with Cheesy Choices on other social media platforms.
![Screenshot 2024-07-04 132836](https://github.com/CHughes13/CI-Hackathon-2-Hack-and-Cheese/assets/82895994/64b519bc-a391-43fc-8dbd-5656333bf441)


### Features Left to Implement
- __Difficulty Settings__ 
  - To give users the choice of quiz difficulty to make the quiz more fun and challenging (this would add replay value). To make the quiz easier, the user could start with 3 answers to choose from instead of 4. Introducing a 50/50 lifeline option that could be used once – this would grey out half of the answers, leaving 1 correct and 1 incorrect.

- __Get More Questions Using an API__ 
  - Currently the quiz has the questions hardcoded into it. To provide a wider variety of questions it would be good to find a suitable quiz/question API, such as [Open Trivia Database](https://opentdb.com/)

- __More Categories__ 
  - Currently the quiz is focused on general knowledge. Branching out to other specific categories adds more entertainment for the user. For example, a dedicated geography-based quiz or one focused on literature.

- __Image with Questions__ 
  - Adding an image underneath each question to create a more appealing and attention-grabbing. Image will relate to the question so the user will be able to easily identify what the theme is and what the question is about.

- __Image on Results Screen__ 
  - Adding an image on the Results Screen alongside the personalised message will add a more polished look.

- __High Score Table__ 
  - A table which would display the user's name and score. This would encourage the user to keep playing to gain a new personal best. The user could also challenge their friends and compete against them for the best high score.


## Testing and Debugging

### Validator Testing

- HTML
  - Passed through the official W3C validator:
  ![screenshot_2024-07-04_at_13 13 55_720](https://github.com/CHughes13/CI-Hackathon-2-Hack-and-Cheese/assets/82895994/e2202700-ee23-481d-92ea-9375cf842ddd)

- CSS
  - Passed through the Jigsaw validator successfully:
  ![screenshot_2024-07-04_131444_720](https://github.com/CHughes13/CI-Hackathon-2-Hack-and-Cheese/assets/82895994/99bbee67-aa6d-464d-8a0c-890201499550)

- JavaScript
  - Passed through online JavaScript Validator:
![screenshot_2024-07-04_131623_720](https://github.com/CHughes13/CI-Hackathon-2-Hack-and-Cheese/assets/82895994/a0d41777-c972-47da-9f2d-7e9d35609cc9)

- Website Optimization
  - Still need to pass through [Google Lighthouse](TBA)

### Bugs Fixed
- __Background Image Missing from Deployed Version__ 
  - **Issue:** While the background image appeared during checks on the IDE, when the website was deployed the background was a grey box instead.
  - **Fix:** Suspected it was a filepath issue. Checked the code. There was indeed a sneaky / at the front of the path. Removed this and background image appeared on deployed version.
 
![screenshot_2024-07-03_at_14 37 34_720](https://github.com/CHughes13/CI-Hackathon-2-Hack-and-Cheese/assets/82895994/42fe2091-ea66-4e76-bfae-6602d157469c)



- __Scoreboard Counter Registering All Mouse Clicks__ 
  - **Issue:** When excessively clicking on the quiz answers multiple times, the Correct/Incorrect counters would increment by the total number of clicks on that button, rather than just once. This also allowed multiple buttons to be selected if they were clicked fast enough and would then change colour.
  - **Fix?** We did this.
  
 ![screenshot_2024-07-03_192242_720](https://github.com/CHughes13/CI-Hackathon-2-Hack-and-Cheese/assets/82895994/e3462be3-95cd-4567-a04a-f2adb1b037b4)

- __Start Quiz Button Not Working__ 
  - **Issue:** When the Start Quiz button was clicked instead of the quiz screen appearing, the home screen remained.
  - **Fix:** Console.log the function make sure that the "click" button was actually firing. Tested this in Chrome Dev Tools using Console. It was firing.


### Unfixed Bugs

- __Footer Overlapping Content__ 
  - **Issue:** The Footer would overlap the content on the page. This resulted in the Home Button and Scoreboard being hidden underneath the Footer (particularly on mobile screen size).
  - **How would we fix it?:** Use Chrone Dev Tools to play around with padding/margin/positioning to find out why the Footer is behaving this way.
    
 ![screenshot_2024-07-03_173006_720](https://github.com/CHughes13/CI-Hackathon-2-Hack-and-Cheese/assets/82895994/0a609fa3-5a1d-46f5-add2-7b11dba47dfc)


## Setup and Running the Application

1. Clone the repository to your local machine or download the HTML, CSS, and JavaScript files.
2. Open the HTML file in a web browser to start the application.
3. Enter your name, opt for a timed challenge if desired, and click 'Start Quiz' to begin.
4. Answer the questions by clicking on one of the choices.
5. View your score, correct answers, incorrect answers, and best streak at any time during the session.


## Credits
__Resouces Used and Consulted:__ 
- [ChatGPT](https://openai.com/chatgpt/) used throughout for coding advice and inspiration. Also used to generate the questions for the quiz.
- [Font Awesome](https://fontawesome.com/) for the social media icons in footer.
- [Favicon.io](https://favicon.io/) - online favicon generator used to draw favicon.
- Angela Yu's [The Complete 2024 Web Development Bootcamp course on Udemy](https://www.udemy.com/course/the-complete-web-development-bootcamp) - reviewed videos to brush up on if/else statements to help write results screen personal message.
- [Stack Overflow](https://stackoverflow.com/) for troubleshooting and understanding coding concepts.
- Background image from Freepik.com.

__Inspiration Drawn From:__ 
- [Britannica Games & Quizzes](https://www.britannica.com/quiz/browse)
- WWF quizzes - [How David Attenborough are you?](https://www.wwf.org.uk/how-david-attenborough-are-you) 
- BuzzFeed quizzes - [https://www.buzzfeed.com/hanifahrahman/disney-dog-quiz]

__Special Thanks To:__ 
- [Spencer Barriball](https://github.com/5pence/demodemo/blob/main/assets/js/script.js)
- Code Institute's Subject Matter Expert Kevin
- Code Institute's Coding Coach Martin
- Code Institute's Coding Bootcamp Tutor Lewis
- Christopher Hughes
- Sebastian Hughes
