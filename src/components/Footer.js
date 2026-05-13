import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>
          
          {this.props.sharedBasicInfo && (this.props.sharedBasicInfo.phone || this.props.sharedBasicInfo.email) && (
            <div className="text-center mt-3">
              <small>
                {this.props.sharedBasicInfo.phone && (
                  <span className="mx-3">
                    <i className="fas fa-phone"></i> {this.props.sharedBasicInfo.phone}
                  </span>
                )}
                {this.props.sharedBasicInfo.email && (
                  <span className="mx-3">
                    <i className="fas fa-envelope"></i> {this.props.sharedBasicInfo.email}
                  </span>
                )}
              </small>
            </div>
          )}

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
