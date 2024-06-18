import { useEffect, useState } from "react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "~/components/ui/card";
import { Database, Match, Team } from "./lib/data";

function Home() {
  const [nextMatch, setNextMatch] = useState(null as null | Match);
  const dtf = new Intl.DateTimeFormat("fr", {
    dateStyle: "full",
    timeStyle: "short",
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("./database.json");
      const json = (await response.json()) as Database;
      json.matches[0].teams = json.matches[0].teams.map(
        (teamId) => json.teams.find((team) => team.id === teamId) as Team,
      );
      console.log(json.matches[0]);
      setNextMatch(json.matches[0]);
    }

    if (nextMatch == null) {
      fetchData();
    }
  });

  return (
    <div className="container flex flex-auto flex-col items-center justify-center gap-4">
      {nextMatch != null && (
        <>
          <p className="text-2xl font-bold">Prochain match</p>
          <Card className="w-[20rem]">
            <CardHeader>
              <CardTitle>{nextMatch.name}</CardTitle>
              <CardDescription>
                {dtf.format(parseInt(nextMatch.date))}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {(nextMatch.teams[0] as Team).name} <hr />
              {(nextMatch.teams[1] as Team).name}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

export default Home;
