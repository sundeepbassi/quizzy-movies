



# Quizzy  Movies

Quizzy Movies incorparates the functionality of Javascript and shows how it can be used in a quiz game for movie lovers. Quizzy movies targets people who have an interest in the use of javascript and enjoy playing quiz movies. Quizzy Movies is a fully responsive Javascript quiz game that will allow users to select answers to specific questions.  The game aims to be both fun and challenging. The game was also designed to assist those with accessibilty needs.

## 1. Purpose of the Project

- Design a website for people to do a quiz on movies.

### External user’s goal:

- The site’s users want to play an online quiz to test specific knowledge about movies.

### Site owner’s goal: 

- The goal of the site is to provide a challenging quiz to entertain online users,



## 2. User Stories

1) As a user I want to submit my name.

2) As a user I want to play a quiz game about movies.

3) As a user I want to know which questions I got correct and those that I got incorrect.

4) As a user I want to be able to restart the game at the end.


## 3. Features

### Navigation 

- The navigation for this site is very simple and easy to use:

- The user uses a series of buttons to navigate in the quiz game.

- An Input name box. This is where the user can input their name.

- A submit button for the user to use after inputting their name. Then the user is welcomed with a friendly message.

- A start the quiz button, for the user to start the quiz game.

- A next button this is placed at the bottom of the quiz game container box and it enables the user to go to the next game. 

- A restart button at the end of the game, is displayed at the botttom of the quiz container and the user can then restart 
  the game.

- These button functions enable the user to remain focused on the quiz. The aim is to enable the user to click once for 
  each action so as to keep the user engaged with the quiz game. 

- In my research into good user experience design I looked at the 3 click rule and the 1 click rule. 

- There is further information in the credits about this. I stuck to the 1 click rule because as it is a quiz game I want 
  the user to feel in control with clicking once and not getting frustrated.

