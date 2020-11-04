# Genrefy

> A Front-End Project by [Bret Merritt](https://github.com/bretm9) [Nathan Darrington](https://github.com/npdarrington) and [Carlyle "Dougie" Douglas](https://github.com/DougieDev)
<!-- > [Link to project]() -->
---
## Contents
1. [Overview](#overview)
1. [Setup](#setup)
1. [Technologies](#technologies)
1. [Design](#design)
1. [Evolution](#evolution)
1. [Challenges](#challenges)
1. [Successes](#successes)
---

## Overview

  This application was a collaberative project of Module 3 in the Front-End Development program at Turing School of Software and Design. Through creating this website, we utilized TypeScript and React, alongside React Testing Library to develop a playlist generator application. We had 10 days to come up with our own unique app idea (MVP), plan, and build out this fully featured original app while learning  new technologies such as TypeScript and working with multiple APIs in the process.
  
  This app displays random genres accessed from [Binary Jazz](https://binaryjazz.us/genrenator-api/), and upon clicking one, the user is presented with a randomly generated playlist based on the parsed genre details of the genre they clicked. These songs are accessed via the [Last FM API](https://www.last.fm/api). These playlists can be saved and viewed in the saved page, or expanded to get more details about the songs.

> [Back to the top](#genrefy)
---
## Setup

<!-- This website is deployed! Visit this link to view it online. -->

  If you want to get it up and running on your local machine, follow these instructions:
    * Clone down this repo.
    * `cd` into the newly created repo.
    * Run `npm install` in the terminal.
    * Run `npm start` in the terminal.
    * Visit [this link](https://www.last.fm/api/account/create) to create a Last FM API account.
    * Last FM will then send you an APIKey. Save this for a future step!
    * Create a `.env` file in `src/` of the cloned repo on your local machine.
    * In `.env` write `REACT_APP_LASTFM_APIKEY = ` followed by the APIKey that Last FM sent you.
    * If a browser window doesn't automatically open, navigate to `http://localhost:3000/` in your browser.

> [Back to the top](#genrefy)
---
 ## Technologies
  - TypeScript
  - React
  - Router
  - React Testing Library
  - Jest
  - Fetch API
  - userEvent
  - CSS
  - Git

> [Back to the top](#genrefy)
---
## Design

  The homepage consists of randomly generated genres which when clicked will generate a new playlist based on the clicked genre. Theses playlists can be saved by clicking the star icon, or viewed in more detail by clicking the title. As far as styling, the homepage is organized in a clean structure, with the random genres on the left, and the container for generated playlists on the right. We sorted it this way for readibility and accessibility.

  <!-- Image of homepage -->

  Clicking the `View Saved` button will link to the saved playlists view. This view is very similar to the playlist container on the homepage, except it only shows saved playlists. If you unstar a saved playlist in this view, it will disappear from the page. If you click the title of a playlist, it will open into the playlist details view. This playlist container is front and center since it is all that appears on the page.

  <!-- Image of View Saved -->

  Each playlist has a title, which when clicked, links to the details view for that playlist. This view is an expanded version of the playlist for better readibility, and includes links to the song and artist pages on Last FM. You can also save the playlist in this view by clicking the star. 

  <!-- Image of playlist details -->

> [Back to the top](#genrefy)
---
## Evolution

  For this project we used a [GitHub Project Board](https://github.com/bretm9/genrefy/projects/1) to plan out our course-of-action, and wireframes to visualise our design.
  
  <img width="840" alt="Screen Shot 2020-10-27 at 11 58 41 AM" src="https://user-images.githubusercontent.com/14350203/98170071-9b143b00-1eaa-11eb-88fd-c3b207b1e509.png">

  <img width="840" alt="Screen Shot 2020-10-27 at 11 59 12 AM" src="https://user-images.githubusercontent.com/14350203/98170107-abc4b100-1eaa-11eb-9435-3a8fdfc4bcd1.png">
  
  <img width="840" alt="Screen Shot 2020-11-02 at 2 51 52 PM" src="https://user-images.githubusercontent.com/14350203/98170160-bed78100-1eaa-11eb-8193-3809ebb8bf7f.png">

> [Back to the top](#genrefy)
---
## Challenges  
 
  This project was daunting in the beginning since we needed to come up with a fully unique app from scratch. Thinking up an idea was tough, even with verious APIs as jumping off points. This became easier when we realized we could utilize two different APIs to create a more original user experience.

  Additionally, learning TypeScript for this project also brought with it some unique challenges. Learning how to setup a repo with the typescript boiler-plate, and working with interfaces and union types was hugely valuable.
 
> [Back to the top](#genrefy)
---
## Successes
 
  A big win for this project was coming out feeling really strong in TypeScript. Additionally, feeling more comfortable about async testing and mocking with Jest was a great success. 
  
> [Back to the top](#genrefy)
 ---