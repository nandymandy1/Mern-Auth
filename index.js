const fs = require("fs");
const path = require("path");
const cors = require("cors");
const express = require("express");
const consola = require("consola");
const passport = require("passport");
const { connect } = require("mongoose");
const bodyParser = require("body-parser");
const { db, PORT } = require("./config");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

require("./middlewares/passport")(passport);

// Application Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));

// SET STATIC DICRECTORY
app.use(express.static(path.join(__dirname, "./uploads")));
app.use(express.static(path.join(__dirname, "./public")));

// Load default index.html file
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);

const startApp = async () => {
  consola.info({ message: "Connecting to the Database", badge: true });
  try {
    await connect(db, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    consola.success({
      badge: true,
      message:
        process.env.NODE_ENV === "production"
          ? `Connected to the Database.`
          : `Connected to the Database \n${db}`
    });

    // Make Uploads directory if it doesn't exists
    let uploadsDir = path.join(__dirname, "/uploads");
    if (!fs.existsSync(uploadsDir)) {
      await fs.mkdirSync(uploadsDir);
      consola.success({
        badge: true,
        message: `Uploads Directory Created.`
      });
    }
    app.listen(PORT, "0.0.0.0", () =>
      consola.success({
        badge: true,
        message: `Server started on PORT ${PORT}`
      })
    );
  } catch (err) {
    consola.error({
      badge: true,
      message: `Error in connecting to the database \n${err}`
    });
    consola.info({
      badge: true,
      message: `Retrying to connect...`
    });
    startApp();
  }
};

startApp();
