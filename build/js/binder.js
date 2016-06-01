
'use strict';

const Binder = (function() {

  // const app = function(obj) {
  //   this.name = obj.name;
  //   this.host = obj.host;
  //   this.data = obj.data;
  //   return this;
  // };

  (() => {

    Array.from(document.querySelectorAll('[bind-text]')).forEach((el,i) => {
      el.addEventListener('keyup', () => {
        document.getElementById(el.getAttribute('bind-text')).innerText= el.value;
      })
    });

    Array.from(document.querySelectorAll('[bind-loop]')).forEach((el,i) => {
      let bindLoop = el.getAttribute('bind-loop');
      let appName = bindLoop.substring(0, bindLoop.indexOf(' '));
      let objName = bindLoop.substring(bindLoop.lastIndexOf(' ') + 1);
      let elHTML = el.innerHTML;

      if(objName.indexOf('.') >= 0) {
        objName = objName.split('.');

        if(objName.length == 2) {
          if(BinderApps[appName].data[objName[0]].hasOwnProperty(objName[1])) {
            let literals = elHTML.match(/[{{]+[\s\w]+[}}]+/gmi);

            literals.forEach((literal, i) => {
              let newValue = literal.match(/[\w]+/g);
              elHTML = elHTML.replace(literal, BinderApps[appName]["data"][objName[0]][objName[1]][newValue])
            });

            el.innerHTML = elHTML;

          };
        };
      };
    });


  })();

  return {
    app: app
  }

})();

// Binder.go();
