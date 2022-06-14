// 1. Create a multidimensional array to hold quiz questions and answers
const quizArray = [
  ['What does “www” stand for in a website browser?', 'World Wide Web'],
  ['What is the name of the biggest technology company in South Korea?', 'Samsung'],
  ['What is the name of the largest ocean on earth?', 'Pacific Ocean'],
  ['What is the rarest M&M color?', 'Brown'],
  ['Which is the only edible food that never goes bad?', 'Honey'],
  ['What is "cynophobia"?', 'Fear of dogs'],
];

// 2. Store the number of questions answered correctly
let score = 0;
const correctQuestion = [];
const wrongQuestion = [];
/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for (let i = 0; i < quizArray.length; i++){
    let questionVal = quizArray[i][0];
    let answerVal = quizArray[i][1];
    let response = prompt(questionVal);
  
  if (response.toLowerCase() == answerVal.toLowerCase()){
    score++;
    correctQuestion.push(questionVal);
  } else{
    wrongQuestion.push(questionVal);                      
  }
};

// 4. Display the number of correct answers to the user

function orderList(arr){
  let message = '<ol>';
  for (let i = 0; i < arr.length; i++){
    message += `<li>${arr[i]}</li>`;
  }
  return message += '</ol>';
}

  document.querySelector('main').innerHTML = `<h1>You got ${score} correct answer</h1>
                                              <h2>You got these questions right:</h2> ${orderList(correctQuestion)}
                                              <h2>You got these questions wrong:</h2> ${orderList(wrongQuestion)}
                                              `;
