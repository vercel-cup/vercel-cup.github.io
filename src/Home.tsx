import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "~/components/ui/card";

import { matchProgram, teams } from "~/lib/data.ts";

function Home() {
  const dtf = new Intl.DateTimeFormat("fr", {
    dateStyle: "full",
    timeStyle: "short",
  });

  const nextMatch = matchProgram[0];
  const nextMatchTeams = nextMatch.teams.map((teamId) => teams[teamId]);

  return (
    <div className="container flex flex-auto flex-col items-center justify-center gap-4">
      <p className="text-2xl font-bold">Prochain match</p>
      <Card className="w-[20rem]">
        <CardHeader>
          <CardTitle>{nextMatch.name}</CardTitle>
          <CardDescription>{dtf.format(nextMatch.date)}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col divide-y">
          {nextMatchTeams.map((team) => {
            return (
              <div className="flex gap-2 align-top">
                <img className="h-4 rounded" src={team.icon} />
                <span>{team.name}</span>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
