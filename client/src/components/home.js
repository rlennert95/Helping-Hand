import React, { Component } from 'react'

import Jumbotron from './Jumbotron';

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
          <Jumbotron title="Helping Hand" subtitle="There when you need it!"/>
        )

    }
}

export default Home
