import "../dist/css/Homepage.css";
import logosekolah from "../assets/logo562.png";
import { Button } from "react-bootstrap";
Button;

function TombolLogin() {
  return <button className="TombolSatu">Silahkan Masuk</button>;
}

const HomePage = () => {
  return (
    <div className="Homebage">
      <div className="box1">
        <br />
        <img className="logosekolahkarangjengkol" src={logosekolah} alt="" />
        <br />
        SELAMAT DATANG DI SD <br />
        <span className="span1">MI Ya BAKII KARANGJENGKOL</span>
        <>
          <Button variant="primary" size="sm" active href="Kelas"> "
            Primary button
          </Button>{" "}
        </>
      </div>
    </div>
  );
};

export default HomePage;
