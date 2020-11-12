# Right Foot

An app app to help you start your day off on the right foot. 

# Table Of Contents 
- [Description](https://github.com/KelsCree/morning-peace-fe#description)
- [How It Works](https://github.com/KelsCree/morning-peace-fe#how-it-works)
- [Example Code](https://github.com/KelsCree/morning-peace-fe#example-code)
- [Technology Used](https://github.com/KelsCree/morning-peace-fe#technology-used)
- [Main Features](https://github.com/KelsCree/morning-peace-fe#main-features)
- [Features in Progress](https://github.com/KelsCree/morning-peace-fe#features-in-progress)
- [Contact Information](https://github.com/KelsCree/morning-peace-fe#contact-information)
- [Link to Backend Repo](https://github.com/KelsCree/morning-peace-fe#link-to-backend-repo)

## Description

SwingVote is a mobile application that helps to bridge the common knowledge gap between politics and policy and encourages grassroots engagement. With SwingVote, users to easily access their political representatives, candidates running office, and upcoming election information. 

## How It Works

[Right Foot](https://youtu.be/nWK9kczYeVc)

## Example Code 
```
  const addLike = (id) => {
    let user_id = user.id
    let cand_id = id
    fetch(`${baseURL}/liked_candidates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user_id, cand_id })
    })
      .then(response => response.json())
      .then(data => {
        setLikedCandidates([...likedCandidates, data])
    })
  }

```
```
  const login = ({ username, password }) => {
    fetch(`${baseURL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => response.json())
      .then(data => {
        if(data.errors) {
          setAlerts(data.errors)
        } else {
          AsyncStorage.setItem('token', data.token)
          setUser(data.user)
          setAlerts([])
          setLikedCandidates(data.liked)
          setDislikedCandidates(data.disliked)
        }
      })
  }
```

## Technology Used

- React Native
- Ruby on Rails
- SmartVote API
- Bcrypt
- Expo
- Lottie


## Main Features

- User can create a new account or sign in as an existing user using JWT authorization tokens.
- User can browse through political candidates, representatives, and elections narrowed by zip code (+4 optional, but returns more accurate results).
- User select a candidate or official's to view their bio page with more in-depth information
- User can "like" or "dislike" a candidate or official, which is then stored in the database
- User can visit their own profile page to see their activity summary, including all of their liked and disliked candidates

## Features in Progress

- Plans to build in additional functionality for browsing through candidates by name and including vote history for officials
- Plans to deploy the app using firebase and heroku

## Contact Information

[Kelsey Creehan](https://www.linkedin.com/in/kelsey-creehan/)

## Link to Backend Repo

https://github.com/KelsCree/capstone_be