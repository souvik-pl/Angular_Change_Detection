# Angular Change Detection
This repository accompanies the article on [Rendering in Angular and React](https://javascript.plainenglish.io/rendering-in-angular-and-react-3fadb53fc616), where we delve into the intricacies of how Angular and React handles rendering in different scenarios. The primary focus is on the initial rendering of an application and the subsequent re-rendering process triggered by updates within the components.

## Overview
The article explores the rendering process using a small Angular application comprising three components:

- **App:** The root component.
- **ChildOne:** A child component of App.
- **ChildTwo:** Another child component of App.

## Initial Rendering
Upon the initial load of the application, Angular performs change detection for all components within the component tree. This process starts with the root component (App) and cascades down through ChildOne and ChildTwo. Consequently, this leads to the rendering of all components and updates to the DOM.

## Subsequent Re-rendering
Events or asynchronous operations, such as setTimeout, setInterval, or Promises, trigger updates in the component tree. Angular, facilitated by Zone.js, is notified of these changes. Similar to the initial rendering, Angular initiates change detection starting from the root component, traversing the component tree. If any changes are detected, the DOM is updated accordingly.

## Change Detection Optimization
Given that change detection can be resource-intensive, the article highlights the possibility of optimizing it by employing the OnPush change detection strategy.

## Running the Application
To run the application locally, follow these steps:
1. Make sure you have Node installed (preferrably Node v14.15.5).
2. Clone the repository: `git clone [repository-url]`
3. Navigate to the project folder: `cd [project-folder]`
4. Install dependencies: `npm install`
5. Start the development server: `npm run start`
6. Open your browser and visit http://localhost:4200/ to view the application.

Feel free to explore the code and use it as a reference while reading the [article](https://javascript.plainenglish.io/rendering-in-angular-and-react-3fadb53fc616) to gain a deeper understanding of Angular rendering mechanisms.

Happy coding! 🚀
