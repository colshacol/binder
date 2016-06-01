'use strict';

let BinderApps = {

  myApp: {
    host: "app",
    data: {
      frameworks: [
        {
          name: "React",
          description: "Has a virtual DOM.",
          sucksBecause: "it is difficult to learn.",
          rating: 4
        },
        {
          name: "Angular",
          description: "A dying MVC framework.",
          sucksBecause: "it is ugly as hell.",
          rating: 3
        },
        {
          name: "Vue",
          description: "A simple/lightweight MVVM framework.",
          sucksBecause: "I didn't create it.",
          rating: 8
        }
      ], // frameworks
      shoe: {
        dog: {
          name: "doggy",
          description: "a dog.",
          sucksBecause: "not a cat.",
          rating: 5
        }
      }
    } // data
  }, // myApp

  appTwo: {
    host: "twooo",
    data: [{
      something: [
        {
          first: "val 0.0",
          second: "val 0.1",
          third: "val 0.2"
        },
        {
          first: "val 1.0",
          second: "val 1.1",
          third: "val 1.2"
        }
      ]
    }]
  } // appTwo

}



// let myApp = new Binder.app({
//   name: "mainApp",
//   host: "app",
//   data: [{
//     frameworks: [
//       {
//         name: "React",
//         description: "Has a virtual DOM.",
//         sucksBecause: "it is difficult to learn.",
//         rating: 4
//       },
//       {
//         name: "Angular",
//         description: "A dying MVC framework.",
//         sucksBecause: "it is ugly as hell.",
//         rating: 3
//       },
//       {
//         name: "Vue",
//         description: "A simple/lightweight MVVM framework.",
//         sucksBecause: "I didn't create it.",
//         rating: 8
//       }
//     ]
//   }]
// });

// let app2 = new Binder.app({
//   name: "app2",
//   host: "twooo",
//   data: [{
//     something: [
//       {
//         first: "val 0.0",
//         second: "val 0.1",
//         third: "val 0.2"
//       },
//       {
//         first: "val 1.0",
//         second: "val 1.1",
//         third: "val 1.2"
//       }
//     ]
//   }]
// });

// IDEA: Study why instantiating a secondary
// Binder.app here caused myApp.data to return
// Object{}. *********************************
// IDEA: Upon changing Binder from an arrow
// function (which, subsequently, can not be
// used as constuctors) the problem is solved.
// *******************************************

// console.log(app2['data']);
// console.log(myApp.data);

// Binder.go();
