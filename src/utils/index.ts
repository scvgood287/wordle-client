import { CheckResults, AnalysisResult, AnalysisResults } from "@/types";
import { CHECKRESULT_CORRECT, CHECKRESULT_PRESENT, CHECKRESULT_ABSENT } from "@/constants";

const reducedAnalysisResults = (analysisResults: AnalysisResults, letter: string): AnalysisResults => {
  let newAnalysisResults = new Map(analysisResults);
  const analysisResult: AnalysisResult = newAnalysisResults.get(letter)!;
  const prevAmount = analysisResult.amount;

  if (prevAmount > 1) {
    newAnalysisResults.set(letter, {
      ...analysisResult,
      amount: prevAmount - 1,
    });
  } else {
    newAnalysisResults.delete(letter);
  };

  return newAnalysisResults;
};

export const isRealWord = async (word: string): Promise<boolean> => {
  // do something

  return true;
};

export const analyzeWord = (word: string): AnalysisResults => {
  const analysisResults: AnalysisResults = word.split("").reduce((result, letter, i) => {
    if (!result.has(letter)) {
      result.set(letter, {
        indexes: [],
        amount: 0,
      });
    };
    
    const { indexes: prevIndexes, amount: prevAmount } = result.get(letter)!;

    result.set(letter, {
      indexes: [...prevIndexes, i],
      amount: prevAmount + 1,
    });

    return result;
  }, new Map<string, AnalysisResult>());
  
  return analysisResults;
};

export const isCorrectWord = (todaysWord: string, inputWord: string): CheckResults => {
  let todaysWordAnalysisResults: AnalysisResults = analyzeWord(todaysWord);
  let checkResults: CheckResults = [];
  let inputLetters: string[] = inputWord.split("");

  // check correct
  inputLetters.forEach((letter, i) => {
    if (todaysWord[i] === letter) {
      todaysWordAnalysisResults = reducedAnalysisResults(todaysWordAnalysisResults, letter);

      checkResults[i] = CHECKRESULT_CORRECT;
    };
  });

  // check else
  inputLetters.forEach((letter, i) => {
    if (!checkResults[i]) {
      if (!todaysWordAnalysisResults.has(letter)) {
        checkResults[i] = CHECKRESULT_ABSENT;
      } else {
        todaysWordAnalysisResults = reducedAnalysisResults(todaysWordAnalysisResults, letter);
  
        checkResults[i] = CHECKRESULT_PRESENT;
      };
    };
  });

  return checkResults;
};
