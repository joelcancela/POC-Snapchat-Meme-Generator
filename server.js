var Jimp = require("jimp");
var express = require("express");
var app = express();
app.get("/", async function (req, res) {
    const message = req.query.message || 'Qui m\'appelle ?';
    const font = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
    Jimp.read("snapchat_template.png", function (err, image) {
        image.print(font, 0, 290, {
            text: message,
            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: Jimp.VERTICAL_ALIGN_TOP
        }, 260, 441).getBuffer(Jimp.MIME_PNG, function (err, buffer) {
            res.set("Content-Type", Jimp.MIME_PNG);
            res.send(buffer);
        });
    });
});
app.listen(3000);