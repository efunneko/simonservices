import {jst}        from "jayesstee";
import {MD}         from "./md.js";
import {Page}       from "./page.js";

const page = `
# What people have to say about Simon Services

I told him what I wanted done, and he said, "I'll do it." He then did the work and I was happy.

  *-- Simon's Dad*


`
//
// About
//
export class Testimonials extends Page {
  constructor() {
    super();
    this.page = page;
  }
}
