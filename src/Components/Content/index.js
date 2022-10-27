import { useEffect } from "react"

const Content = () => {
  useEffect(() => {

    // this will represent a process
    let intervalId = setInterval(() =>{
      console.log('Content Mounted and running....')
    }, 1000);

    return () => {
      // remember console.log translates to Doing a thing
      console.log('Component Unmounted!! It is not running anymore.');
      // Turns off the process so we can see the unmount message
      clearInterval(intervalId);
    }
  })

  return(
    <h2> I AM THE COMPONENT THAT IS RUNNING A PROCESS!!!</h2>
  )
}

export default Content;
