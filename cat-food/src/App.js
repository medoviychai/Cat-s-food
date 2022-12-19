import "./App.scss";
import {useState} from 'react';

function App() {

  const [arrOfCarts, setArrOfCarts] = useState([
    {
      itemClassName: 'catalog-item',
      weightClassName: 'weight',
      filling: "с фуа-гра",
      portions: "10 порций",
      gift: "мышь в подарок",
      weight: "0,5",
      add: null,
      description: 'Печень утки разварная с артишоками.',
      outOfStuckDescription: 'Печалька, с фуа-гра закончился.',
      inStock: true,
    },
    {
      itemClassName: 'selected-item',
      weightClassName: 'selected-weight',
      filling: "с рыбой",
      portions: "40 порций",
      gift: "2 мыши в подарок",
      weight: "2",
      add: null,
      description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      outOfStuckDescription: 'Печалька, с рыбой закончился.',
      inStock: true,
    },
    {
      itemClassName: 'out-of-stock-item',
      weightClassName: 'out-of-stock-weight',
      filling: "с курой",
      portions: "100 порций",
      gift: "5 мышей в подарок",
      weight: "5",
      add: 'заказчик доволен',
      description: 'Филе из цыплят с трюфелями в бульоне.',
      outOfStuckDescription: 'Печалька, с курой закончился.',
      inStock: false,
    },
  ]);

  const [flag, setFlag] = useState(true);

  const selectedCard = (i) => {
    let newArr = [];
    arrOfCarts.map((item, index) => {
      if (i === index) {
        if (item.itemClassName === 'out-of-stock-item') {
          return newArr = arrOfCarts;
        } else {
          item.itemClassName === 'catalog-item' ? item.itemClassName = 'selected-item' : item.itemClassName = 'catalog-item';
          item.weightClassName === 'weight' ? item.weightClassName = 'selected-weight' : item.weightClassName = 'weight';
          
        }
        }
        newArr.push(item);
        
    })
    setArrOfCarts(newArr)
  }

  return (
    <div className="App">
      <div className="box">
        <h1 className="title">Ты сегодня покормил кота?</h1>
        <div className="catalog">
          {arrOfCarts.map((item, index) => (
            <div className="catalog-item-conteiner">
              <div
                className={item.itemClassName}
                onClick={() => {
                  selectedCard(index);
                }}
              >
                <p className="additional-description"></p>
                <h3 className="food-title">
                  <span className="highlight-food-title">Нямушка</span>{" "}
                  {item.filling}
                </h3>
                <p className="main-description">
                  <p>{item.portions}</p>
                  <p>{item.gift}</p>
                  {item.add === null ? <span></span> : <p>{item.add}</p>}
                </p>
                <img
                  className="cat-image"
                  src="images/Photo.png"
                  alt="cat"
                ></img>
                <div className={item.weightClassName}>
                  <span className="weight-count">{item.weight}</span>
                  <span className="weight-measurement">кг</span>
                </div>
              </div>
              {item.itemClassName === "selected-item" ||
              item.itemClassName === "catalog-item" ? (
                item.itemClassName === "selected-item" ? (
                  <p className="buy-food">{item.description}</p>
                ) : (
                  <p className="buy-food">
                    Чего сидишь? Порадуй котэ,{" "}
                    <span
                      className="highlights-to-buy"
                      onClick={() => {
                        selectedCard(index);
                      }}
                    >
                      купи
                    </span>
                    .
                  </p>
                )
              ) : item.itemClassName === "out-of-stock-item" ? (
                <p className="buy-food" style={{color: 'rgba(255, 255, 102, 1)'}}>{item.outOfStuckDescription}</p>
              ) : (
                <p></p>
              )}
              {/* {item.itemClassName === "selected-item" ? (
                <p className="buy-food">{item.description}</p>
              ) : (
                <p className="buy-food">
                  Чего сидишь? Порадуй котэ,{" "}
                  <span
                    className="highlights-to-buy"
                    onClick={() => {
                      selectedCard(index);
                    }}
                  >
                    купи
                  </span>
                  .
                </p>
              )}
              {item.itemClassName === 'out-of-stock-item' ? <p className="buy-food">{item.outOfStuckDescription}</p> : <p></p>} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
