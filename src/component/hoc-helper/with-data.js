import React, { Component } from "react";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator";

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
      if (
        this.props.getData !== prevProps.getData ||
        this.props.page !== prevProps.page
      ) {
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    update() {
      this.setState({
        loading: true,
        error: false,
      });
      this.props
        .getData(this.props.page)
        .then((data) => {
          this.setState({
            data: data.items,
            loading: false,
          });
          this.props.onTotalItemsSet(Math.ceil(data.count / 10));
        })
        .catch(() => {
          this.setState({
            error: true,
            loading: false,
          });
        });
    }

    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return <Spinner />;
      }
      if (error) {
        return <ErrorIndicator />;
      }
      return <View {...this.props} data={data} />;
    }
  };
};
export default withData;
