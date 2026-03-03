/**
 * Simon Game Logic - Section 20 Challenge
 * Core game state and sequence logic for the Simon memory game.
 * Based on Angela Yu's The Complete Full-Stack Web Development Bootcamp.
 */

const COLORS = ["green", "red", "yellow", "blue"];
const BUTTON_IDS = COLORS.map((c) => `#${c}`);

let sequence = [];
let playerIndex = 0;
let level = 0;
let started = false;

function nextSequence() {
  playerIndex = 0;
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  const next = COLORS[randomIndex];
  sequence.push(next);
  return sequence;
}

function getNextButton() {
  return COLORS[sequence[playerIndex]];
}

function checkPress(color) {
  if (!started || sequence.length === 0) return false;
  const correct = sequence[playerIndex] === color;
  if (correct) playerIndex += 1;
  return { correct, completed: correct && playerIndex === sequence.length };
}

function reset() {
  sequence = [];
  playerIndex = 0;
  level = 0;
  started = false;
}

function start() {
  reset();
  started = true;
  return nextSequence();
}

// Export for use in game (e.g. with DOM events)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    COLORS,
    BUTTON_IDS,
    nextSequence,
    getNextButton,
    checkPress,
    reset,
    start,
    get sequence() {
      return [...sequence];
    },
    get level() {
      return sequence.length;
    },
  };
}
