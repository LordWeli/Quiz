let current_value = 1;

export const changeScoreValues = (change=false) => {
  if(change) {
    current_value = current_value + 1;
  }

  return {
    current: current_value,
    total: 20
  }
}

export const clearScoreValues = () => {
  current_value = 1;
}

let correct_value = 0;

export const changeCorrectValues = (change) => {
  if(change) {
    correct_value = correct_value + 1;
  }

  return {
    current: correct_value,
    total: 20
  }
}

export const clearCorrectValues = () => {
  correct_value = 0;
}