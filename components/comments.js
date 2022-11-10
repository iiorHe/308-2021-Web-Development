import React, { Component } from "react";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.commentBox = React.createRef();
  }

  componentDidMount() {
    let scriptEl = document.createElement("script");
    scriptEl.setAttribute("src", "https://giscus.app/client.js");
    scriptEl.setAttribute("data-repo", "iiorHe/308-2021-Web-term");
    scriptEl.setAttribute("data-repo-id", "MDEwOlJlcG9zaXRvcnk0MDQ4ODY3ODQ");
    scriptEl.setAttribute("data-category", "General");
    scriptEl.setAttribute("data-category-id", "DIC_kwDOGCIVAM4CApdQ");
    scriptEl.setAttribute("data-mapping", "pathname");
    scriptEl.setAttribute("data-reactions-enabled", "1");
    scriptEl.setAttribute("data-emit-metadata", "1");
    scriptEl.setAttribute("data-input-position", "top");
    scriptEl.setAttribute("data-theme", "light");
    scriptEl.setAttribute("crossorigin", "anonymous");
    scriptEl.setAttribute("async", true);
    this.commentBox.current.appendChild(scriptEl);
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <div ref={this.commentBox} />
      </div>
    );
  }
}
