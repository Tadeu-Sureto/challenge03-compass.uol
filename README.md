# README - 12th Week Challenge - COMPASS.UOL Internship
Development of the Compass UOL SOCIAL homepage. Continuing with the previous challenges, we implemented a real API for the frontend to consume. For the persistence layer (Database) we use MonogDB. We left the entire user registration part functional, that is, every new user registered is saved in the respective database. We also left the user login functional, that is, every time a user logs in, he is forwarded to his home page with his data. We developed the CRUD used in the creation, update, delete and searches of social network posts in the API, as well as the CRUD used in the comments made in the posts. We adapted our frontend to consume the backend and the respective routes. 🚀🚀


Below are the images of the layouts that should be reproduced from the login screen:

[<img src="./github/Layout-Login01.jpg" alt="layout login01">]


Below is the video that demonstrates the operation of the login and registration screens developed by us:

[<img src="./github/Layout-Completo.gif" alt="layout completo">]


## Technologies Used
- TypeScript
- React
- NestJS
- MongoDB 


## Difficulties Faced
We found it very difficult to develop using the NestJS framework, as it is a framework that we have never worked with. The first difficulty encountered was making the database “callable” by the API. Then, a point that gave us a lot of work was making the frontend consume the backend, especially with regard to registering new users and user logins.