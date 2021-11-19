let current_value = [];

export const getValueToMark = () => {
  return current_value; 
}

export const changeValueToMark = (question_value, answer_value) => {
  const value_mark = {
    question: question_value,
    answer: answer_value
  }

  if(!verifyExistValue(question_value)) {
    current_value.push(value_mark);
  }
}

const verifyExistValue = (question_value) => {
  const value_exist = current_value.some(function(value) {
    return value['question'] == question_value;
  })

  return value_exist;
}

export const clearValueToMark = () => {
  current_value = [];
}
