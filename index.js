const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    const developers = data.filter(person => person.profession === "developer");
    developers.forEach(person => console.log(person.name));
  }
  
  // 2. Add Data
  function addData(newData) {
    data.push(newData);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    data = data.filter(person => person.profession !== "admin");
  }
  
  // 4. Concatenate Array
  function concatenateArray(newData) {
    data = data.concat(newData);
  }
  
  // 5. Average Age
  function averageAge() {
    const totalAge = data.reduce((acc, person) => acc + person.age, 0);
    const average = totalAge / data.length;
    return average;
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    return data.every(person => person.age > 25);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = [...new Set(data.map(person => person.profession))];
    return professions;
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
  }
  
  // 9. Update Profession
  function updateJohnsProfession(newProfession) {
    const john = data.find(person => person.name === "john");
    if (john) {
      john.profession = newProfession;
    }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const professionCount = {};
    data.forEach(person => {
      const profession = person.profession;
      professionCount[profession] = (professionCount[profession] || 0) + 1;
    });
    return professionCount;
  }
  