- It will also bring the user closer to their destination as stated in the article in the credits section and in the link below.

  - [UX Design World](https://uxdworld.com/2020/01/28/3-click-rule-and-usability/)

### Heading

- A fun welcome for the user.

### Input Box

- User to put in their name.

### Submit button

- The user presses this after the user inputs their name.

### Start The Quiz Game Button

- The user can press this button to start the quiz game.

### Main Quiz Game

- On this page the user can play the quiz game. 

- The main container box area is used to incorporate both the questions and answers.

- The questions are at the top of the container box.

- There are 4 answers in the four blue buttons and the user can click one of the buttons to reveal the answer.

- The correct answer will appear in a green button box and the incorrect answers will appear in a red button box.

- There is a next button located at the bottom of the box and this will take the user to a new game box.

- At the end of the game there is a restart button that the user can click to play the game again.



## 4. Future Features

- Possibility of creating a log in form for potential users with a password access.

## 5. Typography and Colour Scheme

- Checked up on what font is used at the movies and trajan  was the top one developed by Adobe.  However I decided not to use this style. I used Gotham Rounded.

### Colour Scheme

- I used the colour chart below to check the contrast between the colours for users with visibility needs.

- The black font on the white background worked good for visibility.

- The white font on the blue background worked good for visibility.

- The white font on the red background worked good for visibility.

- However the white font on the green background was not good for visibility.  

- The green box I am using is for the correct answers in the quiz.

- I ran a lighthouse test on google dev tools and it was 83 for accessibility so I decided to change the font colour to black and it went up to 87 for accessibility.

- During mentor meeting we discussed the change of font colour to white, when I used white again the lighthouse check stated that there was not enough contrast with the background and forefront colours. 

- I reswitched back to black and the lighthouse check did not repoert any problems with the background and forefront colours.

- I did change the red background in the incorrect box to a hue of 24 as my mentor suggested that the red and black did not mix very well.  This new hue of 24 made it look better.

  - [Colour Chart](assets/screenshots/colour-chart.png)

### Background Colour

- The back ground colour for the whole site has been kept using a hue of hsl(var(--hue), 100%, 94%) and it is a light blue that changes to a light pink when there is an incorrect answer function happening. 

### Font colour

- For the headings one and two and the questions the font is black.

- For the answers the font colour is black set against a blue background.  The black font is also used with the background colours green and red for the correct and incorrect answers.

## 6. Wireframes

The wireframes were done during the planning phase and assisted with the layout desired for the site.   Since then I have made alterations.

  - [Wireframe 1](assets/wireframes/wire-1.png)


  - [Wireframe 2](assets/wireframes/wire-2.png)


  - [Wireframe 3](assets/wireframes/wire-3.png)


  - [Wireframe 4](assets/wireframes/wire-4.png)



## 7. Technology

  - Html

  - Cascading Style Sheets

  - Javascript

  - Google Dev Tools

  - Github

  - Gitpod

  - W3C Mark Up Validation Service

  - [W3C HTML Validator](https://validator.w3.org/)

  - [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

  - [JSHINT Javascript Validator](https://jshint.com/)

## 8. Testing

  ## 8.1 Code validation
  
  - The HTML validator check passed successfully as shown in the screenshot below.


    - [HTML Passed](assets/screenshots/html-pass2.jpg)  Screenshot taken on the 21 September 2021.

    
  - The CSS validator check passed successfully as shown in the screenshot below.


    - [CSS Passed](assets/screenshots/css-pass2.jpg)  Screenshot taken on the 21 September 2021.


  - The Javascript validator reported  that there was one unused variable 31 greeting.  I showed my mentor and we checked both
  the HTML and the script file and my mentor explained that this warning can be ignored because greeting has been defined in the HTML file as a function. My mentor told me to write this in the readme.


- Metrics
- There are 12 functions in this file.

- Function with the largest signature take 2 arguments, while the median is 0.5.

- Largest function has 8 statements in it, while the median is 2.5.

- The most complex function has a cyclomatic complexity value of 2 while the median is 1.

    - [JSHint](assets/screenshots/javascript-valid.jpg)  Screenshot taken on the 21 September 2021.

I did a lighthouse test on google dev tools and I got 87 in my accessibility. I contacted the tutors for support and they forwarded me a link. The tutors also said that the test was not mandatory for the project, however I did want to make the site more accessible for people with specific needs.  I did not understand the link that was sent to me and if I had more time I would look into it further.

[Lighthouse Test](assets/screenshots/lighthouse.png)

[MDN Web Docs for aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)

 ##  8.2 Test cases (user story based with screenshots)

 1) As a user I want to submit my name.

  -  The screenshot below shows that a user can submit their name into an input box.
   
  - [Submit Name](assets/screenshots/submit-name.jpg)

  - The screenshot below shows the welcome and greeting the user gets with the name that they have submitted.

  - [Greeting to User](assets/screenshots/karmarpa8889.jpg)

2) As a user I want to play a quiz game about movies.

  - The screenshot below shows the quiz game that the user can play on. There is a question and 4 answers.

  - [A Movie Quiz Game](assets/screenshots/quiz-movie.jpg)

3) As a user I want to know which questions I got correct and those that I got incorrect.

  - The screenshot below shows the correct answer in green and the wrong answers in red.

  - [Correct and Incorrect Answers](assets/screenshots/answers.jpg)

4) As a user I want to be able to restart the game at the end.


  - The screenshot below, shows at the bottom of the container, that there is a restart button to begin the game again.

  - [Restart Button](assets/screenshots/restart.jpg)




  ## 8.3 Fixed bugs

  - On the 9th of September, I spoke to my mentor about the layout of the site and how I had to set up the quiz pages as separate files with separate script files with the answers. 
  
  - I explained that I had tried to use the code in one script but it caused a fault.  I had to find a solution and found that creating separate files helped to resolve the problem.  

  - My mentor advised me to contact the tutors to consider if I could use a loop in the code so that it was not being repeated.  

  - I checked tutorials on youtube regarding arrays and loops.

  - I spoke to my mentor on the 14th of September and explained how I had tried to create a new project as I could understand how dry repetitive code in many files was not productive.  
  
  - I explained that I had put a lot of effort into redisgning my project.   
  
  - During my mid term review with my mentor, I explained that I was still not happy with my project and that I would would need to go back to the drawing board and simplify the project. however I had learnt a lot through the process.

  - Checked on w3c Markup Validation service and 2 errors were reported in no closing div tag on line 13. This was rectified and another validation test was conducted and there were no errors or warnings.

  - Checked on the W3C CSS validation service and I had to rectify 1 error.  The test was repeated and it passed successfully.

  - Whilst doing a validator check on Jshint for the script file there were 15 warnings reported back. 
  
  - Whilst watching a tutorial from Tiff in Tech, she suggested to check on google when faults are reported in JSHint. 
  
  - I followed the advice and copied the fault appearing in Jshint that was const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). 
  
  - When I googled this warning there was a response in stack overflow to put this at the top of a script file /*jshint esversion: 6 */.

  - I did this and 14 warnings were removed off JSHint.

  - There was only 1 warning left in jshint A leading decimal point can be confused with a dot: '.5'. and when I googled it I got a response from JSHint error explanations which was to place /*jshint -W008 */ in the top of the script file.

  - When I resubmitted the validation check for the script file in JShint it came back with no errors or warnings.

  - On the 21st of September whilst going through the website with my mentor we noticed that the headerText and the greetingInput were being displayed even if the user had not entered a name into the input box.

  - This caused an overlap that did not look good.

  - I resolved the problem by putting headerText.style.display = "none"; greetingInput.style.display = "none"; into the function startGame().

  - Now if the user starts the game without inputting a username the headerText and greetingInput are not displayed. 

