const layersOrder = [
    { name: 'Background', number: 2 },
    { name: 'Back Left', number: 10 },
    { name: 'Back Right', number: 10 },
    { name: 'Bottom', number: 10 },
    { name: 'Sphere', number: 1 },
    { name: 'Front Left', number: 10 },
    { name: 'Front Right', number: 10 },
    { name: 'Top', number: 10 },
];

const format = {
    width: 5000,
    height: 5000
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 5;

module.exports = { layersOrder, format, rarity, defaultEdition };