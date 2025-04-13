import React, { useState } from "react";
import "../styles/formulaire.css";


const Formulaire = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setsubmit] = useState(false);

  const add = (e) => {
    e.preventDefault();
    if (nom && email) {
      setsubmit(true);
    } else {
      alert("veuillez remplir tout les champs");
    }
  };

  return (
    <div>
      <form onSubmit={add} className="formulaire">
        <h2 className="titre">Formulaire d'afficharge</h2>
        <input className="nom"
          type="text"
          value={nom}
          placeholder="entrer votre nom"
          onChange={(e) => setNom(e.target.value)}
        />
        <input className="email"
          type="text"
          value={email}
          placeholder="entrer votre email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">ajouter</button>
      </form>

      {submit && (
        <>
          <p>le nom est:{nom}</p>
          <p>l email est:{email}</p>
        </>
      )}
    </div>
  );
};

export default Formulaire;
