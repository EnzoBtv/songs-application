# Songs application

> An example of application using MVC, Docker and ES6 syntax

> The project was made in a weekend working all day.

[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger)

**_Frontend_**

> Vote in a song
> [![GRAPHIC1](https://imgur.com/xa5oLsy.png)]()

> Admin
> [![GRAPHIC2](https://imgur.com/NUa1i0O.png)]()

## Table of Contents

-   [Installation](#installation)
-   [Features](#features)
-   [License](#license)

## Installation

### Download

-   Clone the repo using the following link:
    `https://github.com/EnzoBtv/songs-application`

-   Download the LTS version of docker and docker-compose

### Setup and Execution

To run the application, in the root folder of the project, run:

```sh
$ sudo docker-compose up
```

-   After docker finishes its internal processes, you will have 4 services:

-   A backend service, on the port 3333.
-   A frontend service, on the port 3000.
-   A PostgresSQL database on the default port 5432.
-   And an adminer, so you can see the databasse on port 8080

> You can shut down the services using:

```shell
$ sudo docker-compose down
```

> And to delete the images run:

```shell
$ sudo docker images
$ sudo docker rmi <imageId>
```

---

## Features

> One screen where the user can choose 5 songs, put his or her name and vote

> Another screen hosted on /admin where the admin can see the songs with the greater vote quantity.

## Technology

> Docker

-   One container containing backend service using a PostgresSQL database;
-   Another one containing the frontend;
-   And other two, one containing the PostgresSQL database and another one containing the Adminer;
-   Use of Docker-compose.

> Backend

-   Very scalable NodeJS architecture with Controllers and models being added automaticaly;
-   Routes protected from basic security attacks as DDoS;
-   Use of Node cluster system.

> Frontend

-   Reusable custom components made by myself using CSS and ReactJS
-   Use of react-router-dom so the users can navigate between the pages

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

-   **[MIT license](http://opensource.org/licenses/mit-license.php)**
