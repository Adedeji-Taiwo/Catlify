import React from 'react';
import Loader from 'react-loader-spinner';



const Loading = () => (
  <div style = {spinnerStyle}>
    <Loader type = "TailSpin" color = "#6068e7" height = "100" width ="100" />
  </div>
)

const spinnerStyle = {
  width: "100%",
  height: "100",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

export default Loading;