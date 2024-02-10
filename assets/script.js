const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];
function listTopics() {
    for (let x=0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}
/*
for(let x = 0; x < topics.length; x++) {
    console.log(topics[x])
}
*/
function selectTopics(){
if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
} else if (randomTopic === 'CSS'){
    console.log("Let's study CSS!");
} else if (randomTopic === 'JavaScript'){
    console.log("Let's study JavaScript!");
} else {
    console.log("Please try again!");
}
}
// the asterisk + forward slash is called 'commenting out' a code, so it can be made inactive while still being present, in case it's needed later.
/*const shapes = ["triangle", "square", "pentagon", "circle"];
for(let x = 0; x < shapes.length; x++) {
    console.log(shapes[x]);
}
//The code above indicates that so long x is less than the value of the length of the array (4), it will continue to loop, and increase the value of x each time until it equals the value of the array
*/

function helloWorld() {
    console.log ("Hello, world, I am a function!")
    // code block
}
console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopics();