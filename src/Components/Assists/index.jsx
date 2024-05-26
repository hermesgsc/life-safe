import "./assists.css";

const Assists = () => {
  return (
    <section className="container-all">
      <div className="container-text">
      <h1> Conheça algumas de nossas coberturas e assistências</h1>
      </div>
      <div className="container-principal">
        <div className="container-card">
          <div className="card">
            <img src="./images/cadeira-de-rodas.png" alt="dsada" />
          </div>
          <p>Doenças graves</p>
        </div>

        <div className="container-card">
          <div className="card">
            <img src="./images/morte.png" alt="dsada" />
          </div>
          <p>Morte natural ou acidental</p>
        </div>

        <div className="container-card">
          <div className="card">
            <img src="./images/acidente.png" alt="dsada" />
          </div>
          <p>Invalidez por acidente</p>
        </div>
      </div>
    </section>
  );
};

export default Assists;
