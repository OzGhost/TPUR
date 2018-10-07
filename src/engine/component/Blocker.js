import React from 'react'

const Blocker = (lock = true) => {
  return (
    <div className="blocker__ground lock">
      <div className="blocker__loader">
        <div className="boxer">
          <div className="boxer__left-cylinder">
            <div className="rod"></div>
            <div className="piston"></div>
          </div>
          <div className="boxer__right-cylinder"></div>
          <div className="boxer__center-sprocket"></div>
        </div>
      </div>
    </div>
  )
}

export default Blocker
