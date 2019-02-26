
# Book A Meal


[![Build Status](https://travis-ci.com/ocranbillions/book-a-meal.svg?branch=develop)](https://travis-ci.com/ocranbillions/book-a-meal) [![Coverage Status](https://coveralls.io/repos/github/ocranbillions/book-a-meal/badge.svg?branch=develop)](https://coveralls.io/github/ocranbillions/book-a-meal?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/8fcde27c84b527e0a8d8/maintainability)](https://codeclimate.com/github/ocranbillions/book-a-meal/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/8fcde27c84b527e0a8d8/test_coverage)](https://codeclimate.com/github/ocranbillions/book-a-meal/test_coverage)
## Getting Started
### Prerequisites
The tools listed below are needed to run this application:
* Node v10.15.0 or above
* Npm v6.4 or above
### Installation
`git clone https://github.com/ocranbillions/book-a-meal.git`
- Pull the [develop](https://github.com/ocranbillions/book-a-meal/tree/develop) branch off this repository
- Run `npm install` to install all dependencies
- Run npm start to start the app
- Access endpoints on **localhost:3000**


### Endpoints
- GET **api/v1/meals/** Caterer can get all meals
- GET **api/v1/meals/:mealId** Caterer can get a single meal
- POST **api/v1/meals/** Meals can be added via this endpond. The endpoint expects req.body to have the following names on a form element: `name, image, price, description` all of which should be filled.
- PUT **api/v1/meals/:id** Meals can be updated via this endpond. The endpoint also expects input elements from the body of the request as follows: `name, image, price, description` all of which should be filled.
- DELETE **api/v1/meals/:id** Admin (caterer) can delete meal

- GET **api/v1/menu/** Both admin & user can get menu for `today`, `tomorrow`  and all dates in the db (dummyData).

- GET **api/v1/menu/:date** Caterer and user can get menu for a given date example date `today`
- POST **api/v1/menu/** Caterer can setup menu for a given date. If there's menu for the given date, meal is added to that menu if not, new date is created and meal is added as first meal on the menu. Settin up menu requires input  `mealName` and `date` from the body of the request. (`mealName`'s value must be name of a meal in db - dummyData example `plantain`)

- GET **api/v1/orders** Customer can get all their orders
- POST **api/v1/orders** Customers can make order. The endpoint expects `meal`, `qty`, `cost` from req.body
- PUT **api/v1/orders/:orderId** Customers can modify their orders. The endpoint expects `meal`, `qty`, `cost` from req.body

### Running the tests
Run `npm test` in the root folder.

### Author
[**Samuel Ocran**](https://twitter.com/ocranbillions)

### Acknowledgments
- [**Andela Nigeria**](https://andela.com/)
- [**forLoop Africa**](https://forloop.africa/)