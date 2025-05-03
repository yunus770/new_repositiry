import { useState } from "react";

function StringTrainer() {
  const [input, setInput] = useState("");
  const [method, setMethod] = useState("trim");
  const [result, setResult] = useState("");

  const handleTransform = () => {
    let output = "";

    switch (method) {
      case "trim":
        output = input.trim();
        break;
      case "toLowerCase":
        output = input.toLowerCase();
        break;
      case "toUpperCase":
        output = input.toUpperCase();
        break;
      case "slice":
        output = input.slice(1, 4); // пример
        break;
      case "replace":
        output = input.replace("a", "@"); // пример
        break;
      case "includes":
        output = input.includes("React") ? "✅ Содержит 'React'" : "❌ Не содержит 'React'";
        break;
      default:
        output = input;
    }

    setResult(output);
  };

  return (
    <div>
      <h2>🔤 String Trainer</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите строку"
      />
      <br />
      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option value="trim">trim()</option>
        <option value="toLowerCase">toLowerCase()</option>
        <option value="toUpperCase">toUpperCase()</option>
        <option value="slice">slice(1, 4)</option>
        <option value="replace">replace('a', '@')</option>
        <option value="includes">includes('React')</option>
      </select>
      <br />
      <button onClick={handleTransform}>Преобразовать</button>
      <p><strong>Результат:</strong> {result}</p>
    </div>
  );
}

export default StringTrainer;
