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
        <EventsList events={events} />
        <Statistic events={events} />
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
    const date1 = new Date();
    const date2 = new Date();

    console.log(date1, date2)

    if (!props.auth.uid) return []
    return [
      {
        collection: 'events',
        where: [
          ['authorId', '==', props.auth.uid],
          ['addedAd', '>=', date1],
          ['addedAd', '<=', date2]
        ]
      }
    ]
  }))(Home);