import React, { Component} from 'react';

class ErrorBoundary extends Component {
    constructor (props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidMount(error, info) {
        this.setState({ hasError: true })
    }

    render () {
        if (!this.state.hasError) {
            return <h1>Ooopss... that is not good ...</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;