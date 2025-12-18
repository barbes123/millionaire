# Millionaire Family Quiz

A TV-show style quiz game designed for family gatherings (like Christmas!) supporting 1 or 2 players with sound effects, lifelines, and topic transitions.

## 📖 Quick Links
- **[How to Run Locally](#-how-to-run-this-game)**
- **[How to Add Questions](#-adding-your-own-questions)**
- **[How to Publish Online](./DEPLOYMENT_GUIDE.md)** (Click here to learn how to put this game on the web!)

## 🚀 How to Run this Game

If you have downloaded or cloned this repository, follow these steps to get it running:

### 1. Prerequisites
You need **Node.js** installed on your computer.
- [Download Node.js here](https://nodejs.org/) (LTS version recommended).

### 2. Install Dependencies
Open your terminal (Command Prompt, PowerShell, or Terminal) in this project folder and run:
```bash
npm install
```
This downloads all the necessary libraries (React, Vite, Tailwind, etc.) into a `node_modules` folder.

### 3. Start the Game
To start the local development server:
```bash
npm run dev
```
You will see a link (usually `http://localhost:5173`). Ctrl+Click it to open the game in your browser.

## 🛠 Adding Your Own Questions

Currently, questions are located in `src/constants.ts`.

To add your own:
1. Open `src/constants.ts`.
2. Add new question objects to the `SAMPLE_QUESTIONS` array.
3. **Format:**
   ```json
   {
     "id": 6,
     "topic": "santa",
     "topicName": "Santa Claus",
     "question": "What is the name of Santa's most famous reindeer?",
     "options": {
       "A": "Dasher",
       "B": "Rudolph",
       "C": "Comet",
       "D": "Vixen"
     },
     "right_answer": "B",
     "image": "", 
     "extra": "Rudolph was created by Robert L. May in 1939.",
     "sound": "",
     "correct_sound": "",
     "wrong_sound": ""
   }
   ```
   
   
### Errors

If it complains 
```bash
> family-quiz@0.0.0 dev
> vite
sh: 1: vite: not found
```
Try:

```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm pkg delete overrides
npm install
```
