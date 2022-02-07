import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: "Ellie",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "dream.coder.ellie@gmail.com",
      message: "Don't forget to code your dream",
      fileName: "ellie",
      fileURL: "ellie.png",
    },
    2: {
      id: 2,
      name: "Ellie",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "dream.coder.ellie@gmail.com",
      message: "Don't forget to code your dream",
      fileName: "ellie",
      fileURL: "ellie.png",
    },
    3: {
      id: 3,
      name: "Ellie",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "dream.coder.ellie@gmail.com",
      message: "Don't forget to code your dream",
      fileName: "ellie",
      fileURL: null,
    },
  });

  // 현재 페이지의 location object 확인
  const location = useLocation();
  console.log("state", location.state);

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const createOrupdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      console.log('card', card);
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrupdateCard}
          updateCard={createOrupdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
