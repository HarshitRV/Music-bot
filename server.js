const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.route("/", (req, res) => {
    return res.status(200).send({
        status: 200,
        message: "music bot running 🎉"
    })
});

app.route("/health", (req, res)=>{
    return res.status(200).send({
        message: "health check OK ✅"
    })
});

/**
 * @description - Keep bot running on server.
 */
module.exports.keepAlive = () => {
    app.listen(PORT, () => {
        console.log(`music bot server running on port ${PORT} 🎉`);
    });
};