import React, { useState } from "react";

const ColorConverter: React.FC = () => {
    const [hexColor, setHexColor] = useState("");
    const [rgbColor, setRgbColor] = useState("Введите цвет!");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const hex = event.target.value;
        setHexColor(hex);
        if (hex.length > 7) {
          setHexColor(hex.substring(0, 7));
        } else if (hex.length === 7 && !isValidHex(hex)) {
          setRgbColor("Ошибка!");
          document.body.style.backgroundColor = "#FF4500";
        } else if (hex.length === 7 && isValidHex(hex)) {
          const rgb = hexToRgb(hex);
          setRgbColor(rgb);
          document.body.style.backgroundColor = hex;
        } else {
          setRgbColor("Введите цвет!");
          document.body.style.backgroundColor = "";
        }
      };

    const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `RGB(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : 'Ошибка!';
    };

    const isValidHex = (hex: string) => {
        const regex = /^#([A-Fa-f0-9]{6})$/;
        return regex.test(hex);
    };

    return (
        <div>
            <input placeholder="Введите цвет в формате #RRGGBB" className="input" type="text" value={hexColor} onChange={handleInputChange} />
            <p className="result">{rgbColor}</p>
        </div>
    );
};

export default ColorConverter;