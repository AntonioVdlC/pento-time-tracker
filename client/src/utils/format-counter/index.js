const formatCounter = counter => {
  if (!Number.isInteger(counter)) {
    throw new TypeError('`counter` needs to be an Integer.');
  }

  let hours = `0${Math.floor(counter / 3600)}`.slice(-2);
  let minutes = `0${Math.floor((counter - hours * 3600) / 60)}`.slice(-2);
  let seconds = `0${Math.floor(counter % 60)}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
};

export default formatCounter;
