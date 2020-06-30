import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from "redux";

import EventsList from '../components/events/EventsList';
import Statistic from '../components/Statistics';

function Home({ events }) {
  return (
    <section className="section">
      <h1>Home</h1>
      <div className="container">
        <Statistic events={events} />
        <EventsList events={events} />
      </div>
    </section>
  )
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    events: state.firestore.ordered.events
  }
}
export default compose(connect(mapStateToProps),
  firestoreConnect((props) => {
    if (!props.auth.uid) return []
    return [
      {
        collection: 'events',
        where: [
          ['authorId', '==', props.auth.uid]
        ]
      }
    ]
  }))(Home);