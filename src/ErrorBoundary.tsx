import { Component, ErrorInfo, ReactElement } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component<{children:ReactElement}></children:ReactEleme> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error:Error, info:ErrorInfo) {
    //typically you would log this to something like TrackJS or NewRelic
    console.error("ErrorBoundary component caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing.{" "}
          <Link to="/">Click here to go bak to the homepage</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;