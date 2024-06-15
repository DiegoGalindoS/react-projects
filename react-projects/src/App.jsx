import { XFollowCard } from "./XFollowCard";
import "./App.css";
const users = [
  {
    username: "PhysicsToday",
    profilename: "PhysicsToday",
    isfollowing: true,
  },
  {
    username: "ScienceMagazine",
    profilename: "Science Magazine",
    isfollowing: false,
  },
  {
    username: "NASA",
    profilename: "NASA",
    isfollowing: true,
  },
  {
    username: "elonmusk",
    profilename: "Elon Musk",
    isfollowing: true,
  },
];
export function App() {
  return (
    <section className="App">
      {users.map(({ username, profilename, isfollowing }) => (
        <XFollowCard
          username={username}
          name={profilename}
          initialState={isfollowing}
        ></XFollowCard>
      ))}
    </section>
  );
}
