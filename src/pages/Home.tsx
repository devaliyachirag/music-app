import Card from "../components/Card";
import Musics from "../components/Musics";

const Home = () => {
  return (
    <div className="d-flex">
      <div className="col-3">
        <Musics />
      </div>
      <div className="col-9">
        <Card />
      </div>
    </div>
  );
};

export default Home;
