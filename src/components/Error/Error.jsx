import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentDidMount() {
    window.addEventListener('offline', () => {
      window.addEventListener('online', () => {
        const { hasError } = this.state;
        if (hasError) this.reload();
      });
    });
  }

  reload = () => {
    window.location.reload();
  };

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <section id="error" className="error">
          <h2>Oops! Encontramos um erro inesperado.</h2>
          <h1>500</h1>
          <p>Algo nos impediu de atender a sua solicitação.</p>
          <button
            type="button"
            className="btn btn--primary"
            title="Tentar novamente"
            onClick={this.reload}
          >
            Recarregar
          </button>
        </section>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
