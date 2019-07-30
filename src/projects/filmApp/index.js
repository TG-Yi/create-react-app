import React, { Component } from "react"
import { Provider } from "react-redux"
import { reduxStore } from "./store/storeHome"
import Header from "./components/header"
import Footer from "./components/footer"
import "./index.less"

import Home from "./modeles/home"

const styleClass = "index-style"

class Index extends Component {

    constructor(props) {
        super(props)
        console.log("props", props)
        this.state = {

        }
    }

    componentWillMount() {
        // 监听路径变化

    }

    componentDidMount() {
        
    }

    

    render() {
        // let arr = []
        // for (let i = 0; i < 100; i++) {
        //     arr.push(i + "adjsasd时间啊和读卡机是的看见阿士大夫空间啊上打开哈斯柯达")
        // }
        console.log("reduxStore", this.rpos)
        return (
            <Provider store={reduxStore}>
                <div className={styleClass}>
                    <Header />

                    <div style={{ width: "100%", backgroundColor: "#00a4ff" }}>
                        <div>5555555555555555555555 </div>
                        <Home/>
                        <div>aaaaaaaaaaaaaaa</div>
                    </div>

                    <Footer />
                </div>
            </Provider>
        )
    }
}

export default Index