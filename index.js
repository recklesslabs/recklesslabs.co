const showdown = require("showdown");
const fs = require("fs");

const style_css_str = fs.readFileSync("style.css", { encoding: "utf-8" });
const index_md_str = fs.readFileSync("index.md", { encoding: "utf-8" });

const converter = new showdown.Converter({
  ghCompatibleHeaderId: true,
  simpleLineBreaks: true,
  ghMentions: true,
  tables: true,
});

const template = fs.readFileSync("template.txt", { encoding: "utf-8" });
const htmlContent = converter.makeHtml(index_md_str);

const templateStr = template
  .replace("{{title}}", "Reckless Labs")
  .replace("{{content}}", htmlContent)
  .replace("{{style}}", style_css_str);

fs.writeFileSync("index.html", templateStr);
