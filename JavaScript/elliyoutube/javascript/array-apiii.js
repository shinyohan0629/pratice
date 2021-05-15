// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(','); //join으로 string으로 바꿔줄 수 있다. join(구분자) 구분자를 넣어줘서 바꿀 수 있다.
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(','); //단위는 ,(콤마) 자른다
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse(); //배열 자체를 거꾸로 만든다
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2,5); //index n 부터 end는 제외된다 그러기에 + 1 해야한다
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((students) => students.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = stduents.map((student) => student.score); //배열안에 있는 요소들을 다른 값으로 만들고 싶을 때 map을 사용한다
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => stduents.score < 50); //배열 만족되는 하나만 있다면 some을 이용 모든 배열조건이 만족하려면 every를 사용하면 된다
  console.log(result);
}

// Q9. compute students' average score //어렵다 다시 재차 듣자
{
  const result = students.reduce((prev, curr) => {
    consle.log(prev);
    console.log(curr);
    return curr;
  }, 0);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}
