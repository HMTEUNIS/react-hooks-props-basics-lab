import React from "react";

function About(props) {
  if (props.bio === "") {

  <div id="about">
    <h2>About Me</h2>
    <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    <a href="https://github.com/liza">{props.gitHub}</a>
    <a href="https://github.com/liza">{props.linkedIn}</a>
  </div>
}
  else {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href="https://github.com/liza">{props.gitHub}</a>
      <a href="https://github.com/liza">{props.linkedIn}</a>
    </div>
  );
}}

export default About;
