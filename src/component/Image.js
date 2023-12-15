import React, { useState } from 'react';

function Image() {
    return (
      <div className="image-container">
        <a href="https://budapest.hu/sites/english/Lapok/default.aspx">
          <img
            src="https://whc.unesco.org/uploads/thumbs/site_0400_0040-750-750-20130919125144.jpg"
            alt="Фото міста"
            id="image"
          />
        </a>
      </div>
    );
  }

  export default Image