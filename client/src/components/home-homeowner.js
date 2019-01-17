import React, { Component } from 'react'

import Jumbotron from './Jumbotron';

import Jobs from '../pages/Jobs'

class HomeownerHome extends Component {
    constructor() {
        super()
    }

    //render form here
    render() {
        const imageStyle = {
            width: 400
        }
        return (
          <Jobs />
        )

    }
}

export default HomeownerHome
