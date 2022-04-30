import React from 'react'


/* To make the company ownership chart, we need to 
prepare the data before it reaches the chart, this can be done by
sending two get requests, one for money invested and one for hours worked, next
the hours worked chart requires us to mutliply all amounts by a certain number, for the
sake of sanity lets hardcode it to $30 per hour, next we need to add all those amounts together
if there is more than 1 transaction for a given user, for the given company
Next we need to add that data to the money invested array 
before we can finally send it to the damn chart */
export default function EndTimes() {
  return (

    <div>EndTimes</div>

  )
}
