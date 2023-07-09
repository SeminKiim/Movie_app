import './App.css';


function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://cookingchew.com/wp-content/uploads/2020/05/What-Is-Kimchi-CO180-FE.jpg"
  },
  {
    name: "coffee",
    image: "https://cdn.zmescience.com/wp-content/uploads/2018/04/Cappuccino_at_Sightglass_Coffee-1.jpg"
  },
  {
    name: "Bread",
    image: "https://www.thespruceeats.com/thmb/9n3YM4RVKSWyUWQ0JCl7BwHrl1U=/4288x2848/filters:fill(auto,1)/loaf-of-bread-182835505-58a7008c5f9b58a3c91c9a14.jpg"
  }
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}

function App() {
  console.log(foodILike.map(renderFood));
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
