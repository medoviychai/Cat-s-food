import "./App.scss";
import {useState} from 'react';

function App() {

  const [flag, setFlag] = useState(false);


  const selectedCard = (e) => {
    e.target.classList.toggle('selected-item');
    e.target.classList.toggle('catalog-item');
    const weight = document.querySelector('.weight');
    weight.classList.toggle('selected-weight');

    setFlag(true);
  }

  return (
    <div className="App">
      <div className="box">
        <h1 className="title">Ты сегодня покормил кота?</h1>
        <div className="catalog">
          <div className="catalog-item-conteiner">
            <div className="catalog-item" onClick={selectedCard}>
              <p className="additional-description">
                Сказочное заморское яство
              </p>
              <h3 className="food-title">
                <span className="highlight-food-title">Нямушка</span> с фуа-гра
              </h3>
              <p className="main-description">
                <p>10 порций</p>
                <p>мышь в подарок</p>
              </p>
              <img className="cat-image" src="images/Photo.png" alt="cat"></img>
              <div className="weight">
                <span className="weight-count">0,5</span>{" "}
                <span className="weight-measurement">кг</span>
              </div>
            </div>
            <p className="buy-food">
              Чего сидишь? Порадуй котэ, <span className='highlights-to-buy'>купи</span>.
            </p>
          </div>
          <div className="catalog-item-conteiner">
            <div className="catalog-item">
              <p className="additional-description">
                Сказочное заморское яство
              </p>
              <h3 className="food-title">
                <span className="highlight-food-title">Нямушка</span> с рыбой
              </h3>
              <p className="main-description">
                <p>40 порций</p>
                <p>2 мыши в подарок</p>
              </p>
              <img className="cat-image" src="images/Photo.png" alt="cat"></img>
              <div className="weight">
                <span className="weight-count">2</span>{" "}
                <span className="weight-measurement">кг</span>
              </div>
            </div>
            <p className="buy-food">
            Чего сидишь? Порадуй котэ, <span className='highlights-to-buy'>купи</span>.
            </p>
          </div>
          <div className="catalog-item-conteiner">
            <div className="catalog-item">
              <p className="additional-description">
                Сказочное заморское яство
              </p>
              <h3 className="food-title">
                <span className="highlight-food-title">Нямушка</span> с курой
              </h3>
              <p className="main-description">
                <p>100 порций</p>
                <p>5 мышей в подарок</p>
                <p>заказчик доволен</p>
              </p>
              <img className="cat-image" src="images/Photo.png" alt="cat"></img>
              <div className="weight">
                <span className="weight-count">5</span>{" "}
                <span className="weight-measurement">кг</span>
              </div>
            </div>
            <p className="buy-food">
              Чего сидишь? Порадуй котэ, <span className='highlights-to-buy'>купи</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
