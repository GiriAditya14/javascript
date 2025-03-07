/* 
Window:

1. DOM-> elements
2. BOM-> screen, navigator, location
3. Javascript-> objects, array, functions, class 

*/

/* BOM */

// // Screen
// console.log("hello from script");
// console.log(window);    // huge number of things in windows

// console.log(window.outerWidth);
// console.log(window.outerHeight);

// // Navigator 
// navigator.userAgent;    // to find what version is the user agent

// // Location
// location.hostname;
// location.href;


/* DOM */

// console.log(document);                       // #document -> the whole document: html head body
// console.log(document.firstChild);            // <!DOCTYPE html>
// console.log(document.firstChild.firstChild); // null

/* DOM manipulation */
// 1. get the element
// 2. event listening

// Both are different
// HTML : Markup language
// DOM : Processed elements in document tree in memory

// HTML piece of code is taken up by the browser and internally
// browser runs C++ and through that C++, a whole document tree 
// in the meemory is being generted. 
// That generated tree is called DOM
