# Coordinate Conversion
A function called `convertFromDDToDms` converts decimal degrees to degrees-minutes-seconds.
Also shows in which position the degree is located on the globe.

## Installation

To use convertFromDDToDms, you need to have a JavaScript environment installed, such as Node.js.
1. Clone this repository to your local machine.
2. Open the terminal or command prompt and navigate to the project directory.
3. Install any dependencies by running the command `npm install`.

## Usage

The convertFromDDToDms function takes a decimal degree value as well as a Boolean value showing the degree of superlative
 on a longitude or latitude line and returns the value in the format degrees, minutes, seconds and degree position.
If the elevation value is positive it is in longitude then return the DMS format in the Eastern Hemisphere for the latitude lines and if the elevation value is positive in latitude then return the DMS format in the Eastern Hemisphere for the latitude. If the degree value is negative it is in latitude the function will return the DMS format in the southern hemisphere and if the degree value is negative it is in longitude the function will return the DMS format in the western hemisphere


