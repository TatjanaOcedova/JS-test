//1. Programming Basics
const dishes = [
  "Spaghetti",
  "Lasagne",
  "Beans on toast",
  "Porridge",
  "Tomato soup",
  "Salmon",
];

dishes.forEach(function (food) {
  console.log(food);
});

//2. DOM manipulation
const myButton = document.createElement("button");
myButton.innerText = "Click me";
document.body.appendChild(myButton);

myButton.addEventListener("click", addH1);

function addH1() {
  const textH1 = document.createElement("h1");
  textH1.innerHTML = "Javascript test";
  document.body.appendChild(textH1);
  document.body.style.backgroundColor = "red";
}

//3. Async API calls
async function appiCall() {
  const userName = await fetch("https://reqres.in/api/users");
  const userJson = await userName.json();
  const userData = userJson.data;
  console.log(userData);
  userData.map((element, index) => {
    if (index < 3) {
      const firstName = element.first_name;
      getFirstName(firstName);
    }
  });
}
function getFirstName(name) {
  const nameList = document.createElement("ul");
  document.body.appendChild(nameList);
  const firstNameList = document.createElement("li");
  firstNameList.innerHTML = name;
  nameList.appendChild(firstNameList);
}

appiCall();

//4. Class

class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }
  firstName() {
    return this.firstName;
  }
}

const myName = new Person("Tatjana");
console.log(`Hello my name is
${myName}`);
