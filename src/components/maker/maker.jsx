import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);

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

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
