let age = ""
let school=""

function whichSchool(age) {
  if (age < 13) {
    school ="Elementary School"
    return (school);
  } else if (age >= 13 && age <= 18) {
   school="Secondary School"
    return (school);
  } else {
    school="Lighthouse Labs"
    return (school);
  }
}