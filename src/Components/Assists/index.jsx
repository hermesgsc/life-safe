import "./assists.css";

const Assists = () => {
  return (
    <section className="assist-container">
      <h3>Conheça algumas de nossas coberturas e assistências</h3>

      <div className="cardprincipal">
        <div className="card">
          <img src="./images/cadeira-de-rodas.png" alt="" />
        </div>
      </div>
      <p>Doenças graves</p>

      <div className="cardprincipal">
        <div className="card">
          <img src="./images/acidente.png" alt="" />
        </div>
      </div>
      <p>Morte natural ou acidental</p>

      <div className="cardprincipal">
        <div className="card">
          <img src="./images/morte.png" alt="" />
        </div>
      </div>
      <p>Invalidez por acidente</p>
    </section>
  );
};

export default Assists;
