export type Team = {
  id: number;
  name: string;
};

export type PastMatch = {
  name: string;
  date: string;
  teams: number[] | Team[];
  score: number[];
};

export type Match = {
  name: string;
  date: string;
  teams: number[] | Team[];
};

export type Database = {
  past_matches: PastMatch[];
  next_matches: Match[];
  teams: Team[];
  pools: [];
  finals: [];
};
