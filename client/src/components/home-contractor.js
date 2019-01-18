import React, { Component } from 'react'

import Jumbotron from './Jumbotron';

import Listings from './Listings'

class ContractorHome extends Component {
    //render listings here
    render() {
        const imageStyle = {
            width: 400
        }

        return (
          <Listings />
        )
    }
}

export default ContractorHome
