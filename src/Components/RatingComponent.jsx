import React from 'react'

const RatingComponent = ({rating}) => {
  return (
    <div>
        {[1,2,3,4,5].map((star) => {
            return (
                <span key={star}
                style={{
                    color: rating >=star ? "gold" : "gray",
                    fontSize: `16px` 
                }}
                >
                    {' '}★{' '}
                </span>
            )
        })}
    </div>
  )
}

export default RatingComponent