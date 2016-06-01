let Binder = {
    makeBlue: function(elementId) {
      document.getElementById(elementId).style.color = 'blue';
    },
    makeRed: (elementId) => {
      document.getElementById(elementId).style.color = 'red';
    },

    newHost: (obj) => {
    // host, bindings[]
      console.log(`the host is ${obj.host}`);
      console.log(`the bindings are [${obj.bindings}]`)
    }

};

Binder.makeBlue('message');
Binder.makeRed('para');
Binder.newHost({
  host: "app"
});


let myApp = Binder.newHost({
  host: "para",
  bindings: ['message', 'words']
});
