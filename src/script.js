import { DarkModeUI } from "./classes/dark-mode-ui.js";

export const $main = document.querySelector("#root");
export const $header = document.querySelector("header");

DarkModeUI.headerListener();
