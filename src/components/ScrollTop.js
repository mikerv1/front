// import { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { useEffect, Children, useRef } from "react";
import { useLocation } from "react-router-dom";

// class ScrollToTop extends Component {
//     componentDidUpdate(prevProps) {
//       if (this.props.location.pathname !== prevProps.location.pathname) {
//         window.scrollTo(0, 0);
//       }
//     }

//     render() {
//       return this.props.children;
//     }
//   }

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return props.children;
// }

function ScrollToTop(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [props.location])

  return (
    props.children
  )

}


  export default withRouter(ScrollToTop);
