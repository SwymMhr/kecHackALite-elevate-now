import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}


// Where React Error Boundary Doesn't work 
// Error boundaries do not catch errors for:
//   Event handlers (learn more)
//   Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
//   Server side rendering
//   Errors thrown in the error boundary itself (rather than its children)
//   Errors thrown in any component lifecycle method
//   Errors thrown while rendering the error message
//   Errors thrown inside React's event system (when using unstable_createRoot)
//   If an error boundary fails trying to render the error message, React will unmount the whole tree
//   If an error boundary is unmounted, it will not catch errors anymore
//   If you need to catch an error inside an event handler, use the regular JavaScript try / catch statement: