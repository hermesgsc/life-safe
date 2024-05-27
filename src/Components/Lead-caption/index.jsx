
import "./leadcaption.css";

const LeadCaption = () => {

    return (
        <div id='Lead' className="container-form">
            <h3>Para você viver mais e melhor</h3>
            <form>
                <div>
                    <label>Nome completo <strong style={{ color: "red" }}>*</strong></label>
                    <input
                        name="nome"
                        placeholder="Digite aqui o seu nome"
                        type="text"
                        required
                    />
                </div>
                <div>
                    <label>Email <strong style={{ color: "red" }}>*</strong></label>
                    <input
                        name="email"
                        placeholder="Digite aqui o seu email"
                        type="email"
                        required
                    />
                </div>
                <div className="button-container">
                <button className="button-send" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
};

export default LeadCaption;
