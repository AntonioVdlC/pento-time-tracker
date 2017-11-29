# Pento Time Tracker

This is a simple time tracker built for the Pento technical challenge ... I may also be useful to some people, I guess!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To run the code on your machine, you will need first to install:
- Node

If you are on macOS X, you can install them using Homebrew
```
brew install node
```

> The latest the version, the better!

### Installing

Now that you have installed the needed software, let's look into getting this instance to run!

Run the following from the root of the project:

```
npm install
```

This will install all the dependencies for both the client and the server.

Finally, to kick things up, run the following:

```
npm start
```

If there are no errors and a webpage appears and it's functional, then you are pretty much set!

## Running the tests

The tests definitely need more attention, but you can run the existing tests with:

```
npm run test
```

> If you run that command from the root, it will run both the client and the server tests!

## Deployment

The deployment to Heroku is automatic once the code is pushed on GitHub and it passes all the tests on TravisCI.

## Architecture

### Client-Side
Most of the code is in the `client` folder. 

The project has been scaffolded using `create-react-app` with the addition of `React Router` to do the routing between the time tracking screen and the calendar screen.

A data layer abstraction `store` is used to retrieve and store data. It is currently only using `localStorage`, but could be made to point to a REST API or any other fallback as well without disrupting the UI layer.

The UI is separated in two screens that are responsible for their state handling and that are composed of stateless functional `components`.

### Server-Side
As you can see, the `server` folder is currently quite empty and just serving `index.html` in production, but can support SSR or a persistence layer in the future.

All the data is abstracted away by the `store` which for now only uses `localStorage` on the `client`, but which could also point to a REST API on the `server` to sync data accross various devices (which in turn would need implementing authentication and user accounts).

All this part has been skimmed, but if you would like to see what it would look like, please take a look at the code here https://github.com/litomba/www.

## Contributing

-- TODO --

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Antonio Villagra De La Cruz** - *Initial work* - [AntonioVdlC](https://github.com/AntonioVdlC)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

MIT

## Acknowledgments

* [Billie Thompson](https://github.com/PurpleBooth) for this [README.md template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) ... it's awesome!
