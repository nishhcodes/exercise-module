// WAP that grades students based on their marks.

// - if greater than 90 then A grade 
// - if between 70 and 90 then a B grade 
// - if between 50 and 70 then a C grade
// - below 50 then and F grade

const students = [
    { name: "Manish", marks: 95 },
    { name: "Shreya", marks: 85 },
    { name: "Priya", marks: 70 },
    { name: "Raju", marks: 65 },
    { name: "Sumit", marks: 91 },
    { name: "Raj", marks: 50 }
  ];
  
  function getGrade(marks) {
    if (marks > 90) return 'A';
    else if (marks >= 70) return 'B';
    else if (marks >= 50) return 'C';
    else return 'D';
  }
  
  students.forEach(student => {
    student.grade = getGrade(student.marks);
    console.log(`${student.name} got ${student.grade} Grade`);
  });