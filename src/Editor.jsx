import React from "react";
import { marked } from "marked";

const initalText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

`;

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: initalText
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-md-6 column">
                <div className="subtitle">
                  <h4>Editor</h4>
                </div>
                <textarea
                  id="editor"
                  className="inputarea"
                  onChange={this.onChange}
                  value={this.state.text}
                ></textarea>
              </div>

              <div className="col-md-6 column">
                <div className="subtitle">
                  <h4>Preview</h4>
                </div>
                <div
                  id="preview"
                  className="outputarea"
                  dangerouslySetInnerHTML={{
                    __html: marked(this.state.text)
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
