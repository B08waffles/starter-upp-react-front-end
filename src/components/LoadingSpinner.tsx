import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function LoadingSpinner() {
  return (
    <Spinner animation="border" role="status" variant='secondary'
     style={{display: "block", position: "fixed", zIndex: "1031", top: "45%", right: "45%", minHeight: "14em", minWidth: "14em"}}>
        
  <span className="visually-hidden">Loading...</span>
</Spinner>
  )
}
