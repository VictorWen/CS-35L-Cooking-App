# Cooky-App
A website where users can create, edit, display, clone, and rate recipes.
Users can create accounts, log in, and view their recipes.
Users can also search for recipes by name, and see a list of the most popular recipes.


The website is split into a React frontend and a Express backend.
Both need to be running at the same time for the website to work properly.
The website also uses a Firebase database for authentication and storage.
To run the website, you will need your own Firebase database.

## Configuration

A .env.local file needs to be in both the frontend and api directories.
The .env.local file should include the identifying information for the Firebase database. Find this information by selecting the gear
icon next to the **Project Overview** tab on the Firebase Console, navigating to **Project settings > General**, scrolling down to the
contents under the header **SDK setup and configuration**, and selecting **Config**.

![Screen Shot 2021-06-04 at 10 12 46 AM](https://user-images.githubusercontent.com/72584623/120815151-92a5e080-c51d-11eb-85c3-098d07685e7a.png)

Additionally, a .json file containing the Firebase Admin SDK private service key needs to be in the api directory. 
This private service key can be generated by navigating to **Project settings > Service accounts**, selecting **Node.js** and clicking
**Generate new private key**.

![Screen Shot 2021-06-04 at 10 12 46 AM](https://user-images.githubusercontent.com/72584623/120815246-9f2a3900-c51d-11eb-9285-14ab7d6c42f5.png)

Then, the lines in **api/app.js**

```
const key_path = "./cs-35l-cooking-app-firebase-adminsdk-pfw6m-00878e5a37.json"; // Firebase Admin SDK private service key file
const db_url = "https://cs-35l-cooking-app-default-rtdb.firebaseio.com";         // Firebase database url
```

need to be changed to match your Firebase configuration.

## Start

The backend api runs on port 3001 and the frontend runs on port 3000.

The backend api can be started by running:

```
cd api
npm install
npm start
```

The frontend can be started by running:

```
cd frontend
npm install
npm start
```
