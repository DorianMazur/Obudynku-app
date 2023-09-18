# Obudynku

<img src="./packages/ob-frontend/public/logo_dark.svg">

![Stars](https://img.shields.io/github/stars/Obudynku/Obudynku-app?style=flat-square)
![Forks](https://img.shields.io/github/forks/Obudynku/Obudynku-app?style=flat-square)
![License](https://img.shields.io/github/license/Obudynku/Obudynku-app?style=flat-square)

## Description

Obudynku is an application for checking buildings located in Poland. The opinions available in this application are especially useful for individuals looking to purchase or rent an apartment. Before making a decision, users can check opinions about a specific building.

## Features

- [x] **Building Evaluation:** Get detailed insights about various buildings in Poland.
- [x] **User Reviews:** Read opinions from other users to make informed decisions.
- [x] **Registration:** Create account and manage reviews.
- [ ] **Acoustic maps:** Fetching information from government website about noise pollution.
- [ ] **Internet provider:** Fetching information from government website about internet providers.

## How to Install
### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (Node Package Manager) installed. You can check by running:  ``` node -v  npm -v ```
- Ensure you have [Yarn](https://yarnpkg.com/). Install it globally:  ``` npm install -g yarn ```
### Installation Steps
1. **Clone the Repository**
2. **Install Dependencies** Install the required dependencies:
```bash
yarn install 
```
3. **Run the Project**   Once the dependencies are installed, you can run the project using:
```bash   
yarn start:frontend   
#and
yarn start:backend 
``` 
4. **Access the Application** Once the project is running, you can access it by opening your browser and navigating to `http://localhost:3000`.

## ENV Variables
### ob-frontend
| Variable name | Description | Required |
| ---- | ---- | ---- |
| NEXT_PUBLIC_GA_TRACKING_ID |  | No |
| NEXT_PUBLIC_API_URL | | Yes |

### ob-backend
| Variable name | Description | Required |
| ---- | ---- | ---- |
| JWT_SECRET_KEY | JWT used to sign auth tokens | Yes |
| GOOGLE_STREETVIEW_KEY | Google API key used to fetch streetview photos | No |
| MYSQL_HOST | Host of the mysql server, sqlite will be used if this variable is not present | No
| MYSQL_PORT | | Yes, if MYSQL_HOST present
| MYSQL_USERNAME | | Yes, if MYSQL_HOST present
| MYSQL_PASSWORD | | Yes, if MYSQL_HOST present
| MYSQL_DATABASE | | Yes, if MYSQL_HOST present

## License

This project is licensed under the [GPLv3 License](https://github.com/Obudynku/Obudynku-app/LICENSE).
