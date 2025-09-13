import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({ 
    Participantes: ["Karen Sofia Ramirez", "Deyvid Santiago Galarza", "Jean Paul Solano"] ,
    Repo: "https://github.com/jeanp74/hello-cloud.git"
  });
  // res.json({
  //   message: "Hello Cloud ☁️",
  //   docs: ["/health", "/version"]
  // });
});

app.get("/health", (_req, res) => {
  res.json({ status: "okkkkkkk", uptime: process.uptime() });
});

app.get("/ping", (_req, res) => {
  res.json({ pong: true, at: new Date().toISOString(), Participantes: ["Karen Sofia Ramirez", "Deyvid Santiago Galarza", "Jean Paul Solano"] });
});
app.get("/version", (_req, res) => {
  res.json({ name: "hello-cloud", version: "1.0.0" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
 