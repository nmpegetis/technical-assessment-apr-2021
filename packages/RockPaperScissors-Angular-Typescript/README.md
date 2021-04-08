## Rock-Paper-Scissors App in Typescript and Angular

For the Rock-Paper-Scissors assessment I decided to implement a solution using an Angular with Typescript and provide also a UI enviromnent.

I used the latest **Angular 11** with **Typescript v4.1** and also deployed the application to Heroku using a Github pipeline for automated build and deploy when commits happen to the `main` branch. Notice that there was also needed a small configuration in the deployment as I decided to use Monorepo approach in all the assessments and have multiple deployment enviromnent but for one monorepo.

The application is deployed in:
[https://rock-paper-scissors-apr21.herokuapp.com/](https://rock-paper-scissors-apr21.herokuapp.com/)

In order to run the development server locally you should use the following commands:

```
npm i
npm run start:local
```
and open your browser on [http://localhost:4200/](http://localhost:4200/)


In order to run the productive server locally (the one that is deployed in heroku) you should use the following commands:

```
npm i
npm start
```
and open your browser on [http://localhost:8080/](http://localhost:8080/)

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
