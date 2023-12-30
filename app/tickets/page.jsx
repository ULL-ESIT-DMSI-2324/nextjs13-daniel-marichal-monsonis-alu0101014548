import React from 'react'
import TicketList from './TicketList'

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>
            <p><small>Currently open tickets.</small></p>
          </h2>
        </div>
      </nav>

      <TicketList />
    </main>
  )
}
