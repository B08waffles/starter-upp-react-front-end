import React from 'react'
import { Container, Spinner } from 'react-bootstrap'

export default function LoadingSpinner() {
  return (
    <><br/><br/>
    <Container fluid className="text-center">
    <Spinner animation="border" role="status" variant='secondary'
      style={{minHeight: "14em", minWidth: "14em"}}
    >
        
  <span className="visually-hidden">Loading...</span>
</Spinner></Container></>
  )
}
