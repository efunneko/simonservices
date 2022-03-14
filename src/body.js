import {jst}        from "jayesstee";

//
// Body - Handles all that is the body
//
export class Body extends jst.Component {
  constructor(app, width, height) {
    super();
    this.app           = app;

    this.resize(width, height);
  }

  cssLocal() {
    return {
    };
  }

  render() {
    return jst.$div(
      {
        id: "body",
        events: {
        },
      },
      "Hi!"
    );
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
    this.refresh();
  }

  scrollTo(x, y) {
    window.scroll(x || 0, y || 0);
  }

}
