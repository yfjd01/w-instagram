# React
**Definition:** React is a library used for creating user interfaces

Whats unique about it is that everything is done with components

* Being able to nesting component
    * Taking component together we can build a more complex component called a webpage 
    * which together makes up the webpage
    * This is called the composition model
* Virtual Dom
    * components are made of elements (described the UI of webpage)
    * React does all the hard work for us 
    * React converts UI to dom nodes, which are passed do dom and rendered the ui on webpage


Boiler Plate Configuration

Very few JS support ES6
* Babel compiles ES6 codes to ES5 bundles which is highly supported

Webpack 
* generate all code into a bundle such that all JSX code that we write with react is converted to browser compatiable ES5 code, then it runs our bundle file with appropriate code

create-react-app does all this for you, it uses webpack and all other configurations for us
* npm install -g create-react-app
* we install it globally as we want to use it in our terminal everywhere
