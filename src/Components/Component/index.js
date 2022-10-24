// creating this file as a functional component

import './style.css';

// Props is literally passed to the function
const Content = (props) => {

  let { changeTitle }  = props;

  return (
    <>
      <h3>You can make changes to the Document!</h3>
      <button data-testid="content-button" onClick={() => changeTitle('This worked!')}>
        Change Title
      </button>
    </>
  )
}


export default Content
