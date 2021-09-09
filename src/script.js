import { DarkModeUI } from "./classes/dark-mode-ui.js";
import { SinglePageApplication } from "./classes/single-page-application.js";

export const $main = document.querySelector("#root");
export const $header = document.querySelector("header");

DarkModeUI.headerListener();
SinglePageApplication.addHashListener();
SinglePageApplication.addWindowLoadListener();
