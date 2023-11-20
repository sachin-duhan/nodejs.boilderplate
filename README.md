# Nodejs boilerplate
A basic nodejs api using MVC architecture, and admin panel using Admin-bro (coming soon.)

## Installation
```bash
git clone https://github.com/sachin-duhan/nodejs.boilerplate
cd nodejs.boilerplate

# make sure that nodejs & npm is installed
npm run install
npm install -g nodemon

# copy and update your env variables.
cp .env.example .env

# create required directories.
mkdir -p api/logs
touch api/logs/access.log

npm run dev
```

## Application & Access Logs
Make sure that `api` folder contains a `logs` folder with following files.

```bash
api
├── common
│   ├── error.handler.js
│   └── logger.js
├── logs
│   ├── access.log
│   ├── combined.log
│   └── error.log
└── routes
    ├── index.js
    └── v1.js
```

## Contributor's Guidelines
- Respect all homies and make sure you write clean code.
- More details in `CONTRIBUTING.md` file

## Author
- [Sachin Duhan](https://www.linkedin.com/in/sachin-duhan/) 
