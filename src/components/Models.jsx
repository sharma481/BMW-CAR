const cars = [
  { name: "BMW X5", price: "₹95 Lakh", img: "/images/card1.jpg" },
  { name: "BMW M4", price: "₹1.5 Cr", img: "/images/card2.jpg" },
  { name: "BMW i8", price: "₹2.6 Cr", img: "/images/card3.jpg" },
  { name: "BMW i8", price: "₹2.6 Cr", img: "/images/car8.jpg" },

  { name: "BMW i8", price: "₹2.6 Cr", img: "/images/car3.jpg" },
 // { name: "BMW i8", price: "₹2.6 Cr", img: "/images/car5.jpg" },
  { name: "BMW i8", price: "₹2.6 Cr", img: "/images/car6.jpg" },
  { name: "BMW i8", price: "₹2.6 Cr", img: "/images/car7.jpg" },
  
];

const Models = () => {
  return (
    <section className="models">
      <h2>BMW Models</h2>
      <div className="card-container">
        {cars.map((car, index) => (
          <div className="card" key={index}>
            <img src={car.img} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.price}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Models;
