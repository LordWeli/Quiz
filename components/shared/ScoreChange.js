let current_value = 19;

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
  current_value = 19;
}
