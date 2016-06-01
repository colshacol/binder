'use strict';

const Binder = (function() {

  const app = function(obj) {
    this.name = obj.name;
    this.host = obj.host;
    this.data = obj.data;
    return this;
  };

  const go = () => {

    Array.from(document.querySelectorAll('[bind-text]')).forEach((el,i) => {
      el.addEventListener('keyup', () => {
        document.getElementById(el.getAttribute('bind-text')).innerText= el.value;
      })
    });

    Array.from(document.querySelectorAll('[bind-loop]')).forEach((el,i) => {
      let bindLoop = el.getAttribute('bind-loop');
      let appName = bindLoop.substring(0, bindLoop.indexOf(' '));
      let objName = bindLoop.substring(bindLoop.lastIndexOf(' '));
      console.log(objName)

      if(BinderApps.hasOwnProperty(appName)) {
        console.log(BinderApps[appName].data[objName])
        if(BinderApps["myApp"].data.hasOwnProperty(objName)) {
          console.log('yes!');
        }
      }
    });

  };

  return {
    app: app,
    go: go
  }

})();


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
      ] // frameworks
    }
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


Binder.go();
