const fs = require("fs");
const console = require("console");
const { layersOrder } = require("./src/config.js");

if (!process.env.PWD) {
    process.env.PWD = process.cwd();
}

const buildDir = `${process.env.PWD}/`;
const metaDataaFile = '_allMetadata.json';
const layersDir = `${process.env.PWD}/layers`;

let requirements = [
    ["Black Background", "*", "Black Back Right", "*", "Sphere", "*", "*", "Black Top"],
    // ["Black Background", "Black Back Left", "*", "Black Bottom", "Sphere", "*", "*", "*"],
    // ["Black Background", "*", "*", "*", "Sphere", "Black Front Left", "Black Front Right", "*"],
    // ["White Background", "*", "White Back Right", "*", "Sphere", "*", "*", "Black Top"],
    // ["White Background", "Black Back Left", "*", "White Bottom", "Sphere", "*", "*", "*"],
    // ["White Background", "*", "*", "*", "Sphere", "Black Front Left", "White Front Right", "*"],
    // ["Black Background", "*", "White Back Right", "*", "Sphere", "*", "*", "Black Top"],
    // ["Black Background", "Black Back Left", "*", "Black Bottom", "Sphere", "*", "*", "*"],
    // ["Black Background", "*", "*", "*", "Sphere", "Black Front Left", "Black Front Right", "*"],
];
let metadata = [];
let attributes = [];

const addAttributes = (_layer, _name) => {
    let tempAttr = {
        layer: _layer
    }
    attributes.push(tempAttr);
}

const addMetadata = attributes => {
    let tempMetadata = {
        attributes: attributes,
    };
    metadata.push(tempMetadata);
    console.log(tempMetadata);
    attributes = [];
}

const generate = async () => {
    let [l] = [requirements[0]];
    for (let i in l) {
        let result = [];
        for (let j of requirements) {
            if (j[i] === "*") {
                for (k of getFileNames(layersOrder[i].name)) {
                    let [m] = [j];
                    m[i] = k
                    result.push(m)
                }
            } else result.push(j)
        }
        [requirements] = [result]
        console.log(result.length)

    }
}

const getFileNames = (name) => {
    return fs
        .readdirSync(`${layersDir}/${name}/`)
        .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
        .filter((item) => /(Wire)+/g.test(item))

}

(() => {
    generate();
    // console.log(getFileNames("Back Left"))
})();