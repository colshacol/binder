
'use strict';

let Binder = (function() {

  // const app = function(obj) {
  //   this.name = obj.name;
  //   this.host = obj.host;
  //   this.data = obj.data;
  //   return this;
  // };

  // [bind-text] ***************
  // ***************************
  Array.from(document.querySelectorAll('[bind-text]')).forEach((el,i) => {
    el.addEventListener('keyup', () => {
      document.getElementById(el.getAttribute('bind-text')).innerText= el.value;
    })
  });

  // [bind-loop] ***************
  // ***************************
  Array.from(document.querySelectorAll('[bind-loop]')).forEach((el,i) => {
    let bindLoop = el.getAttribute('bind-loop');
    let appName = bindLoop.substring(0, bindLoop.indexOf(' '));
    let objName = bindLoop.substring(bindLoop.lastIndexOf(' ') + 1);

    let elHTML = el.innerHTML;
    let literals = elHTML.match(/[{{]+[\s\w]+[}}]+/gmi);


    // If multiple layers of objects are indicated.
    //*********************************************
    if(objName.indexOf('.') >= 0) {
      objName = objName.split('.');

      // If user requests 2 layer object. i.e: objOne.objTwo
      // ***************************************************
      if(objName.length == 2) {
        if(BinderApps[appName].data[objName[0]].hasOwnProperty(objName[1])) {

          literals.forEach((literal, i) => {
            let newValue = literal.match(/[\w]+/g);
            elHTML = elHTML.replace(literal, BinderApps[appName]["data"][objName[0]][objName[1]][newValue])
          });

          el.innerHTML = elHTML;
        };

      // If user requests 3 layer object. i.e: objOne.objTwo.objThree
      // ************************************************************
      } else if(objName.length == 3) {
        if(BinderApps[appName]["data"][objName[0]][objName[1]].hasOwnProperty(objName[2])) {

          literals.forEach((literal, i) => {
            let newValue = literal.match(/[\w]+/g);
            elHTML = elHTML.replace(literal, BinderApps[appName]["data"][objName[0]][objName[1]][objName[2]][newValue])
          });

          el.innerHTML = elHTML;
        };

      // Ii user requests an object more than 3 layers deep.
      // ***************************************************
      } else { // if only one object level
        console.error('Too many objects deep.');
      };


    // If only one object layer is requested.
    // **************************************
    } else {
      if(BinderApps[appName]["data"].hasOwnProperty(objName)) {
        let BinderAppsLevel1 = BinderApps[appName]["data"][objName];

        if(BinderAppsLevel1.length > 1) {
          BinderAppsLevel1.forEach((item, i) => {
            if(i == 0) { // if first iteration
              let elHTMLBackup = elHTML;
              literals.forEach((literal, ii) => {
                let newValue = literal.match(/[\w]+/g);
                elHTMLBackup = elHTMLBackup.replace(literal, BinderApps[appName]["data"][objName][i][newValue]);
                // console.log(elHTML);
              });
              el.innerHTML = elHTMLBackup;


            } else {
              let elHTMLBackup = elHTML;
              literals.forEach((literal, ii) => {
                let newValue = literal.match(/[\w]+/g);
                elHTMLBackup = elHTMLBackup.replace(literal, BinderApps[appName]["data"][objName][i][newValue]);
              })
              el.innerHTML += elHTMLBackup;
            }
          }); // BinderApps... forEach()
        }; // if BinderApps... length > 1
      }; // if BinderApps... has objName
    }; // else
  });

  // Custom component functionality. **************
  // **********************************************
  let elem = (obj) => {
    // stuff.
    return true;
  }

  return {
    app: app,
    elem: elem
  }

})();

// Binder.go();
