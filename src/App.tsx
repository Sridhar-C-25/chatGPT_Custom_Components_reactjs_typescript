import CustomButton from "./components/CustomButton";

function App() {
  return (
    <div style={{ display: "flex", gap: "15px", padding: "2rem" }}>
      <CustomButton
        onClick={() => alert("Button clicked!")}
        id="btn"
        className="shadow"
      >
        Click me
      </CustomButton>

      <CustomButton color="secondary" disabled>
        I am disabled
      </CustomButton>

      <CustomButton color="tertiary" className="my-custom-class">
        Custom class
      </CustomButton>
    </div>
  );
}

export default App;
