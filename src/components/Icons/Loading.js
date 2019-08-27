import React from "react";
import _ from "lodash";
import loadingImageUrl from "./assets/images/loading.svg";

export const Loading = props => {
  const imgProps = _.assign({}, props);
  imgProps.src = imgProps.src || loadingImageUrl;

  return <img {...imgProps} alt={imgProps.alt || ""} />;
};
