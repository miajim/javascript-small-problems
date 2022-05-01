/*
Create a school object. The school object uses the student object from the previous exercise. 
It has methods that use and update information about the student. 
Be sure to check out the previous exercise for the other arguments that might be needed by the school object. 
Implement the following methods for the school object:

addStudent: Adds a student by creating a new student and adding the student to a collection of students. 
  The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. 
  Returns a student object if year is valid otherwise it logs "Invalid Year".
enrollStudent: Enrolls a student in a course.
addGrade: Adds the grade of a student for a course.
getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.
To test your code, use the three student objects listed below. 
Using the three student objects, produces the following values from the getReportCard and courseReport methods respectively.

// getReportCard output
> school.getReportCard(foo);
= Math: 95
= Advanced Math: 90
= Physics: In progress

// courseReport output
> school.courseReport('Math');
= =Math Grades=
= foo: 95
= bar: 91
= qux: 93
= ---
= Course Average: 93

> school.courseReport('Advanced Math');
= =Advanced Math Grades=
= foo: 90
= qux: 90
= ---
= Course Average: 90

> school.courseReport('Physics');
= undefined
*/

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
// foo;
// {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

// bar;
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

// qux;
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }

function createStudent(name, year) {
  return {
    name, 
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student.`);
    }, 
    addCourse(course) {
      if (this.invalidCourse(course)) {
        console.log('Invalid course. Course not added to the list.')
      } else {
        this.courses.push(course);
      }
    }, 
    listCourses() {
      console.log(this.courses);
    },
    addNote(code, note) {
      let course = this.identifyCourse(code);
      course.note = course.note ? `${course.note.concat('; ', note)}` : note;
    },
    updateNote(code, newNote) {
      this.identifyCourse(code).note = newNote;
    }, 
    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) console.log(`${course.name}:`, course.note);
      });
    },
    identifyCourse(code) {
      return this.courses.find(course => course.code === code) || {};
    },
    invalidCourse(course) {
      return !course.hasOwnProperty('name') || !course.hasOwnProperty('code');
    }
  };
}

let foo = createStudent('foo', '3rd');
foo.addCourse({ name: 'Math', code: 101, grade: 95, });
foo.addCourse({ name: 'Advanced Math', code: 102, grade: 90, });
foo.addCourse({ name: 'Physics', code: 202, });
// console.log(foo);

let bar = createStudent('bar', '1st');
bar.addCourse({ name: 'Math', code: 101, grade: 91, });
// console.log(bar);

let qux = createStudent('qux', '2nd');
qux.addCourse({ name: 'Math', code: 101, grade: 93, });
qux.addCourse({ name: 'Advanced Math', code: 102, grade: 90, });
// console.log(qux);

let school = {
  students: [],
  addStudent(student) {
    const YEARS = { '1st': true, '2nd': true, '3rd': true, '4th': true, '5th': true }
    if (YEARS[student.year]) {
      return this.students.push(student);
    } else {
      console.log('Invalid year.');
    }
  },
  enrollStudent(student, course) {
    student.addCourse(course);
  }, 
  addGrade(student, code, grade) {
    student.identifyCourse(code).grade = grade;
  }, 
  getReportCard(student) {
    student.courses.forEach(course => {
      if (course.grade) {
        console.log(`${course.name}: ${course.grade}`);
      } else {
        console.log(`${course.name}:`, 'In progress');
      }
    });
  },
  courseReport(courseName) {
    function calculateAverage(grades) {
      grades = grades.filter(grade => grade);
      let total = grades.reduce((total, grade) => total + grade, 0);
      return total / grades.length;
    }
    
    let courseGrades = this.students.map(student => {
      for (let course of student.courses) {
        if (course.name === courseName) {
          return course.grade;
        }
      }
      return 0;
    });
  
    let average = calculateAverage(courseGrades);
    if (average) {
      console.log(`=${courseName} Grades=`);
      for (let i = 0; i < courseGrades.length; i += 1) {
        if (courseGrades[i]) {
          console.log(`${this.students[i].name}: ${courseGrades[i]}`);
        }
      }
      console.log('---');

      console.log(`Course Average: ${average}`);
    } else { console.log(undefined) };
  },
};

// school.getReportCard(foo);
// school.getReportCard(bar);
// school.getReportCard(qux);

school.addStudent(foo);
school.addStudent(bar);
school.addStudent(qux);


school.courseReport('Math');
// school.courseReport('Advanced Math');
// school.courseReport('Physics');

// Launch School Solution
const school = {
  students: [],
  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      const student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
    }
  },

  enrollStudent(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode})
  },

  addGrade(student, courseName, grade) {
    const course = student.listCourses().filter(({name}) => name === courseName)[0];

    if (course) {
      course.grade = grade;
    }
  },

  getReportCard(student) {
    student.listCourses().forEach(({grade, name}) => {
      if (grade) {
        console.log(`${name}: ${String(grade)}`);
      } else {
        console.log(`${name}: In progress`);
      }
    });
  },

  courseReport(courseName) {
    function getCourse(student, courseName) {
      return student.listCourses().filter(({name}) => name === courseName)[0];
    }

    const courseStudents = this.students.map(student => {
      const course = getCourse(student, courseName) || { grade: undefined };
      return { name: student.name, grade: course.grade };
    }).filter(({grade}) => grade);

    if (courseStudents.length > 0) {
      console.log(`=${courseName} Grades=`);

      const average = courseStudents.reduce((total, {name, grade}) => {
        console.log(`${name}: ${String(grade)}`);
        return total + grade;
      }, 0) / courseStudents.length;

      console.log('---');
      console.log(`Course Average: ${String(average)}`);
    }
  },
};