const express = require("express");
const path = require("path");
const morgan = require("morgan");
const PORT = 1337;
const app = express();
module.exports = app;

const createApp = () => {
  app.use(morgan("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

<<<<<<< HEAD
  app.use("/api", require("./api"));
=======
  app.use('/api', require('./api'));
>>>>>>> 19de831893befd9f8faf11c2c4fbb7b69027fc91

  app.use(express.static(path.join(__dirname, "..", "public")));

  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error("Not found");
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });

  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public/index.html"));
  });

  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
  });
};

const startListening = () => {
<<<<<<< HEAD
  // start listening (and create a 'server' object representing our server)
  app.listen(PORT, () => console.log(`listening on ${PORT}`));
};

async function bootApp() {
  await createApp();
  await startListening();
}

if (require.main === module) {
  bootApp();
} else {
  createApp();
}
=======
    // start listening (and create a 'server' object representing our server)
    const server = app.listen(PORT, () =>
      console.log(`listening on ${PORT}`)
    )
  }
  
  async function bootApp() {
  
    await createApp()
    await startListening()
  }

  if (require.main === module) {
    bootApp()
  } else {
    createApp()
  }
  
>>>>>>> 19de831893befd9f8faf11c2c4fbb7b69027fc91
