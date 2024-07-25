"use client";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const YellowSlider = styled(Slider)({
  color: "#FFD700", // Yellow color for the active part of the slider
  "& .MuiSlider-thumb": {
    borderRadius: "50%", // Make thumb round
    backgroundColor: "#FBD029", // Fill color for the thumb
    border: "5px solid #1F1D14", // Stroke color and width
  },
  "& .MuiSlider-track": {
    backgroundColor: "#FFD700", // Yellow color for the track
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#BDBDBD", // Optional: color for the rail (unselected portion)
  },
  "& .MuiSlider-thumb::before": {
    display: "none", // Remove the default box-shadow
  },
});

const Filter = () => {
  const [price, setPrice] = useState([3000, 40000]);
  const [article, setArticle] = useState("");
  const [category, setCategory] = useState("All");
  const [isNew, setIsNew] = useState("All");
  const [isSale, setIsSale] = useState("All");

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleIsNewChange = (event) => {
    setIsNew(event.target.value);
  };

  const handleIsSaleChange = (event) => {
    setIsSale(event.target.value);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs h-[522px]">
      <h2 className="text-lg font-bold mb-4">Фильтр</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Цена
        </label>
        <YellowSlider
          value={price}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={3000}
          max={40000}
          step={1000}
        />
        <div className="flex justify-between text-sm mt-2">
          <span>{price[0]} uzs</span>
          <span>{price[1]} uzs</span>
        </div>
      </div>

      <div className="mb-4">
        <TextField
          label="Артикул"
          variant="outlined"
          fullWidth
          value={article}
          onChange={(e) => setArticle(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Выберите категорию</InputLabel>
          <Select
            value={category}
            onChange={handleCategoryChange}
            label="Выберите категорию"
          >
            <MenuItem value="All">Все</MenuItem>
            <MenuItem value="Category1">Категория 1</MenuItem>
            <MenuItem value="Category2">Категория 2</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="mb-4">
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Новинка</InputLabel>
          <Select value={isNew} onChange={handleIsNewChange} label="Новинка">
            <MenuItem value="All">Все</MenuItem>
            <MenuItem value="Yes">Да</MenuItem>
            <MenuItem value="No">Нет</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="mb-4">
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Акция</InputLabel>
          <Select value={isSale} onChange={handleIsSaleChange} label="Акция">
            <MenuItem value="All">Все</MenuItem>
            <MenuItem value="Yes">Да</MenuItem>
            <MenuItem value="No">Нет</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Button variant="contained" color="primary" fullWidth>
        Показать результат
      </Button>
    </div>
  );
};

export default Filter;
