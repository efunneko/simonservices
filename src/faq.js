import {jst}        from "jayesstee";
import {Page}       from "./page.js";

const page = `
# Frequently Asked Questions

## Q: Why are you doing this?


## Q: How can I pay you?


## Q: What jobs won't you do?


## Q: How often do I need to pay you?


## Q: How can I pay you?

You can use Interact to pay me by sending me a email transfer to simonservices75@gmail.com. Autodeposit is 
enabled.

Alternatively, you can pay me by cash.

## Q: What is this about a 'shared Google Drive spreadsheet'?

I will send a link to a spreadsheet that is hosted within Google that keeps track 
of all work that I do for you. If you are unable to view it, that is okay. I can 
send you the summary after the work is done with the exact amount that you owe me.



`
//
// FAQ
//
export class FAQ extends Page {
  constructor() {
    super();
    this.page = page;
  }
}
