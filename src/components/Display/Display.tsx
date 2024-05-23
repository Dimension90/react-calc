import React, { useState } from "react";
import { Card, Button, Input } from "antd";
import styles from "./Display.module.css";

const Calculator: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleButtonClick = (buttonValue: string): void => {
    setValue(value + buttonValue);
    setResult(null);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setValue(event.target.value);
    setResult(null);
  };

  const handleEqualClick = (): void => {
    try {
      const evalValue = eval(value);
      setResult(evalValue);
    } catch (error) {
      setValue("Error");
      setTimeout(() => {
        setValue("");
      }, 1000);
    }
  };

  const displayValue = result !== null ? String(result) : value;

  return (
    <div className={styles.display}>
      <Card style={{ width: 300, height: 260 }}>
        <Input
          placeholder="Результат выводится здесь"
          value={displayValue}
          onChange={handleInputChange}
          style={{ marginBottom: "16px" }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
          }}
        >
          <Button onClick={() => handleButtonClick("1")}>1</Button>
          <Button onClick={() => handleButtonClick("2")}>2</Button>
          <Button onClick={() => handleButtonClick("3")}>3</Button>
          <Button onClick={() => handleButtonClick("+")}>+</Button>
          <Button onClick={() => handleButtonClick("4")}>4</Button>
          <Button onClick={() => handleButtonClick("5")}>5</Button>
          <Button onClick={() => handleButtonClick("6")}>6</Button>
          <Button onClick={() => handleButtonClick("-")}>-</Button>
          <Button onClick={() => handleButtonClick("7")}>7</Button>
          <Button onClick={() => handleButtonClick("8")}>8</Button>
          <Button onClick={() => handleButtonClick("9")}>9</Button>
          <Button onClick={() => handleButtonClick("*")}>*</Button>
          <Button onClick={() => handleButtonClick("0")}>0</Button>
          <Button onClick={() => handleButtonClick(".")}>.</Button>
          <Button onClick={() => handleButtonClick("/")}>/</Button>
          <Button onClick={handleEqualClick}>=</Button>
        </div>
      </Card>
    </div>
  );
};

export default Calculator;
