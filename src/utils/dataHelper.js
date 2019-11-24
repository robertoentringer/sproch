const fs = require("fs")
const path = require("path")
const expressions = require("./expressions.json")
const slug = require("../utils/sanitizeSlug.js")
const assetsFolder = path.resolve(__dirname, "./../assets")

expressions.forEach((item, i) => {
  item.id = i
  item.slug = slug(item.title)
  item.img = item.img
    ? fs.readFileSync(assetsFolder + `/img/${item.img}`, { encoding: "base64" })
    : ""
  item.audio = item.audio
    ? fs.readFileSync(assetsFolder + `/audio/${item.audio}`, { encoding: "base64" })
    : ""
  fs.writeFileSync(__dirname + `/json/${i + 1}.json`, JSON.stringify(item, null, 2))
})
