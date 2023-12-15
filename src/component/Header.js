import React, { useState } from 'react';

function Header({ isClicked, onClick }) {
  return (
    <h2 id="element1" className={isClicked ? "clicked1" : ""} onClick={onClick}>
      Марущак Яна Сергіївна
    </h2>
  );
}
export default Header