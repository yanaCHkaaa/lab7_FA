import React, { useState } from 'react';
import './App.css';
import Header from "./component/Header"
import Image from "./component/Image"

class Content extends React.Component {
  render() {
    return (
      <div>
        <Header isClicked={this.props.isClicked1} onClick={this.props.handleElement1Click} />
        <p
          id="element2"
          className={this.props.isClicked2 ? "clicked2" : ""}
          onClick={this.props.handleElement2Click}
        >
          Місце народження: 08.10.2003, м. Нетішин
        </p>
        <p>Освіта: середня - Нетішинський навчально-виховний комплекс «Загальноосвітня школа І-ІІ ступенів та ліцей» м. Нетішин;<br />&nbsp;&emsp;&nbsp;&emsp;&emsp;вища - НТУУ "КПІ" м.Київ</p>

        <p>Хобі</p>
        <ul>
          <li>Акторство</li>
          <li>Танці</li>
          <li>Читання</li>
        </ul>

        <p>Улюблені книги</p>
        <ol>
          <li>"І не лишилось жодного" Агата Крісті</li>
          <li>"Янголи і Демони" Ден Браун</li>
          <li>"Гордість і Упередженість" Джейн Остен</li>
        </ol>

        <p>Будапе́шт (угор. Budapest) — місто на Дунаї, столиця Угорщини. 1873 року міста Пешт (угор. Pest — грубка), яке лежало на східному боці річки Дунай, Буда (лат. Buda) і Обуда (угор. Obuda, обидва — на західному боці річки) було об'єднано в одне місто під назвою Будапешт.Будапе́шт (угор. Budapest) — місто на Дунаї, столиця Угорщини. 1873 року міста Пешт (угор. Pest — грубка), яке лежало на східному боці річки Дунай, Буда (лат. Buda) і Обуда (угор. Obuda, обидва — на західному боці річки) було об'єднано в одне місто під назвою Будапешт.</p>
        
        <Image />

        <button className="button" id="addButton" onClick={this.props.handleAddButtonClick}>
          Додати
        </button>
        <button className="button" id="deleteButton" onClick={this.props.handleDeleteButtonClick}>
          Видалити
        </button>
        <button className="button" id="increaseButton" onClick={this.props.handleIncreaseButtonClick}>
          Збільшити
        </button>
        <button className="button" id="decreaseButton" onClick={this.props.handleDecreaseButtonClick}>
          Зменшити
        </button>
      </div>
    );
  }
}

function App() {
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);

  const handleElement1Click = () => {
    setIsClicked1(!isClicked1);
  };

  const handleElement2Click = () => {
    setIsClicked2(!isClicked2);
  };

  const handleAddButtonClick = () => {
    const newContainer = document.createElement("div");
    newContainer.classList.add("image-container");

    const newImage = document.createElement("img");
    const currentImage = document.getElementById("image");

    newImage.src = currentImage.src;
    newImage.alt = currentImage.alt;
    newImage.classList.add("added-image");
    newImage.setAttribute("data-scale", "1.0");

    newContainer.appendChild(newImage);
    document.body.appendChild(newContainer);
  };

  const handleDeleteButtonClick = () => {
    const addedImages = document.querySelectorAll("img.added-image");
    addedImages.forEach((addedImage) => {
      addedImage.remove();
    });
  };

  const handleIncreaseButtonClick = () => {
    const addedImages = document.querySelectorAll("img.added-image");
    addedImages.forEach((addedImage) => {
      let currentScale = parseFloat(addedImage.getAttribute("data-scale"));
      currentScale += 0.1;
      addedImage.style.transform = `scale(${currentScale})`;
      addedImage.setAttribute("data-scale", currentScale.toString());
    });
  };

  const handleDecreaseButtonClick = () => {
    const addedImages = document.querySelectorAll("img.added-image");
    addedImages.forEach((addedImage) => {
      let currentScale = parseFloat(addedImage.getAttribute("data-scale"));
      currentScale -= 0.1;
      if (currentScale < 0.1) {
        currentScale = 0.1;
      }
      addedImage.style.transform = `scale(${currentScale})`;
      addedImage.setAttribute("data-scale", currentScale.toString());
    });
  };

  return (
    <div>
      <Content
        isClicked1={isClicked1}
        isClicked2={isClicked2}
        handleElement1Click={handleElement1Click}
        handleElement2Click={handleElement2Click}
        handleAddButtonClick={handleAddButtonClick}
        handleDeleteButtonClick={handleDeleteButtonClick}
        handleIncreaseButtonClick={handleIncreaseButtonClick}
        handleDecreaseButtonClick={handleDecreaseButtonClick}
      />
    </div>
  );
}

export default App;