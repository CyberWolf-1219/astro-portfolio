import React, { Children, Component, ReactNode } from 'react';
import Error from '../Error/Error';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: string | null;
}

class ErrorBoundry extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  constructor(props: Props) {
    super(props);
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ hasError: true, error: error.message });
    console.group('ERROR ==============');
    console.log(error);
    console.log(errorInfo.componentStack);
    console.groupEnd();
  }

  render() {
    if (this.state.hasError) {
      return <Error error={this.state.error!} />;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundry;
