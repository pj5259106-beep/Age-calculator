//html mai jiska id btn hai usko select karke btnE1 variable mai store krega 
// const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    if (age.years < 0) {
      alert("Please enter a valid date of birth");
      return;
    }
    resultEl.innerText = `Your age is ${age.years} years, ${age.months} months, ${age.days} days old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  let years = currentDate.getFullYear() - birthdayDate.getFullYear();
  let months = currentDate.getMonth() - birthdayDate.getMonth();
  let days = currentDate.getDate() - birthdayDate.getDate();

  // Adjust for negative days
  if (days < 0) {
    months--;
    const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, birthdayDate.getDate());
    days += (new Date(currentDate.getFullYear(), currentDate.getMonth(), 0)).getDate();
  }

  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

btnEl.addEventListener("click", calculateAge);
