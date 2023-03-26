let century
let indexOfDay
let userAkanName
let gender
let day, month, year, date

//Akan Males names
let maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
//Akan Female names
let femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

window.onload = () => {
  // Set Date
  document.getElementById('date').addEventListener('input', function () {
    date = document.getElementById('date').value
  })
  // Set Gender
  document.getElementById('gender').addEventListener('input', function () {
    gender = document.getElementById('gender').value
  })
}

function submitFields() {
  // Ensure all parts of the date are provided
  if (date.split('-').length != 3) {
    alert('Date format incorrect!')
    return
  }

  day = date.split('-')[0]
  month = date.split('-')[1]
  year = date.split('-')[2]

  // checks if day is valid
  if (!isNaN(day)) {
    // test for an invalid date less than 1 and greater than 31
    if (day <= 0 || day >= 32) {
      alert(day + ' is not a valid day')
      return
    }
  } else {
    alert(value + ' is Not a Day Number')
    return
  }

  // checks if month is valid
  if (!isNaN(month)) {
    // test for an invalid date less than 1 and greater than 31
    if (month <= 0 || month >= 13) {
      alert(month + ' is not a valid Month Number')
      return
    }
  } else {
    alert(month + ' is Not a Month Number')
    return
  }

  // Checks if year is valid
  if (!isNaN(year)) {
    century = year.slice(0, 2)
    year = year.slice(2)
  } else {
    alert(year + ' is Not a Birth Year')
    return
  }

  // calculate the day of the week
  indexOfDay =
    Math.floor(century / 4 - 2 * century - 1 + (5 * year) / 4 + (26 * (month + 1)) / 10 + day) %
    7

  if (gender == 'm') {
    userAkanName = maleNames[indexOfDay]
  } else if (gender == 'fm') {
    userAkanName = femaleNames[indexOfDay]
  } else {
    alert('Gender is Unknown')
    return
  }

  document.getElementById("akanName").innerText = `Your akan name is ${userAkanName}`
}
