import {jst}        from "jayesstee";
import {MD}         from "./md.js";
import {Page}       from "./page.js";

const page = `
# About Simon

Hi, I'm Simon. I live in Old Ottawa East with my family.


`
//
// About
//
export class About extends Page {
  constructor() {
    super();
    this.page = page;
  }
}
