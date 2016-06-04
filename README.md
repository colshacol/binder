# BINDER

```
let myApp = new Binder.app({
  name: "myApp",
  host: "#element",
  data: {
    frameworks: [
      {
        name: "react",
        sucksBecause: "Too complicated."
      },
      {
        name: "angular",
        sucksBecause: "Too ugly."
      },
      {
        name: "vue",
        sucksBecause: "I didn't create it."
      }
    ]
  }
});
```

Binder is a practice project that I took on to attempt to understand how MV- frameworks work. It currently supports three features:

- **Two way data binding.** Using the `[bind-text]` attribute, we can bind the value of an input field to the content of a separate text element. In the following example, anything the user types into the input will replace the default text inside of the `#heading` element.
```
<h1 id='heading'>Data Binding</h1>

<form>
  <input type='text' bind-text='heading'>
</input>
```

- **Templating** Templates can be created and bound to elements using the third feature, data looping. Here is an example template that we will be using in coordination with the example of data looping:
```
<template id='myTemplate'>
<h1>Name: {{ name }}</h1>
<h2>Sucks Because: {{ sucksBecause }}</h2>
<hr>
```

- **Data Looping** Data looping utilizes templates and the `Binder.app` object, using the `[bind-temp]` and `[bind-loop]` attributes. Although the followind `<div>` is empty upon creation, Binder will populate it with the appropriate information based on the developer's input.
```
<div bind-temp='myTemplate' bind-loop='myApp frameworks'>
</div>
```

Once Binder is finished with its tasks, the previous code will have been transformed into:
```
<div>
  <h1>Name: react</h1>
  <h2>Sucks Because: Too compicated.</h2>
  <hr>

  <h1>Name: angular</h1>
  <h2>Sucks Because: Too ugly.</h2>
  <hr>

  <h1>Name: vue</h1>
  <h2>Sucks Because: I didn't create it.</h2>
  <hr>
</div>
```

### Binder is not meant to be revolutionary nor any kind of game changer. Furthermore; it was not created with a specific use case in mind. This project is merely for practice. No hate, yo!
