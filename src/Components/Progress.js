import React from 'react'

const Progress = ({done}) => {
    
    return (
        <div>
            <div className="progress" style={
                {
                    width: `100%`,
                    background:`#FDC203`,
                    borderRadius: `7px`,
                    height: `10px`
                }
        
                }>
                <div className="progress-done" style={{
                    width: `${done}%`,
                    background: `#27AE60`,
                    textAlign: `center`,
                    paddingTop: `8px`,
                    borderRadius: `7px`
                }}>
                    
                </div>
            </div>
        </div>
    )
}

export default Progress
