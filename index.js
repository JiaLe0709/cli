#!/usr/bin/env node

// import chalk from 'chalk';
// import chalkAnimation from 'chalk-animation';
// import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
// import { createSpinner } from 'nanospinner';

async function Welcome() {
  const Hour = new Date().getHours();
  let time, line;

  if (Hour >= 5 && Hour < 12) {
    time = "Morning";
    line = "=======================================================================";
  } else if (Hour >= 12 && Hour < 18) {
    time = "Afternoon";
    line = "==================================================================================";
  } else {
    time = "Night";
    line = "=========================================================";
  }

  async function Line() {
    console.log(gradient.pastel.multiline(line))
  }

  const welcomeMessage = `Good ${time} !`

  figlet(welcomeMessage, (err, data) => {
    Line();
    console.log(gradient.pastel.multiline(
      `
          \n${data}
          `));
    Line();
  });
}

await Welcome();