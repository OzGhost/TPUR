import React from 'react'

const Blocker = ({lock}) => {
  const groundClass = "blocker__ground" + (lock ? " lock" : "")
  return (
    <div className={groundClass}>
      <div className="blocker__loader">
        <div className="boxer">
          <div className="boxer__left-cylinder">
            <div className="rod"></div>
            <div className="piston"></div>
          </div>
          <div className="boxer__right-cylinder">
            <div className="rod"></div>
            <div className="piston"></div>
          </div>
          <div className="boxer__center-sprocket"></div>
        </div>
      </div>
    </div>
  )
}

export default Blocker
