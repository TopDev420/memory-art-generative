const layersOrder = [
  { name: "Background" },
  { name: "Back Left" },
  { name: "Back Right" },
  { name: "Bottom" },
  { name: "Sphere" },
  { name: "Front Left" },
  { name: "Front Right" },
  { name: "Top" },
];

const format = {
  width: 5000,
  height: 5000,
};

const rarity = [
  { key: "", val: -1 },
  { key: "common", val: 0.4 },
  { key: "uncommon", val: 0.5 },
  { key: "rare", val: 0.1 },
];

const defaultEdition = 1720;

module.exports = { layersOrder, format, rarity, defaultEdition };