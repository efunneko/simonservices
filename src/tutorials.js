import {jst}        from "jayesstee";
import {Page}       from "./page.js";

const page = `

There are a growing number of tutorials available in this [playlist on YouTube](https://www.youtube.com/watch?v=22UlND8PO6I&list=PLAArMTrI4jpC3bz9N5SRKxUt22vfg3kB-).

`
//
// Tutorials
//
export class Tutorials extends Page {
  constructor() {
    super();
    this.page = page;
  }
}
