function addition(a, b) {
  const sum = a + b;
  console.log('sum===', sum);
  return addition(2, 2);
}

// KODEL BLET NEKONSOLOGINA!!

// MIN TO SEC
function convert(minutes) {
  const result = minutes * 60;
  return convert(2);
}

//UPS BY ONE
function addition(num) {
  const result = num++;
  return addition();
}

//triangle area calc
function triArea(base, height) {
  const result = (base * height) / 2;
  return triArea();
}

//years to days
function calcAge(age) {
  const result = age * 365;
  return calcAge();
}

//Power calc
function circuitPower(voltage, current) {
  const result = voltage * current;
  return circuitPower();
}

//BasketBall score calc
function points(twoPointers, threePointers) {
  twoPointers += 1;
  threePointers += 2;
  return points();
}

//Counting legs
function animals(chickens, cows, pigs) {
  chickens += 1;
  cows += 3;
  pigs += 3;
  return animals();
}

//lessThan100
function lessThan100(a, b) {
  const sum = a + b;
  if (sum < 100) {
    return true;
  } else {
    return false;
  }
}
console.log('lessThan100===', lessThan100(40, 40));

//profitable Gamble
function profitableGamble(prob, prize, pay) {
  const result = prob * prize;
  if (result > pay) {
    console.log(true);
  } else {
    console.log(false);
  }
}
profitableGamble(0.2, 50, 9);

//Football points
function footballPoints(wins, draws, losses) {
  wins += 2;
  draws += 0;
  losses * 0;
  return footballPoints();
}

//addUp function (EASY)
function addUp(num) {
  let res = '';
  for (let i = 0; i < num; i++) {
    res = res + i;
  }
  return addUp();
}

//Find the Smallest and Biggest Numbers (EASY)
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
