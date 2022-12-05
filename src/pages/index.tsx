import type { NextPage } from "next";
import { Posts } from "@/components/Post";

const Home: NextPage = () => {

  return (
    <div>
      <pre>
        <Posts />
      </pre>
    </div>
  );
};

export default Home;
