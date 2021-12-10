const mongoose = require("mongoose");
const fs = require("fs");
const mongoFiles = fs.readdirSync("./src/mongo").filter(file => file.endsWith(".js"));
// the database connection will be made here.
module.exports = (client) => {
    client.dbLogin = async () => {
        for (file of mongoFiles) {
            const event = require(`../mongo/${file}`);
            if (event.once) {
                mongoose.connection.once(event.name, (...args) => event.execute(...args));
            } else {
                mongoose.connection.on(event.name, (...args) => event.execute(...args));
            }
        }
        mongoose.Promise = global.Promise;
        await mongoose.connect(process.env.dbToken, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    };
};
