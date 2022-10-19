student1 = {
	name: "person 1",
	id: 1,
	grade: 11,
	classes: ["math", "science"],
};

student2 = {
	name: "person 2",
	id: 2,
	grade: 10,
	classes: ["math", "science", "history", "english"],
};

student3 = {
	name: "person 3",
	id: 3,
	grade: 9,
	classes: ["science", "history"],
};

student4 = {
	name: "person 4",
	id: 4,
	grade: 12,
	classes: ["math", "science", "history"],
};

students = [student1, student2, student3, student4];

// Part 1
console.log('Part 1');
students.forEach((s) => {
    console.log(s.name);
});

// Part 2
console.log('Part 2');
students.forEach((s) => {
    console.log(s.classes);
});

// Part 3
console.log('Part 3');
filteredStudents = students.filter((s) => {
    return s.grade > 10;
});

filteredStudents.forEach((s) => {
	console.log(s);
});