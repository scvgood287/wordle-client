// state

export type Theme = "dark" | "light";

// else

export type CheckResult = "CHECKRESULT_CORRECT" | "CHECKRESULT_PRESENT" | "CHECKRESULT_ABSENT";
export type CheckResults = CheckResult[];

export interface AnalysisResult {
  indexes: number[];
  amount: number;
};

export type AnalysisResults = Map<string, AnalysisResult>;