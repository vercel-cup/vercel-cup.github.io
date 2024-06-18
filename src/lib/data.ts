export type Team = {
  id: number;
  name: string;
};

export type Match = {
  name: string;
  date: string;
  teams: number[] | Team[];
  score: number[];
};

export type Database = {
  matches: Match[];
  teams: Team[];
  pools: [];
  finals: [];
};
