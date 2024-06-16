//  Promise

// Pending : Waiting for timeout

// async function myDisplay(){

// let myPromise  = new Promise( function(resolve){
//   setTimeout(function() {
//       resolve("I will be always there !!")
//   }, 3000)

// })
// const result = await myPromise
// console.log(result);
// }

// myDisplay();

//  Fullfilled  :

// async function myDisplay(){

//   let myPromise  = new Promise( function(resolve){
//       resolve("I will be always there !!")
//   })
//   const result = await myPromise
//   console.log(result);
// }

// myDisplay();

//  OMDb API Key  :  http://www.omdbapi.com/?i=tt3896198&apikey=7290691

<!-- 
Approach: Our app contains two sections i.e a section for taking the user input and the other for displaying the video. Whenever a user searches for a video, we will store that inside a state variable and whenever a user clicks on the search button we will call a function that will fetch the required video URL and store it in another state variable. Now we have the required URL, we will simply render that video using the ‘ReactPlayer’ component.
 -->

 <!-- Dependcies : 
 
 1. npm install movie-trailer 
 2. npm install react-player

 -->