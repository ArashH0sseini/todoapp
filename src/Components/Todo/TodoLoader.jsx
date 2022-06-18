import React from "react"
import ContentLoader from "react-content-loader"

const TodoLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1350}
    height={360}
    viewBox="0 0 1350 360"
    backgroundColor="#f3f3f3"
    foregroundColor="#ababab"
    {...props}
  >
    <rect x="0" y="0" rx="6" ry="6" width="102" height="40" />
    <rect x="115" y="0" rx="6" ry="6" width="80" height="40" />
    <rect x="0" y="60" rx="6" ry="6" width="1350" height="55" /> 
    <rect x="0" y="140" rx="6" ry="6" width="1350" height="55" /> 
    <rect x="0" y="220" rx="6" ry="6" width="1350" height="55" /> 

  </ContentLoader>
)

export default TodoLoader;