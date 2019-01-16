import React, { Component } from 'react'

import Jumbotron from './Jumbotron';

class HomeownerHome extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
          <Jumbotron title="HOMEOWNER HOME PAGE" subtitle="There when you need it!"/>
        )

    }
}

export default HomeownerHome
