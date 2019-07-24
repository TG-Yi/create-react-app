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
        let arr = []
        for(let i = 0; i< 100; i++) {
            arr.push(i + "adjsasd时间啊和读卡机是的看见阿士大夫空间啊上打开哈斯柯达")   
        }
        return (
            <div className={styleClass}>
                <Header/>
 
                <div style={{ width: "100%", backgroundColor: "#00a4ff" }}>
                    <div>5555555555555555555555 </div>
                    {
                        arr.map((item, index) => {
                            return(
                                <div key={index}>{item}</div>
                            )
                        })
                    }
                    <div>aaaaaaaaaaaaaaa</div>
                </div>
                
                <Footer/>
            </div>
        )
    }
}

export default Index