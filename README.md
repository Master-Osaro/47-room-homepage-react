# Frontend Mentor - Room homepage

![Design preview for the Room homepage coding challenge](./src/design/desktop-preview.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I Learned](#what-i-learned)
- [Available Scripts](#available-scripts)
    - [npm start](#npm-start)
    - [npm run build](#npm-run-build)
- [Learn More](#learn-more)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard



### Links

- Live Site URL: [Live Demo](#)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- [Create React App](https://facebook.github.io/create-react-app/docs/getting-started).
- [React & React Hooks: useState, useEffect, useCallback](https://reactjs.org/)
- [GSAP animation library](https://greensock.com/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Keboard Event Listener Issues [StackOverflow: keybard Event Listener is being called multiple times?](https://stackoverflow.com/questions/64434545/react-keydown-event-listener-is-being-called-multiple-times).

Memoization in javascript [Geeks for geeks: Javascript Memoization](https://www.geeksforgeeks.org/javascript-memoization/)

### What I Learned
- React.useCallback
```js
const [currentSlide, setCurrentSlide] = useState(0);

  const prev =useCallback(()=>{
    currentSlide>0?setCurrentSlide(currentSlide-1):setCurrentSlide(2);
  },[currentSlide])
  const next =useCallback(()=>{
    currentSlide<2?setCurrentSlide(currentSlide+1):setCurrentSlide(0);
  },[currentSlide])

  const handleArrowKeys = useCallback((e)=>{
      if(e.key==="ArrowLeft"){
        prev();
      }
      if(e.key==="ArrowRight"){
        next();
      }
  },[prev,next])

```




## Author
- Frontend Mentor - [@Master-Osaro](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@iyoha_osaro](https://www.twitter.com/yourusername)

**Had fun building!** 🚀

