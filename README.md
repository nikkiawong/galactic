# Super Galactic Age Calculator

#### Epicodus independent code review, 10.5.2018

#### By Nikki Wong

## Description

This application calculates a user’s age based on a planet’s solar years and tells them their remaining life expectancy in planet solar years.

## Specs

* When a user submits their date of birth, their age in Mercury years is returned
  * Example Input: 1997-02-01
  * Example Output: 87

* When a user submits their date of birth, their age in Venus years is returned
  * Example Input: 1997-02-01
  * Example Output: 33

* When a user submits their date of birth, their age in Mars years is returned
  * Example Input: 1997-02-01
  * Example Output: 11

* When a user submits their date of birth, their age in Jupiter years is returned
  * Example Input: 1997-02-01
  * Example Output: 1

* When a user submits their date of birth and life expectancy in Earth years, their remaining life expectancy in Mercury years is returned
  * Example Input: 1997-02-01; 100
  * Example Output: 329

* When a user submits their date of birth and life expectancy in Earth years, their remaining life expectancy in Venus years is returned
  * Example Input: 1997-02-01; 100
  * Example Output: 127

* When a user submits their date of birth and life expectancy in Earth years, their remaining life expectancy in Mars years is returned
  * Example Input: 1997-02-01; 100
  * Example Output: 42

* When a user submits their date of birth and life expectancy in Earth years, their remaining life expectancy in Jupiter years is returned
  * Example Input: 1997-02-01; 100
  * Example Output: 6

* When a user submits their date of birth and life expectancy in Earth years, if they have already passed their average life expectancy their years past life expectancy in Mercury years is returned
  * Example Input: 1917-10-05; 100
  * Example Output: 4

* When a user submits their date of birth and life expectancy in Earth years, if they have already passed their average life expectancy their years past life expectancy in Venus years is returned
  * Example Input: 1917-10-05; 100
  * Example Output: 1

* When a user submits their date of birth and life expectancy in Earth years, if they have already passed their average life expectancy their years past life expectancy in Mars years is returned
  * Example Input: 10-05-1917; 100
  * Example Output: 0

* When a user submits their date of birth and life expectancy in Earth years, if they have already passed their average life expectancy their years past life expectancy in Jupiter years is returned
  * Example Input: 1917-10-05; 100
  * Example Output: 0

* When a user submits their date of birth, their next birthday on Earth is returned
  * Example Input: 1997-02-01
  * Example Output: Fri Feb 01 2019

## Setup Instructions

* Install Node.js
* Clone the repo
* Run 'npm install' to install dependencies
* Run 'npm run start' to build and start the dev server
* Run 'npm run test' to run the unit tests with Karma and Jasmine

## Technologies Used

* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma

## License

Copyright (c) 2018 **Nikki Wong**
