// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
(function (window){
var helloSpeaker ={};
helloSpeaker.Speak ="Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry";
 helloSpeaker.name= function(){
   console.log(helloSpeaker + " " + name);
};
   // STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1.

function helloSpeaker(){
	var helloSpeaker = function speak(name){
	console.log(speakWord + " " + name);
		}("Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry" );
	};  
// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2.
var speakWord = "Hello";
helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}("Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry" );

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// {'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2.
(function (helloSpeaker) {
  console.log("Hello "+  helloSpeaker);
})("Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry" );

// (Note, Step 6 will be done in the SpeakGoodBye.js file.
// xxxx.xxxx = helloSpeaker
  }

