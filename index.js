const showdown = require("showdown");
const fs = require("fs");

const markdown = fs.readFileSync("./src/index.md", { encoding: "utf-8" });
const template = fs.readFileSync("./src/template.txt", { encoding: "utf-8" });

const converter = new showdown.Converter({
  ghCompatibleHeaderId: true,
  simpleLineBreaks: true,
  ghMentions: true,
  tables: true,
});

const html = template.replace("{{content}}", converter.makeHtml(markdown));

fs.writeFileSync("./dist/index.html", html);
