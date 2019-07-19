import React, { Component } from "react"
import Header from "./components/header"

import "./index.less"

const styleClass = "index-style"


class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentWillMount() {
        // 监听路径变化

    }

    componentDidMount() {

    }


    render() {
        return (
            <div className={styleClass}>
                <Header/>

                <div style={{ width: "100%", backgroundColor: "#00a4ff", height: 10000 }}>

                </div>
            </div>
        )
    }
}

export default Index