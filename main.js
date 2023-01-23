//async
//Async function- setTimeOut: (async)
console.log("Hi Bootcamp people!");
setTimeout(() => {
  console.log("today?");
}, 3000);
console.log("How are you?");


//Promise- get object state: (pending/fulfilled/rejected)
let promiseState = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello world");
    console.log(promiseState);
  }, 4000);
});
console.log(promiseState);


//Promise- get object value: (fulfilled- "hello world")
let promiseValue = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello world");
  }, 4000);
});
promiseValue
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.error(error));
console.log(promiseValue);


//Promise- get object value: (rejected- "Some Error!")
const errorString = "Some Error!";
let promiseError = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error(errorString));
  }, 4000);
});
promiseError
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.log(error));
console.log(promiseError);


//Api- fetch:
const fetchButton = document.getElementById("fetchButton");
fetchButton.addEventListener("click", () => {
  document.getElementById("output").innerHTML = "Loading...";
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      console.log(data);
      document.getElementById("output").innerHTML = "Loaded!";
      data.map((obj) => {
        const studentName = document
          .getElementById("output")
          .appendChild(document.createElement("p"));
        const studentId = document
          .getElementById("output")
          .appendChild(document.createElement("p"));
        studentName.textContent = "Title: " + obj.title;
        studentId.textContent = "Id: " + obj.id;
        document.body.appendChild(studentName);
        document.body.appendChild(studentId);
      });
      document.getElementById("output").classList.add("success");
    })
    .catch((error) => {
      document.getElementById("output").innerHTML = error.message;
      document.getElementById("output").classList.add("error");
    });
});


//dubugger:
let firstNum = 10;
let secondNum = 20;
if (secondNum > firstNum) {
  //debugger;
  console.log(secondNum);
}
