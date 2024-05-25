import "./wecare.css";

const WeCare = () => {
  return (
    <section className="container-wecare">
      <img src="./images/wecare.png" alt="" />

      <div className="overlay-title">
        <h3>Sua segurança é o que importa</h3>
      </div>
      <div className="overlay-text">
        <p>+ de 1 milhão de clientes atendidos</p>
        <p>50 anos de experiência</p>
        <p>Franquias em todos os estados do Brasil</p>
        <p>Suporte 24 horas disponível</p>
      </div>
      <div className="image-logo2">
          <img src="./images/mobilelogo2.png" alt="" />
        </div>
    </section>
  );
};

export default WeCare;
