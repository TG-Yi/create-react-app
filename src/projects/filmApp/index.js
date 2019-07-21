import React, { Component } from "react"
import Header from "./components/header"
import Footer from "./components/footer"

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
                <Footer/>
            </div>
        )
    }
}

export default Index