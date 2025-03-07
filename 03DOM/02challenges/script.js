// alert("connected!");    // never use alert statements in professional environments
// nothing gets loaded until alert is executed
// after this the do loads up

// Ex 1: Accessing DOM Elements

// document.querySelector('#')
// document.querySelectorAll('button')  // selects every element that matches the pattern

// let hold = document.getElementById("changeTextButton");     
// console.log(hold);       // good practice to hold

// Why you donot use Arrow function in DOM?
// document
//     .getElementById("changeTextButton")
//     .addEventListener("click", () => {
//         console.log(this);  // to know the context of the function
//     });
// Whenever you use these arrow functions, 'this', the context is always pointing towards the global 'this'
// 'this' gets me the Window object

document
    .getElementById("changeTextButton")
    .addEventListener("click", function(){
        // console.log(this);                   // to know the context of the function
        let paragraph = document.getElementById("myParagraph");
        // console.log(paragraph);              // to check whether paragraph access is given or not 
        // console.log(paragraph.textContent);  // gives you the text content
        paragraph.textContent = "The paragraph is changed!";
    });
// When you use the function , then it points to the current context who is calling it. 
// 'this' gets me the Button

// Ex 2: Traversing the DOM 

document
    .getElementById("highlightFirstCity")
    .addEventListener("click", function(){
        let citiesList = document.getElementById("citiesList");
        citiesList.firstElementChild.classList.add("highlight") 
    });

// Ex 3: Manipulating DOM Elements

document
    .getElementById("changeOrder")
    .addEventListener("click", function(){
        let coffeeType = document.getElementById("coffeeType");
        coffeeType.textContent = "Espresso";   
        coffeeType.style.backgroundColor = "brown";
        coffeeType.style.padding = "5px";
    })

// Ex 4: Creating and Inserting Elements
// appendChild doesnot add any element, it accepts only node!
// In the world of DOM bcoz it's a memory, and HTML is being processed so every element becomes a node

document
    .getElementById("addNewItem")
    .addEventListener("click", function(){
        let newItem = document.createElement("li");
        newItem.textContent = "Eggs";
        document.getElementById("shoppingList").appendChild(newItem);
    })
     
// Ex 5: Removing DOM Elements

document
    .getElementById("removeLastTask")
    .addEventListener("click", function(){
        let taskList = document.getElementById("taskList");
        taskList.lastElementChild.remove();
    })

// Ex 6: Event Handling in the DOM

document
    .getElementById("clickMeButton")
    .addEventListener("mouseover", function(){
        alert("Hello Aditya!")
    })

// Ex 7: Event Delegation

document
    .getElementById("teaList")
    .addEventListener("click", function(event){
        // console.log(event);          // pointer event
        // console.log(event.target);   // exact tea item
        if(event.target && event.target.matches(".teaItem")){       // edge case to avoid selecting other list items
            alert("You selected: " + event.target.textContent);
        } 
    })

// Ex 8: Form Handling
// Step 1 : Stop the default behaviour of the form which is submit.

document
    .getElementById("feedbackForm")
    .addEventListener("submit", function(event){
        event.preventDefault();
        // let feedback = document.getElementById("feedbackInput");     // grabbed the input    // try to grab the label
        let feedback = document.getElementById("feedbackInput").value;  // grabbed the input value
        console.log(feedback);
        document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`;
    });

// Ex 9: DOM Content Loaded

document
    .addEventListener("DOMContentLoaded", function(){
        document.getElementById("domStatus").textContent = "DOM fully loaded";
    });

// Ex 10: CSS Classes Manipulation

document   
    .getElementById("toggleHighlight")
    .addEventListener("click", function(){
        let descriptionText = document.getElementById("descriptionText");
        descriptionText.classList.toggle("highlight");
    })


/* 

Goto any website and try to grab different elements there,
sometimes you will be getting HTML Collection or you will get Node List

HTML Collection: Array
Node List: Not an array (you need to convert it into array)

// h1 tag
document.getElementsByTagName("h1");        // array: [h1]     // HTML Collection
document.getElementsByTagName("h1").length; // length of the array
document.getElementsByTagName("h1")[0];     // 0th element
document.getElementsByTagName("h1")[0].textContent;     // text content of the h1 tag
// Now you can manipulate the h1 tag content which was in an array!

// Anchor tag
document.getElementsByTagName("a");                        // anchor tag as HTML Collection
let anchorElements = document.getElementsByTagName("a");   // storing all the elements in a variable
for(let i=0; i<5; i++){
    console.log(anchorElements[i].textContent);
}

*/