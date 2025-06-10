# Testing

> [!NOTE]
> Return back to the [README.md](README.md) file.

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| Home | [index.html](https://nashnusu.github.io/travel-website/index.html)|![screenshot](/assets/images/homeval.png| 
| Plan Your Trip | [planyourtrip.html](https://nashnusu.github.io/travel-website/planyourtrip.html) |![screenshot](/assets/images/planval.png) |
| Quiz | [quiz.html](https://nashnusu.github.io/travel-website/quiz.html) |![screenshot](/assets/images/quizval.png)| 


### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets | [index.css]( https://nashnusu.github.io/travel-website/assets/css/index.css) |![screenshot](/assets/images/cssval.png) | 


### JavaScript
I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| Directory | File | URL | Screenshot |
| --- | --- | --- | --- | --- |
| assets | [quiz.js](https://github.com/nashnusu/travel-website/blob/main/assets/js/quiz.js)| ![screenshot](/assets/images/quizj.png) | 
| assets | [script.js](https://github.com/nashnusu/travel-website/blob/main/assets/js/script.js) |![screenshot](/assets/images/scriptj.png) | 

## Responsiveness

I've tested my deployed project to check for responsiveness issues.

| Page | Mobile | Tablet | Desktop | Notes |
| --- | --- | --- | --- | --- |
| Home | ![screenshot](/assets/images/homemob.png) | ![screenshot](/assets/images/hometab.png) | ![screenshot](/assets/images/homedesk.png) | Works as expected |
| Quiz | ![screenshot](/assets/images/quizmob.png) | ![screenshot](/assets/images/quiztab.png) | ![screenshot](/assets/images/quizdesk.png) | Works as expected |
| Plan Your Trip| ![screenshot](/assets/images/planmob.png) | ![screenshot](/assets/images/plantab.png) | ![screenshot](/assets/images/plandesk.png) | Works as expected |

## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Page | Chrome | Firefox | Safari | Notes |
| --- | --- | --- | --- | --- |
| Home | ![screenshot](/assets/images/homedesk.png) | ![screenshot](/assets/images/hmoz.png) | ![screenshot](/assets/images/hsafa.png) | Works as expected |
| quiz | ![screenshot](/assets/images/quizdesk.png) | ![screenshot](/assets/images/qmoz.png) | ![screenshot](/assets/images/qsafa.png) | Works as expected |
| plan| ![screenshot](/assets/images/plandesk.png) | ![screenshot](/assets/images/pmoz.png) | ![screenshot](/assets/images/psafa.png) | Works as expected |

## Lighthouse Audit

| Page | Mobile | Desktop |
| --- | --- | --- |
| Home | ![screenshot](/assets/images/lighthome.png) | ![screenshot](/assets/images/lighthomedesk.png |
| Quiz | ![screenshot](/assets/images/lightquiz.png) | ![screenshot](/assets/images/lightquizdesk.png) |
| Plan Your Trip | ![screenshot](/assets/images/lightplan.png) | ![screenshot](/assets/images/lightpladesk.png) |

## Defensive Programming


Defensive programming was manually tested with the below user acceptance testing:

| Page/Feature | Expectation | Test | Result | Screenshot |
| --- | --- | --- | --- | --- |
| Navigation bar | Expected to work consistently on all pages and device sizes. |Clicked all links across devices (desktop, tablet, mobile).  |Navigation was consistent and functional. | ![screenshot](/assets/images/homedesk.png|![screenshot](/assets/images/quizdesk.png)|
| Responsive layout| Content should adapt correctly to screen size. |Resized browser and tested on phone and tablet. | Layout adjusted smoothly without overlapping elements. | ![screenshot](/assets/images/homemob.png)|

## User Story Testing

| Target | Expectation | Outcome | Screenshot |
| --- | --- | --- | --- |
| As a user | I would like to clearly navigate between all pages | so that I can easily access different sections of the site from anywhere. | ![screenshot](/assets/images/h) |
| As a user | I would like to view featured projects with descriptions | so that I can assess the type and quality of work the developer produces. | ![screenshot](/assets/images/feature.png) |
| As a user | I would like to see an education section | so that I can understand the academic qualifications of the developer. | ![screenshot](/assets/images/edudesk.png) |
| As a user | I would like to contact the developer easily | so that I can reach out for collaboration, questions, or feedback. | ![screenshot](/assets/images/get.png) |
| As a user | I would like external links to open in a new tab | so that I can explore them without losing my place on the site. | ![screenshot](/assets/images/githublink.png) |
| As a user | I would like the website to be responsive | so that I can browse it comfortably on any device. | ![screenshot](/assets/images/Homemobile.png) |![screenshot](/assets/images/Hometablet.png) |

## Bugs

-Navigation menu collapsed improperly on mobile devices
How it was found: Observed overlapping and misaligned menu during mobile viewport testing
Fix: Applied media queries and adjusted flex properties for header layout
Status: ✅ Fixed

-Hero image stretched or cropped on smaller screens
How it was found: Visual distortion during responsiveness checks in browser dev tools
Fix: Used object-fit and responsive width/height settings in CSS
Status: ✅ Fixed

-Section anchor links didn't scroll smoothly
How it was found: Clicked navigation links and noticed abrupt jumps
Fix: Implemented smooth scrolling behavior using scroll-behavior: smooth;
Status: ✅ Fixed

-Footer content stacked unevenly on tablets
How it was found: Manual testing in 768px viewport
Fix: Adjusted grid layout and padding for consistent alignment
Status: ✅ Fixed

-Gallery images loaded slowly on first visit
How it was found: Perceived lag while browsing the gallery section
Fix: Compressed images and added loading="lazy" attribute to <img> tags
Status: ✅ Fixed

### Known Issues
-Known Issue: None
Description: No known issues at the moment.
Possible Solution: N/A
Status: ✅ None
> [!IMPORTANT]
> There are no remaining bugs that I am aware of, though, even after thorough testing, I cannot rule out the possibility.

