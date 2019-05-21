# Ireckonu

## Specification

Use the API provided to produce the following:
* Return a list of profiles.
* You will need to filter the data based on user’s search criteria.

Scenarios:
* The user opens the search page and starts searching for profiles by first name, last name, email, this will filter the list of profiles returned from the API.
* When the user clicks on a profile row, the app will route to the profile details page.
* Profile details page should have tabs, the default open tab is the profile detail, bind the profile data to this tab only, the left panel shows quick facts that are not returned in the API so just put static text as shown in the screenshots.
* The app needs to correctly handle the following:
    - No profile with this filter found.
    - If API does not respond or no profiles returns, show a user friendly error massage.

## Tech Stack

* Angular 7
* Angular Material
* TypeScript
* JavaScript ES6+
* SCSS
* Karma - Unit Testing
* Protractor - E2E Testing

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Build Version

0.0.1

## About Me

Kevin Martínez Montero

Senior Front End Engineer

Currently living in Costa Rica
