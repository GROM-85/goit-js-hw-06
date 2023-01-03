
 let categories = document.querySelectorAll("#categories > .item");

// 1) TASK 

console.log("Number of the categories:",categories.length);

// 2) TASK

categories.forEach((elem) => {
    console.log("Category:",elem.querySelector("h2").innerText);
    console.log("Elements:",elem.querySelectorAll("ul > li").length);
})