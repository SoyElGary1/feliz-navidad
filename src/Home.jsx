import React from "react";
import TypeIt from "typeit-react";
import "./Home.css";

const SuperStrong = ({ children }) => {
  return <strong style={{ fontSize: "80px" }}>{children}</strong>;
};

export const Home = () => {
  return (
    <div>
      <header>

      </header>

      <section className="bgn">
        <h1 className="titulo">
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .type("Felíz Navidad Miamorcito🎅")
                .pause(750)
                .delete(40)
                .pause(600)
                .type("Este ano 😳 ")
                .pause(600)
                .type("nOooOo 💀 ano noOo 💀")
                .pause(800)
                .delete(22)
                .pause(500)
                .move(-1)
                .delete(1)
                .pause(400)
                .type("ñ")
                .move(2)
                .type(" ha sido muy bonito gracias a tí 💖")
                .pause(600)
                .delete(60)
                .pause(500)
                .type("te quería recordar que eres muy importante para mi ❤️‍🩹")
                .pause(600)
                .delete(100)
                .pause(500)
                .type("y por eso te quería hacer un regalito con mucho cariño y aunque no estemos juntitos")
                .pause(600)
                .delete(100)
                .pause(500)
                .type("recuerda que tu Gary gatito siempre te amará  💖🥹😘🥰🥰🥰😘🥹💖")
                .pause(1200)
                .type(" y mery crismas")
                


              // Remember to return it!
              return instance;
            }}
          />
        </h1>
      </section>
    </div>
  );
};
