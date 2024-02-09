import {jst}        from "jayesstee";
import {Page}       from "./page.js";

const page = `
# Frequently Asked Questions

## Q: Why are you doing this?

I always wanted to run my own business and my dad said that it's best to do it while you’re still at home. So that is what I did.

## Q: What jobs won't you do?

Anything dangerous, something a 15-16 year old should probably not do or something that requires me to have a university degree to do.


## Q: How often do I need to pay you?

At the end of the month I will collect all my payments. If you only hired me for one thing you can pay me right after if you would like. 

## Q: How can I pay you?

You can use Interact to pay me by sending me a email transfer to simonservices75@gmail.com. Autodeposit is 
enabled.

Alternatively, you can pay me by cash.

## Q: Is travel time included in your charge?

Since I don't have a driver's license, I need to walk to your home. If it is far away, I may count the walking time as part of the
time spent working.

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
