import {jst}        from "jayesstee";

//
// Header 
//

const ICON_SIZE = 40;
const LOGO_WIDTH = 250;

export class Header extends jst.Component {
  constructor(app, width, height) {
    super();
    this.app           = app;

    this.resize(width, height);
  }

  cssLocal() {
    return {
      header$i: {
        width: '100%'
      },
      iconDiv$c: {
        display: 'inline-block',
        margin$pt: [5, 5, 0, 5],
        width$pt: ICON_SIZE,
        height$pt: ICON_SIZE,
        borderRadius$pt: 8,
        overflow: 'hidden',
        cursor: 'pointer',
        //border$px: [1, 'solid', jst.rgba(0,0,0,0.3)],
        //boxShadow$px: [0, 1, 5, jst.rgba(0,0,0,0.5)]
      },
      logoDiv$c: {
        display: 'inline-block',
        margin$pt: [5, 5, 0, 5],
        //width$pt: ICON_SIZE,
        //height$pt: ICON_SIZE,
        borderRadius$pt: 8,
        //overflow: 'hidden',
        cursor: 'pointer',
        //border$px: [1, 'solid', jst.rgba(0,0,0,0.3)],
        //boxShadow$px: [0, 1, 5, jst.rgba(0,0,0,0.5)]
      },
      icon$c: {
        width$pt: ICON_SIZE,
        height$pt: ICON_SIZE
      },
      logo$c: {
        width$pt: LOGO_WIDTH,
        //height$pt: ICON_SIZE
      },
      name$c: {
        display: 'inline-block',
        fontSize: '250%',
        fontWeight: 'bold',
        verticalAlign: 'bottom',
        margin$pt: [10, 10]
      },
      navBox$c: {
        display: 'inline-block',
        float: 'right',
        marginBottom$pt: 15
      },
      navItem$c: {
        display: 'inline-block',
        color: '#008100',
        fontSize: '120%',
        margin$pt: [15, 15, 0, 15],
        cursor: 'pointer'
      },
      navItem$hover$c: {
        color: '#3333dd'
      },
      demoLink$hover$c: {
        color: '#3333dd'
      },
      demoLink$c: {
        textDecoration: 'none',
        color: '#000',
      },
    };
  }

  render() {
    return jst.$div(
      {id: "header"},
      jst.$div({cn: '-logoDiv', events: {click: e => this.navigate('home')}},
        jst.$img({cn: '-logo', src: 'img/simon-services-logo.png'}),
      ),
      //jst.$div({cn: '-name'}, "Simon Services"),
      jst.$div({cn: '-navBox'},
        jst.$div({cn: '-navItem', events: {click: e => this.navigate('home')}},      "Home"),
        jst.$div({cn: '-navItem', events: {click: e => this.navigate('testimonials')}},   "Testimonials"),
        jst.$div({cn: '-navItem', events: {click: e => this.navigate('faq')}},       "FAQ"),
        jst.$div({cn: '-navItem', events: {click: e => this.navigate('about')}},     "About Me"),
      )
    );
  }

  navigate(location) {
    this.app.navigate(location);
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