## 8.4 Supported Screens and Browsers

- This is what the first page looks like when it is reduced down to 770.40px screensize.

    - [A view of first page at 770.40px](assets/screenshots/browser-770.jpg)

- Below 767px the view of the first page will only display the start the quiz button.  I gave the ID's intro and  greetingInput a display: none;.  As these ID's were distorting the page in the lower screen sizes.

    - [A view of first page at a smaller screensize](assets/screenshots/screensize-smaller.jpg)

- A view of the quiz game at screensize 788px.

    - [A view of the quiz game at 788px](assets/screenshots/screensize-788.jpg)

- Below 767px the view of the quiz game will only display the quiz container.  I gave the ID's intro and  greetingInput a display: none;.  As these ID's were distorting the page in the lower screen sizes.


    - [A view of the quiz game at 767.px](assets/screenshots/screensize-767.jpg)

- A view of the quiz game with correct and incorrect answers in the full screen.

    - [A view of the quiz game with answers on full screen](assets/screenshots/quiz-answers.jpg)

- I had to add a @media screen and (max-width:982px) so that the intro and greetingInput would not distort the quiz container box with answers.    Below 982px the view of the quiz game with the answers will only display the quiz container.  I gave the ID's intro and  greetingInput a display: none;.  As these ID's were distorting the page in the lower screen sizes.


    - [A view of the quiz game with answers below 982px](assets/screenshots/answers-small.jpg) 



- The site was checked on various devices on the Google Developer tools and they appeared to be working good.  I have put some of them below for viewing.

- A view of the quiz game on Galaxy S5

    - [A view of the quiz game on a Galaxy S](assets/screenshots/galaxy.jpg) 

- A view of the quiz on Iphone 6 7 8 plus.

    - [A view of the quiz game on an Iphone 6 7 8 plus](assets/screenshots/iphone678.png) 

- A view of the quiz on a Galaxy Fold.

    - [A view of the quiz game on a Galaxy Fold](assets/screenshots/galaxy-fold.png) 

- A view of the quiz on an ipad pro.

    - [A view of the quiz game on an ipad pro](assets/screenshots/ipad-pro.png) 





## 9. Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:
In the GitHub repository, navigate to the Settings tab
From the source section drop-down menu, select the Master Branch
Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here 

## 10. Credits

1) To set up the filing system, implement the boiler plate and the intial commit are accredited to the love maths video from the Code Institute.

2) The initial readme template was set up in Google docs and the layout for the template was shared on the slack community by fellow students.  For this project I did my research and added it to the google docs template both for planning and adding relevant information for the project. This was then installed into the git readme.

