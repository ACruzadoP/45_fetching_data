import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.dev/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }
    
    componentDidMount() {

        this.setState({
            loading: true
        })

        const url = "https://swapi.dev/api/people/1"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
            .catch(() => console.log("Can't access " + url))
    }

    render() {
        const text = this.state.loading ?
        "Loading..." :
        this.state.character.name

        return (
            <div>
                {text}
            </div>
        )
    }
}

export default App
