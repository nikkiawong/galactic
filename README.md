# Super Galactic Age Calculator

#### Epicodus independent code review, 10.5.2018

#### By Nikki Wong

## Description

This application calculates a user’s age based on a planet’s solar years and tells them their remaining life expectancy in planet solar years.

## Specs

* When a user submits their date of birth, their age in Mercury years is returned
  * Example Input: February 1, 1997
  * Example Output: 90.37009860767589

* When a user submits their date of birth, their age in Venus years is returned
  * Example Input: February 1, 1997
  * Example Output: 34.98197365458421

* When a user submits their date of birth, their age in Mars years is returned
  * Example Input: February 1, 1997
  * Example Output: 11.536608332894794

* When a user submits their date of birth, their age in Jupiter years is returned
  * Example Input: February 1, 1997
  * Example Output: 1.8287372399529689

* When a user submits their date of birth and life expectancy in Earth years, their remaining life expectancy in Mercury years is returned
  * Example Input: February 1, 1997; 100
  * Example Output: 326.29656805899083

* When a user submits their date of birth and life expectancy in Earth years, their remaining life expectancy in Venus years is returned
  * Example Input: February 1, 1997; 100
  * Example Output: 126.30834892606096

* When a user submits their date of birth and life expectancy in Earth years, their remaining life expectancy in Mars years is returned
  * Example Input: February 1, 1997; 100
  * Example Output: 41.65488102880734

* When a user submits their date of birth and life expectancy in Earth years, their remaining life expectancy in Jupiter years is returned
  * Example Input: February 1, 1997; 100
  * Example Output: 6.602965964094249

* When a user submits their date of birth and life expectancy in Earth years, if they have already passed their average life expectancy their years past life expectancy in Mercury years is returned
  * Example Input: October 5, 1917; 100
  * Example Output: 4.4568656651657435

* When a user submits their date of birth and life expectancy in Earth years, if they have already passed their average life expectancy their years past life expectancy in Venus years is returned
  * Example Input: October 5, 1917; 100
  * Example Output: 1.7252383219996426

* When a user submits their date of birth and life expectancy in Earth years, if they have already passed their average life expectancy their years past life expectancy in Mars years is returned
  * Example Input: October 5, 1917; 100
  * Example Output: 0.5689615742764779

* When a user submits their date of birth and life expectancy in Earth years, if they have already passed their average life expectancy their years past life expectancy in Jupiter years is returned
  * Example Input: October 5, 1917; 100
  * Example Output: 0.09018952442156648

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