3) The intro, headerText, greetingInput, userName, submit and greeting are accredited to Keith Paterson Make a simple quiz webpage using HTML JS.

  - [Keith Paterson](https://www.youtube.com/watch?v=79WRPIknVHs&t=72s)

4) Intro and greetingInput styles code are accredited to Keith Peterson Make a simple quiz webpage, 
it was also checked on MDN Web Docs for font size and CSS Tricks for positioning.

  - [Keith Paterson](https://www.youtube.com/watch?v=79WRPIknVHs&t=72s)

5) The 3 let statements in the script file are accredited to Keith Paterson Make a simple quiz webpage.

  - [Keith Paterson](https://www.youtube.com/watch?v=79WRPIknVHs&t=72s)

6) The function greeting and the greetingInput are accredited to Keith Paterson Make a simple quiz webpage.

  - [Keith Paterson](https://www.youtube.com/watch?v=79WRPIknVHs&t=72s)

7) Setting up questions,answers container,buttons and score for the quiz code in the HTML file are accredited to Web Dev Simplified

  - [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k) 

8) Setting up the style in the css style sheet for the quiz code accredited to Web Dev Simplified and I made adjustments for how to display the quiz.

- The following code in the style css is accredited Web Dev Simplified:

- I added the h1 and h2 and set the styling myself with also checked on google on how to position them.

- I adjusted the Hue colours as I did not want a dark background as I felt it made it look too closed in.

- I adjusted the btn-grid and grid-template to rows as I wanted the answer buttons to stack on top of each other so that it 
enabled the user to have better control.

- /* Setting up the styling for the quiz code accredited to Web Dev Simplified, I added my own styling also*/

  - *, *::before, *::after {
    box-sizing: border-box;
    font-family: Gotham Rounded;
    }, :root, body, body. correct, body.wrong, h1, h2, container, question, btn-grid, btn, btn:hover, btn.correct, btn.wrong,--
    start-btn, next-btn, btn, controls and hide.

  - [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k) 

9) Adjustments to colours checked on MDN Web Docs.

  - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)


10) Adjustments to font weight and font size was checked on MDN Web Docs.

  - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)

11) For positioning elements.

  - [CSS Tricks](https://css-tricks.com/almanac/properties/p/position/)

12) To Set up the media queries to work on all devices and the  Code is accredited to to Merkim dev tutorials. These included
the @media screen and (max-width:1024px), @media screen and (max-width:768px) and @media screen and (max-width:480px).

However I had to adjust the specific elements responsiveness for them myself.

  - [Merkim dev tutorials](https://www.youtube.com/watch?v=OLJOEYQfv2U)


13) Setting up the script file  for the quiz code is accredited to Web Dev Simplified

  - [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k) 

14) Implementation of const startButton, const nextButton, const questionContainerElement, const questionElement and 
const answerButtonsElement is accredited to  Web Dev Simplified.

  - [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k) 


15} Implementation of startButton.addEventListener, function startGame() and function setNextQuestion are accredited to accredited to  Web Dev Simplified.

  - [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k0) 

16) Implementation of function showQuestion(question), function resetState() and function selectAnswer(e) are accredited to accredited to  Web Dev Simplified.

  - [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k)

17) Implementation of function setstatusclass, function clearstatusclass and const questions = are accredited to accredited to  Web Dev Simplified.

  - [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k) 

18) To check warnings in JShint I used the following resources:

a) Youtube tutorials

LearningHowToCode TiffInTech

  - [TiffinTech](https://www.youtube.com/watch?v=5j_v9DldKhU)

Web Dev Simplified

  - [Web Dev Simplified](https://www.youtube.com/watch?v=vP2MNhC_Igw)


b) google

c) JS lint error explanations

  - [JS lint error explanations](http://linterrors.com/js/a-leading-decimal-point-can-be-confused-with-a-dot-a)

d) Stack Overflow

  - [Stack Overfow](https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const)

19) To add Height and width to the input box was checked on w3Schools.

  - [w3schools](https://www.w3schools.com/css/css_form.asp)

20) For the readme I also give accreditation to my mentor for advising me on how to make it more presentable and to the love maths readme document from the Code Institute.

### Content

