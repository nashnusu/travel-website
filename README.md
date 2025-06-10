# [travel-website](https://nashnusu.github.io/travel-website)

Developer: Nash Sharmilli ([nashnusu](https://www.github.com/nashnusu))

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/nashnusu/travel-website)](https://www.github.com/nashnusu/travel-website/commits/main)
[![GitHub last commit](https://img.shields.io/github/last-commit/nashnusu/travel-website)](https://www.github.com/nashnusu/travel-website/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/nashnusu/travel-website)](https://www.github.com/nashnusu/travel-website)


## UX

### The 5 Planes of UX

#### 1. Strategy

**Purpose**
- Provide users with a simple and accessible way to decide their neext travel destination.
- Deliver instant feedback with the Quiz.
- Support accessibility and user-friendly interactions.

**Primary User Needs**
- Get information about famous destinations .
- Get suggestions to on how to prepare for a trip.

**Business Goals**
- Encourage users to engage with the website to decided what might be their next destination.

#### 2. Scope
 
 **[Features](#features)** (see below)
 -Responsive navigation bar
 -Sectioned content (About, Quiz, Plan your trip)

**Content Requirements**
- Clear labels and instructions for navigation.
- Overviews of different famous destinations.
- Instant suggestion of a location through a Quiz.

#### 3. Structure

**Information Architecture**
-Navigation Menu: Fixed navbar linking to all major sections
-Hierarchy: Headings and sections organized for scannability
-Accessibility: Clear color contrast and alt text for images

**User Flow**
1. User lands on the home page → reads brief instructions.
2. Navigates to Quiz → does the Quiz to get suggestions.
3. views plan your trip to get suggestions about how to prepare for a trip.

#### 4. Skeleton
The site has three main sections: Home, Quiz and Plan your trip.
Navigation: Links to all sections.
User Flow: Explore Home, Quiz and Plan your trip.

#### 5. Surface

**Visual Design Elements**
-Colours: light tones like coral ( #f08080) and white (#ffffff) create a calm, professional atmosphere.
-Typography: Clean sans-serif fonts like Arial ensure readability and a modern look.
-Visual Balance: Ample whitespace and selective use of icons and images maintain a balanced, visually appealing layout.

### Colour Scheme

- #ffffff primary background.
- #f08080 primary text.
- #c06060 secondary text.
-

![screenshot](documentation/coolors.png)

### Typography
Fonts: The site uses Arial for body text, with sans-serif as a fallback for readability.
Icons: Native CSS and SVG icons are used, no external icon libraries.


## Wireframes
No wireframes were created for this project. Instead, I focused on building a responsive layout that adapts seamlessly across desktop, tablet, and mobile devices. Below are screenshots of the actual website displayed on different devices:

| Desktop | Mobile| Tablet |
| --- | --- | --- | --- |
| Home | ![screenshot](/assets/images/homedesk.png)| ![screenshot]([screenshot](/assets/images/homemob.png)) | ![screenshot]([screenshot](/assets/images/hometab.png)) |
| Quiz | ![screenshot](/assets/images/quizdesk.png) | ![screenshot](/assets/images/quizmob.png) | ![screenshot](/assets/images/quiztab.png) |
| Plan your Trip | ![screenshot](/assets/images/plandesk.png) | ![screenshot](/assets/images/planmob.png) | ![screenshot](/assets/images/plantab.png) |

## User Stories

| Target | Expectation | Outcome |
| --- | --- | --- |
| As a visitor | I want to quickly get information about locations|so that it might help me in the planning my trip.
| As a visitor | I want to know about all the famous locations and get basic infomration | so that i know to navigate in those locations 
| As a user | I would like the website to have high-contrast colors and accessible fonts | so that I can easily read and interact with it. |
| As a user | I would like clear labels and instructions | so that I understand how to navigate the app without confusion. |
| As a user | I would like to see a 404 error page if I get lost | so that it's obvious that I've stumbled upon a page that doesn't exist. |

## Features

### Existing Features

| Feature | Notes | Screenshot |
| --- | --- | --- |

| Navbar | responsive navbar appears on all pages with links to Home, Quiz and Plan your trip. It helps users smoothly navigate the site from any device. | ![screenshot](/assets/images/nav.png) |
| Hero section|The homepage features a bold hero section with name and tagline, creating a strong first impression. | ![screenshot](/assets/images/nav.png) |
| Home Page | Gives a brief idea about the website is about and how to navigate it. | ![screenshot](/assets/images/nav.png) |

### Future Features

- **Dark Mode**: Add a dark mode option to enhance user experience and reduce eye strain during extended use.
- **Customizable Themes**: Allow users to choose different themes, colors, or layouts for personalizing their experience.
-ed quizzes or games to help users improve their arithmetic skills while using the app.

## Tools & Technologies

| Tool / Tech | Use |
| --- | --- |
| [![badge](https://img.shields.io/badge/Markdown_Builder-grey?logo=markdown&logoColor=000000)](https://markdown.2bn.dev) | Generate README and TESTING templates. |
| [![badge](https://img.shields.io/badge/Git-grey?logo=git&logoColor=F05032)](https://git-scm.com) | Version control. (`git add`, `git commit`, `git push`) |
| [![badge](https://img.shields.io/badge/GitHub-grey?logo=github&logoColor=181717)](https://github.com) | Secure online code storage. |
| [![badge](https://img.shields.io/badge/VSCode-grey?logo=htmx&logoColor=007ACC)](https://code.visualstudio.com) | Local IDE for development. |
| [![badge](https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=E34F26)](https://en.wikipedia.org/wiki/HTML) | Main site content and layout. |
| [![badge](https://img.shields.io/badge/CSS-grey?logo=css3&logoColor=1572B6)](https://en.wikipedia.org/wiki/CSS) | Design and layout. |
| [![badge](https://img.shields.io/badge/JavaScript-grey?logo=javascript&logoColor=F7DF1E)](https://www.javascript.com) | User interaction on the site. |
| [![badge](https://img.shields.io/badge/GitHub_Pages-grey?logo=githubpages&logoColor=222222)](https://pages.github.com) | Hosting the deployed front-end site. |


## Agile Development Process

### GitHub Projects

[GitHub Projects](https://www.github.com/nashnusu/travel-website/issues)  was used to organize and track progress using a Kanban board. Tasks were split into user stories and managed through GitHub Issues.
![screenshot](/assets/images/project.png)


### GitHub Issues

[GitHub Issues](https://www.github.com/nashnusu/travel-website/issues)  All issues raised during development were successfully closed, ensuring a complete and polished final product
![screenshot](/assets/images/issue.png)

### MoSCoW Prioritization

I've decomposed my Epics into User Stories for prioritizing and implementing them. Using this approach, I was able to apply "MoSCoW" prioritization and labels to my User Stories within the Issues tab.

- **Must Have**: Fix quiz submission and result display
- **Should Have**: Implement Personalized Destination Recommendations Based on User Interests
- **Could Have**: Add a Travel Tips Section with Packing and Preparation Advice

## Testing

> For all testing, please refer to the [TESTING.md](TESTING.md) file.

## Deployment

### GitHub Pages

The site was deployed to GitHub Pages. The steps to deploy are as follows:

- In the [GitHub repository](https://www.github.com/nashnusu/travel-website), navigate to the "Settings" tab.
- In Settings, click on the "Pages" link from the menu on the left.
- From the "Build and deployment" section, click the drop-down called "Branch", and select the **main** branch, then click "Save".
- The page will be automatically refreshed with a detailed message display to indicate the successful deployment.
- Allow up to 5 minutes for the site to fully deploy.

The live link can be found on [GitHub Pages](https://nashnusu.github.io/travel-website).



### Local Development

This project can be cloned or forked in order to make a local copy on your own system.

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://www.github.com/nashnusu/travel-website).
2. Locate and click on the green "Code" button at the very top, above the commits and files.
3. Select whether you prefer to clone using "HTTPS", "SSH", or "GitHub CLI", and click the "copy" button to copy the URL to your clipboard.
4. Open "Git Bash" or "Terminal".
5. Change the current working directory to the location where you want the cloned directory.
6. In your IDE Terminal, type the following command to clone the repository:
	- `git clone https://www.github.com/nashnusu/travel-website.git`
7. Press "Enter" to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://www.github.com/nashnusu/travel-website)

**Please Note**: in order to directly open the project in Gitpod, you should have the browser extension installed. A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, you make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository. You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://www.github.com/nashnusu/travel-website).
2. At the top of the Repository, just below the "Settings" button on the menu, locate and click the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account
 
### Local VS Deployment

There are no remaining major differences between the local version when compared to the deployed version online.

## Credits

### Content

| Source | Notes |
| --- | --- |
| [Markdown Builder](https://markdown.2bn.dev) | Help generating Markdown files |
| [ChatGPT](https://chatgpt.com) | Help with code logic and explanations |

### Media

- Images
    - [Pexels](https://www.pexels.com)
    - [Lorem Picsum](https://picsum.photos) (placeholder images)
    - [Wallhere](https://wallhere.com) (wallpaper / backgrounds)
    
    
| Source | Notes |
| --- | --- |
| [favicon.io](https://favicon.io) | Generating the favicon |
| [Font Awesome](https://fontawesome.com) | Icons used throughout the site |
| [Pexels](https://images.pexels.com/photos/29623958/pexels-photo-29623958/free-photo-of-women-in-traditional-vietnamese-dress-in-lotus-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) | Hero image |


### Acknowledgements

- I would like to thank my Code Institute mentor, [Tim Nelson](https://www.github.com/TravelTimN) for the support throughout the development of this project.
- I would like to thank the [Code Institute](https://codeinstitute.net) Tutor Team for their assistance with troubleshooting and debugging some project issues.
- I would like to thank the [Code Institute Slack community](https://code-institute-room.slack.com) for the moral support; it kept me going during periods of self doubt and impostor syndrome.

