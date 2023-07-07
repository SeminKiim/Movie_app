import './App.css';

function Potato() {
  return (
    <h3>This is Potato</h3>
  );
}

function Food({ name, picture }) {
  return (
    <h1>I like {name}</h1>,
    <p>I like {picture}</p>
  );
}

const foodLike = [
  {
    name: "Kimchi",
    image: "kimchi.png"
  },
  {
    name: "coffee",
    image: "coffee.png"
  },
  {
    name: "Bread",
    image: "bread.png"
  }
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodLike.map(dish => (<Food name={dish.name} picture={dish.image} />))}
    </div>
  );
}

export default App;
