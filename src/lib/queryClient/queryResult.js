import React from "react";
import PropTypes from "prop-types";

const DataFetcher = ({ queryResult, render, ...props }) => {
  const { data, isLoading, isFetching, isError, isSuccess } = queryResult;

  if (isLoading && isFetching) {
    return props.renderLoading ? props.renderLoading : <p>Loading...</p>;
  }

  if (isError) {
    return props.renderError ? props.renderError : <p>Error</p>;
  }

  if (isSuccess && data) {
    return render(data);
  }

  return <p>Something went wrong</p>;
};

DataFetcher.propTypes = {
  queryResult: PropTypes.shape({
    data: PropTypes.any,
    isLoading: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
  }).isRequired,
  render: PropTypes.func.isRequired,
  renderLoading: PropTypes.node,
  renderError: PropTypes.node,
};

export default DataFetcher;
