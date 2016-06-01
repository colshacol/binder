let Binder = {
    makeBlue: function(elementId) {
      document.getElementById(elementId).style.color = 'blue';
    },
    makeRed: (elementId) => {
      document.getElementById(elementId).style.color = 'red';
    },

    newHost: (obj) => {

    }

};

Binder.makeBlue('message');
Binder.makeRed('para');
