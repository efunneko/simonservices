import {jst}        from "jayesstee";
import {Page}       from "./page.js";

const page = `
Welcome to the support page for **Hidden Artist**. I will do everything I can 
to solve your problem. 

## Reporting a Problem

The best way to report a bug or problem that you are experiencing within Hidden Artist is
to [raise an issue](https://github.com/HiddenArtist/hidden-artist-docs-and-issues/issues). 
Reproducible issues raised will be prioritized and fixed in future releases. It is a good
place to discuss the problem and find a workaround.

## Getting Help

If you are trying to do something that you believe is possible but you can't find out how to do it, the
best place to start is to watch the [Tutorials](#/tutorials) or check out the [Frequently Asked Questions](#/faq).
If you still don't know the answer, you can [post a question here](https://apple.stackexchange.com/).


# Privacy Policy

#### Hidden Artist Collects No Personal Information

We do not collect, use, save or have access to any of your personal data that is used within
the Hidden Artist App. 

If you choose to import personal photos from your Photo Library, you will be asked to
grant access to some of those photos. All imported photos are only stored within the App 
and not sent to any external location, with the exception of images that you choose to share 
through the normal sharing mechanism on your device. Any sharing that occurs is performed
by the operating system of your device and is not examined, transmitted or stored by Hidden
Artist in any way.

You can choose to delete any painting at any time in Hidden Artist and all underlying information
used in creating those paintings, including imported images or photos, is removed.

No location information is gathered and no tracking of any kind is done.


`
//
// Support
//
export class Support extends Page {
  constructor() {
    super();
    this.page = page;
  }
}
