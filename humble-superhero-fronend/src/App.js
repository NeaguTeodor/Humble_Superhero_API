import { useState, useEffect } from "react";
import "./styles.css"; // Import CSS file

function App() {
  const [superheroes, setSuperheroes] = useState([]);
  const [formData, setFormData] = useState({ name: "", superpower: "", humilityScore: "" });
  const [errorMessage, setErrorMessage] = useState(""); 
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Fetch superheroes from the backend
  useEffect(() => {
    fetch("http://localhost:3001/superheroes")
      .then((res) => res.json())
      .then((data) => setSuperheroes(data))
      .catch((err) => console.error("Error fetching superheroes:", err));
  }, []);

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData({ ...formData, [name]: value });

    // Validate humility score
    if (name === "humilityScore") {
      const numericValue = Number(value);

      if (numericValue < 1 || numericValue > 10 || isNaN(numericValue)) {
        setErrorMessage("Humility score must be between 1 and 10.");
        setIsButtonDisabled(true);
      } else {
        setErrorMessage(""); 
        setIsButtonDisabled(false);
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3001/superheroes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, humilityScore: Number(formData.humilityScore) }),
    });

    // Refresh superhero list
    fetch("http://localhost:3001/superheroes")
      .then((res) => res.json())
      .then((data) => setSuperheroes(data));

    // Reset form
    setFormData({ name: "", superpower: "", humilityScore: "" });
    setIsButtonDisabled(true); 
  };

  return (
    <div className="container">
      <h1>Humble Superhero Registry </h1>

      {/* Superhero Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Superhero Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="superpower"
          placeholder="Superpower"
          value={formData.superpower}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="humilityScore"
          placeholder="Humility Score (1-10)"
          value={formData.humilityScore}
          onChange={handleChange}
          required
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" disabled={isButtonDisabled}>
          Add Superhero
        </button>
      </form>

      {/* Superhero List */}
      <div className="superhero-list">
        <h2>Superhero List</h2>
        {superheroes.map((hero, index) => (
          <div key={index} className="superhero-card">
            <h3>{hero.name}</h3>
            <p> <strong>Superpower:</strong> {hero.superpower}</p>
            <p> <strong>Humility Score:</strong> {hero.humilityScore}/10</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
