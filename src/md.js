// md.js - convert markdown to jst

import {jst}        from "jayesstee";

const opToCn = {
  '**': '-bold',
  '*':  '-italic',
  '`':  '-code'
};

//
// MD (Markdown)
//
export class MD extends jst.Component {
  constructor(markdown) {
    super();
    this.md = markdown;
  }

  cssLocal() {
    return {
      heading1$c: {
        fontSize: '150%',
        margin$pt: [12, 0, 9, 0],
        fontWeight: 'bold'
      },
      heading2$c: {
        fontSize: '130%',
        margin$pt: [10, 0, 8, 0],
        fontWeight: 'bold'
      },
      heading3$c: {
        fontSize: '120%',
        margin$pt: [8, 0, 7, 0],
        fontWeight: 'bold'
      },
      heading4$c: {
        fontSize: '110%',
        fontWeight: 'bold'
      },
      paraBreak$c: {
        height$pt: 10
      },
      inline$c: {
        display: 'inline',
        //whiteSpace: 'pre'
      },
      bold$c: {
        fontWeight: 'bold'
      },
      italic$c: {
        fontStyle: 'italic'
      },
      underline$c: {
        fontDecoration: 'underline'
      },
      code$c: {
        whiteSpace:  'pre',
        unicodeBidi: 'embed',
        fontFamily:  'monospace'
      },
      caption$c: {
        fontWeight: 'bold',
        fontSize: '90%'
      },
      imgDiv$c: {
        width: '100%',
        margin$pt: [10, 0, 10, 0],
        textAlign: 'center'
      },
      li: {
        margin$pt: [0, 0, 0, 10]
      },
      img$c: {
        maxWidth: '100%',
        border$px: [2, 'solid', jst.rgba(0,0,0,0.5)],
        boxShadow$px: [0, 3, 8, jst.rgba(0,0,0,0.4)]
      },
      center$c: {
        textAlign: 'center'
      }
    };
  }

  render() {
    return this.convert(this.md);
  }

  convert(md) {
    let lines = md.split(/\n/);
    let top   = jst.$div();
    let state = 'top';
    let stack = [[top, state]];
    lines.forEach(line => {
      let match;

      // This will take care of ending things like lists, etc
      this.checkForSectionCompletion(stack, line);
      if (match = line.match(/^\s*$/)) {
        this.append(stack[0][0], `-paraBreak`, "");
      }
      else if (match = line.match(/^\s*(#+)(.*)/)) {
        this.append(stack[0][0], `-heading${match[1].length}`, match[2]);
      }
      else if (match = line.match(/^\s*(>\s)(.*)/)) {
        this.append(stack[0][0], `-caption`, match[2]);
      }
      else if (match = line.match(/^\s*(\d+\.)(.*)/)) {
        if (stack[0][1] != 'ol') {
          let jOl = jst.$ol();
          stack[0][0].appendChild(jOl);
          stack.unshift([jOl, 'ol']);
        }
        // Add an LI
        let jLi = jst.$li();
        this.convertLine(jLi, match[2]);
        stack[0][0].appendChild(jLi);
      }
      else if (match = line.match(/^\s+(-\s+)(.*)/)) {
        if (stack[0][1] != 'ul') {
          let jUl = jst.$ul();
          stack[0][0].appendChild(jUl);
          stack.unshift([jUl, 'ul']);
        }
        // Add an LI
        let jLi = jst.$li();
        this.convertLine(jLi, match[2]);
        stack[0][0].appendChild(jLi);
      }
      else {
        stack[0][0].appendChild(this.convertLine(stack[0][0], line));
      }
    })
    return top;
  }

  convertLine(jel, line) {
    let stack = [jel];
    while (line && line.length) {
      let match;
      if (match = line.match(/^(.*?)((?:\*\*)|(?:\*)|(?:\`)|(?:\!\[)|(?:\[))(.*)/)) {
        let [m, prefix, op, rest] = match;
        if (opToCn[op]) {
          let reStr = `^(.*?)${'\\' + op.split("").join('\\')}(.*)`;
          let re = new RegExp(reStr);
          let subMatch;
          if (subMatch = rest.match(re)) {
            this.append(stack[0], "-inline", prefix);
            this.append(stack[0], "-inline " + opToCn[op], subMatch[1]);
            line = subMatch[2];
          }
          else {
            this.append(stack[0], "-inline", prefix + op + " ");
            line = rest;
          }
        }
        else if (op == '[') {
          // Handle links
          let subMatch;
          if (subMatch = rest.match(/(.*?)\]\(([^)]+)\)(.*)/)) {
            this.append(stack[0], "-inline", prefix);
            stack[0].appendChild(jst.$a({href: subMatch[2]}, subMatch[1]));
            line = subMatch[3]
          }
          else {
            this.append(stack[0], "-inline", prefix + op + " ");
            line = rest;
          }
        }
        else if (op == '![') {
          // Handle links
          let subMatch;
          if (subMatch = rest.match(/(.*?)\]\(([^)]+)(.*)\)/)) {
            let capMatch = subMatch[1].match(/^(\!)?(.*)/); 
            let caption = capMatch[2];
            this.append(stack[0], "-inline", prefix);
            stack[0].appendChild(
              jst.$div({cn: '-imgDiv'}, 
                jst.$img({cn: '-img -center', src: subMatch[2], title: caption}),
                jst.if(!capMatch[1]) && jst.$div({cn: '-caption'}, caption)
              )
            );
            line = subMatch[3]
          }
          else {
            this.append(stack[0], "-inline", prefix + op + " ");
            line = rest;
          }
        }
        else {
          this.append(stack[0], "-inline", prefix + op + " ");
          line = rest;
        }
      }
      else {
        this.append(stack[0], "-inline", line + " ");
        line = "";
      }
    }
  }

  checkForSectionCompletion(stack, line) {
    let [jel, state] = stack[0];
    if (state == 'ol') {
      if (!line.match(/^\s*\d+\./)) {
        // Finished the numbered list
        stack.shift();
        this.checkForSectionCompletion(stack, line);
      }
    }
    else if (state == 'ul') {
      if (!line.match(/^\s*-/)) {
        // Finished the unordered list
        stack.shift();
        this.checkForSectionCompletion(stack, line);
      }
    }
  }

  append(jel, cn, body) {
    jel.appendChild(jst.$div({cn: cn}, body));
  }

}