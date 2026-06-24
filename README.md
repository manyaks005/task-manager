# Simple Task Manager

A lightweight browser-based task manager built with plain HTML, CSS, and JavaScript. It lets you add tasks, mark them as complete, and remove them from the list. The UI also uses a small AOS animation effect for a smoother entrance experience.

## Features

- Add a new task from the input field or by pressing `Enter`
- Mark tasks as complete with a strike-through style
- Delete tasks from the list
- Responsive layout for smaller screens
- Animated UI effects powered by AOS from a CDN

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- AOS animation library via CDN

## Project Structure

- `index.html` - Main page markup and AOS setup
- `style.css` - App styling and responsive layout
- `script.js` - Task management logic

## How To Run

This project is static, so you do not need to install any dependencies.

1. Open the `TaskManager` folder in VS Code or any file explorer.
2. Open `index.html` in a web browser.
3. Start adding tasks.

If you want to use a local server instead of opening the file directly, you can run a simple static server from the project folder, for example with the VS Code Live Server extension.

## Usage

1. Type a task into the input field.
2. Click `Add Task` or press `Enter`.
3. Use `Complete` to toggle the finished state.
4. Use `Delete` to remove a task.

## Notes

- Empty tasks are blocked with a browser alert.
- Task completion is visual only and is not saved after a page reload.
- The animation library is loaded from `https://unpkg.com/aos@next/dist/aos.css` and `https://unpkg.com/aos@next/dist/aos.js`.

## Possible Improvements

- Persist tasks in `localStorage`
- Add edit support for existing tasks
- Add filters such as All, Active, and Completed
- Replace the CDN dependency with a local package or self-hosted assets