A good article below from UX Design World about the 3 click and 1 click rule.

  - [UX Design World](https://uxdworld.com/2020/01/28/3-click-rule-and-usability/)


The questions and answers for the quiz are accredited to the Readers Digest 100 Movie Trivia Questions and Answers All Movie Lovers Should Know and kidadl movie questions.

Readers Digest

  - [Readers Digest](https://www.rd.com/article/movie-trivia-facts/)

also I used Kidadl

  - [Kidadl](https://kidadl.com/articles/easy-movie-trivia-questions-and-answers-for-family-movie-night)



### Media


The credits below were used in my first two projects however after setting up my third project I did not use the code from these resources in my up to date project.  I have left these credits in below both for educational and reference purposes.

The layout for setting up the question, answers, container, buttons and score in the index.html is accredited to Merkim dev tutorials

Quiz app tutorial with html css and javascript

  - [Merkim dev tutorials](https://www.youtube.com/watch?v=OLJOEYQfv2U) 

The styling of elements in the style.css file is accredited to Merkim dev 
Quiz app tutorial with html css and javascript

  - [Merkim dev tutorials](https://www.youtube.com/watch?v=OLJOEYQfv2U)


The setting up of code in the script file is accredited to Merkim dev 
Quiz app tutorial with html css and javascript

  - [Merkim dev tutorials](https://www.youtube.com/watch?v=OLJOEYQfv2U)

The setting up of the array of questions and answers is accredited to Merkim dev 
Quiz app tutorial with html css and javascript

  - [Merkim dev tutorials](https://www.youtube.com/watch?v=OLJOEYQfv2U)

The layout for setting up the questions in the index.Html is accredited to Kevin Briggs Javascript tutorial: make a quiz

  - [Merkim dev tutorials](https://www.youtube.com/watch?v=C7NsIRhoWuE)
 
The Javascript code for creating the variable question is accredited to Kevin Briggs Javascript tutorial: make a quiz

I set the variable var to let as let is used more often as shown in the LMS of Code Institute.

  - [Kevin Briggs](https://www.youtube.com/watch?v=C7NsIRhoWuE)

The Javascript code for creating the variable for messages and if variable score is accredited to Kevin Briggs Javascript tutorial: make a quiz

  - [Kevin Briggs](https://www.youtube.com/watch?v=C7NsIRhoWuE)

The CSS code for creating the style for the quiz is accredited to Kevin Briggs Javascript tutorial: make a quiz

  - [Kevin Briggs](https://www.youtube.com/watch?v=C7NsIRhoWuE)

To add the previous and next buttons is accredited to the W3Schools 

  - [W3Schools](https://www.w3schools.com/howto/howto_css_next_prev.asp)

and to Oston Code Cypher

  - [Oston Code Cypher](https://www.youtube.com/watch?v=4BBWQzfgaio)

The setting up of the hero image code is accredited to the love running video fromn the code institute and it was also placed in my first portfolio project The Wellbeing Retreat.

The code for using css to style the hero image is accredited to the love running video from the code institute and it was also placed in my first portolio project The Wellbeing retreat.

The hero image is accredited to iStock.

  - [iStock](https://www.istockphoto.com/search/2/image?phrase=cinema)

Setting up the logo and Navbar code is accredited to Responsive Navigation Bar Tutorial | HTML CSS JAVASCRIPT by DEV ED 

  - [DEV ED](https://www.youtube.com/watch?v=gXkqy0b4M5g)

Setting up the burger bar and media queries code is accredited to Responsive Navigation Bar Tutorial | HTML CSS JAVASCRIPT by DEV ED 

  - [DEV ED](https://www.youtube.com/watch?v=gXkqy0b4M5g)


Setting up the toggle bar  and animate links code is accredited to Responsive Navigation Bar Tutorial | HTML CSS JAVASCRIPT by DEV ED 

  - [DEV ED](https://www.youtube.com/watch?v=gXkqy0b4M5g)


The footer code for the html is accredited to the love running video from the Code Institute.

The footer code for the css is accredited to the love running video from the Code Institute.

The hero image is accredited to iStock.

  - [iStock](https://www.istockphoto.com/search/2/image?phrase=cinema)

Tutorial on how to use wireframes and how to design a user input form at buttom of that page, it would be useful for when designing the quiz website.

  - [Balsamique](https://balsamiq.com/learn/)

  - [Kevin Briggs](https://www.youtube.com/watch?v=C7NsIRhoWuE)  Movie quiz by Kevin Briggs

Information about Typography

  - [Shape](https://madebyshape.co.uk/web-design-blog/heres-why-typography-is-so-important-for-your-website/)

  - [Hipfonts](https://hipfonts.com/poster-fonts/)

Oscar Winning Font

  - [Type Network](https://www.typenetwork.com/news/article/yves-peters-demystifies-the-secret-language-of-movie-posters-at-adobe-max-2)


  - [Vox](https://www.youtube.com/watch?v=yI4shGV1EsM)

Trajan™

Website and projects worth looking at:

  - [Lasserini](https://github.com/Lasserini/stine-poulsen-psykoterapeut)

This specific website is entirely designed for educational purposes only. Reword it as education project

Build a quiz

  - [James Q Quick](https://www.youtube.com/watch?v=u98ROZjBWy8)

Audrey fullstack 4 project

  - [Audrey](https://github.com/AudreyLL88/cw-store)

  - [Just Abby](https://github.com/thaysom22/justAbbyH/blob/master/README.md)


Creating a multiple fill in the blank quiz using html, javascript, and css

  - [Muhanad Hasan](https://www.youtube.com/watch?v=1SxMWhqYQ4k)


Link below useful for creating buttons in css and next button for the project
Making a true or false quiz using html, javascript, and css

  - [Muhanad Hasan](https://www.youtube.com/watch?v=QfPUAwyg3Yo)


Learn JavaScript By Building a Simple Quiz - Part 5


  - [Eduonix Learning Solutions](https://www.youtube.com/watch?v=1ARSZup4eog)


Develop a Quiz App with Javascript - Object Oriented Programming

  - [Awaiz Mirza](https://www.youtube.com/watch?v=jvk1pFNqXaw&t=386s)

JavaScript Interview Questions & Answers

  - [Javascript Interview Questions](https://github.com/sudheerj/javascript-interview-questions#what-are-the-possible-ways-to-create-objects-in-javascript)


JavaScript Quiz

[Johnathon McCarthy](https://www.youtube.com/watch?v=6aLXfmbmJco)

Building a Multiple Choice Quiz | Javascript | Tutorial 24

[Mike Dane](https://www.youtube.com/watch?v=LQGTb112N_c)

[Simple Steps Code](https://simplestepscode.com/javascript-quiz-tutorial/)


### Disclaimer

This website and content has been created for educational purposes only.  All information, code and external resources have been accredited in the readme for purposes of comment, research and scholarship.

[UK Copyright Service](https://copyrightservice.co.uk/_f/7616/1882/9839/edupack.pdf)


[UK Copyright Service](https://www.rd.cohttps://copyrightservice.co.uk/_f/7616/1882/9839/edupack.pdfm/article/movie-trivia-facts/)


### Acknowledgements

 I would like to thank my mentor Excellence Ilesanmi for pushing me to do my best and to do it with excellence. Excellence has challenged me to really think about the project in detail and how the mechanisms and functions all fit and work together. Through Excellences wisdom and insights, I have been able to better understand the interactivity of incorparating Javascript into the project. I am very grateful for having a brilliant mentor that empowers me to think more constructively and to use my skills more effectively.

 I would like to thank the assessor that assessed my first portfolio project The Wellbeing Retreat for giving me excellent feedback and this enabled me to reflect on how I performed with the first project.  I found the comments really helped me to look at how I developed that project and where I could make improvements. 

I would like to thank student care and the slack community at the code institue for their ongoing support. Alex, Kieron and Aoife have been very supportive from student care and sent me videos to help me. They have been very positive and encouraged me to do my best.

I would like to thank my dog Mitzy who stayed by my side during the project, she sits with me and keeps me calm and we carry on coding. 

Thank you to Holly, my dearest and bestest friend who has fed me, cared for me and been a good support during this project.


























