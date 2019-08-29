const fs = require("fs")
const path = require("path")
const expressions = require("./expressions.json")

const slug = string =>
  string
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-_,/;'":!?()]+/g, " ")
    .split(" ")
    .splice(0, 10)
    .join(" ")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase()

expressions.map((item, index) => {
  item.id = index
  item.slug = slug(item.title)
})

const assetsFolder = path.resolve(__dirname, "./../assets")

expressions.forEach((item, i) => {
  item.img = item.img ? fs.readFileSync(assetsFolder + `/img/${item.img}`, { encoding: "base64" }) : ""
  item.audio = item.audio ? fs.readFileSync(assetsFolder + `/audio/${item.audio}`, { encoding: "base64" }) : ""
  fs.writeFileSync(__dirname + `/json/${i + 1}.json`, JSON.stringify(item, null, 2))
})
