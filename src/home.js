import {jst}        from "jayesstee";
import {Page}       from "./page.js";

const page = `
# Welcome to Simon Services

Hi, I'm Simon. I am a teenager who will do many odd jobs that you don't want to do.
You pay me for the exact amount of time I work for you.

## Services
  - Snow Removal
  - Yard work (mowing, raking, gardening, etc)
  - Car washing, vacuuming and detailing
  - Cleaning
  - House care while you are away
  - And anything else suitable for a teenager

## How much do I charge?

I charge $16 per hour.

## How do you book my services?

Please email me at [simonservices75@gmail.com](mailto:simonservices75@gmail.com)

## How do I keep track of my work?

I create a shared spreadsheet on Google Drive that itemizes all of my work with 
details like date, time, and amount of time spent.

## How can you pay me?

You can either pay cash or you can email me the money with Interact.

`
//
// Home
//
export class Home extends Page {
  constructor() {
    super();
    this.page = page;
  }
}

