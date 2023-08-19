#!/usr/bin/env node

// import chalk from 'chalk';
// import chalkAnimation from 'chalk-animation';
// import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
// import { createSpinner } from 'nanospinner';

async function Welcome() {
    const Hour = new Date().getHours();
    let time;

    if (Hour >= 5 && Hour < 12) {
        time = "Morning"
      } else if (Hour >= 12 && Hour < 18) {
        time = "Afternoon"
      } else {
        time = "Night"
      }
    
    const welcomeMessage = `Good ${time} !`

    figlet(welcomeMessage, (err, data) => {
        console.log(gradient.pastel.multiline(data))
    });
}

await Welcome()