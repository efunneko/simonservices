import {jst}        from "jayesstee";
import {MD}         from "./md.js";


//
// Page
//
export class Page extends jst.Component {
  constructor() {
    super();
  }

  cssLocal() {
    return {
      body$i: {
        lineHeight$pt: 17
      }
    };
  }

  render() {
    return jst.$div(
      {
        id: "-body",
        events: {
        },
      },
      new MD(this.page)
    );
  }

}
