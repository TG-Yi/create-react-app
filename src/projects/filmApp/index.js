import React, { Component } from "react"
import { route } from "react-router"
import { directive } from "@babel/types";


export default class IndexRouter extends Component {
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

        return(
            <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                <text>app路由页</text>

            </div>
        )
    }
}