import React, { useState } from "react";
import "./leadcaption.css";

const LeadCaption = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = {
            nome: formData.nome,
            email: formData.email
        };
    
        console.log("Formulário enviado:", formData);
    };

    return (
        <div className="container-form">
            <h3>Para você viver mais e melhor</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome completo <strong style={{ color: "red" }}>*</strong></label>
                    <input
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Digite aqui o seu nome"
                        type="text"
                        required
                    />
                </div>
                <div>
                    <label>Email <strong style={{ color: "red" }}>*</strong></label>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Digite aqui o seu email"
                        type="email"
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default LeadCaption;
