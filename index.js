require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

function greet(name) {
  return `Welcome back ${name}!`;
}

const githubData = {
  login: "abhisekumarjha",
  id: 142191045,
  node_id: "U_kgDOCHmpxQ",
  avatar_url: "https://avatars.githubusercontent.com/u/142191045?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/abhisekumarjha",
  html_url: "https://github.com/abhisekumarjha",
  followers_url: "https://api.github.com/users/abhisekumarjha/followers",
  following_url:
    "https://api.github.com/users/abhisekumarjha/following{/other_user}",
  gists_url: "https://api.github.com/users/abhisekumarjha/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/abhisekumarjha/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/abhisekumarjha/subscriptions",
  organizations_url: "https://api.github.com/users/abhisekumarjha/orgs",
  repos_url: "https://api.github.com/users/abhisekumarjha/repos",
  events_url: "https://api.github.com/users/abhisekumarjha/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/abhisekumarjha/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Abhishek Jha",
  company: null,
  blog: "https://github.com/abhisekumarjha",
  location: "Kolkata, West Bengal",
  email: null,
  hireable: true,
  bio: "Full Stack Developer | Python, JavaScript, React.js | Web Development - HTML, CSS, JavaScript, Bootstrap | Enthusiast in Cloud Technologies",
  twitter_username: null,
  public_repos: 50,
  public_gists: 0,
  followers: 8,
  following: 9,
  created_at: "2023-08-14T02:17:54Z",
  updated_at: "2025-03-17T10:36:55Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("twitter/abhishekumarjha");
});

app.get("/h1", (req, res) => {
  res.send("<h1>Hey, I'm h1.</h1>");
});

app.get("/user", (req, res) => {
  res.send(greet("Abhi"));
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
