const scores = [85, 92, 58, 74, 66, 100, 43];
const names = ["민수", "지은", "도윤", "서연", "하준", "유나", "지호"];

console.log("1번");
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(85));
console.log(getGrade(92));
console.log(getGrade(58));
console.log(getGrade(74));
console.log(getGrade(66));
console.log(getGrade(100));
console.log(getGrade(43));

console.log("2번");
function isPassed(score) {
  if (score >= 60) {
    return "true";
  } else {
    return "false";
  }
}

console.log(isPassed(85));
console.log(isPassed(92));
console.log(isPassed(58));
console.log(isPassed(74));
console.log(isPassed(66));
console.log(isPassed(100));
console.log(isPassed(43));

console.log("3번");
function getAverage(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
}

console.log(getAverage(scores));

console.log("4번");
function getPassedScores(scores) {
  return scores.filter((score) => {
    return score >= 60;
  });
}

console.log(getPassedScores(scores));

console.log("5번");
function getScoreMessages(scores) {
  return scores.map((score) => {
    return `${score}점은 ${getGrade(score)}등급입니다.`;
  });
}
console.log(getScoreMessages(scores));

console.log("6번");

function printScoreReport(scores) {
  return scores.forEach((score) => {
    console.log(
      `${score}점: ${getGrade(score)}등급, ${score >= 60 ? "합격" : "불합격"}`,
    );
  });
}
console.log(printScoreReport(scores));

console.log("7번");

function printSummary(scores) {
  console.log(
    `평균 점수: ${getAverage(scores)}점\n합격 점수: ${getPassedScores(scores)}\n점수 설명:\n${getScoreMessages(scores)}\n`,
  );
}

console.log(printSummary(scores));

console.log("도전문제");

function printNamedScoreReport(names, scores) {
  return scores.forEach((score, index) => {
    console.log(
      `${names[index]}: ${score}점, ${getGrade(score)}등급, ${score >= 60 ? "합격" : "불합격"}`,
    );
  });
}

console.log(printNamedScoreReport(names, scores));
