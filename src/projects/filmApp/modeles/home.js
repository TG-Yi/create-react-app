import React, { Component } from "react"
import { connect } from "react-redux";

import "./home.less"

const styleName = "home-style"

class Home extends Component {
    constructor(props) {
        super()
        console.log("homeprosp", props)
        this.state = {
            index: props.indexName || 0
        }
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    onAdd = () => {
        this.props.onReduxChange({ indexName: ++this.state.index })
    }
    onSub = () => {
        this.props.onRead({ indexName: --this.state.index })
    }
    onHome = () => {
        if (this.state.index < 5) {
            ++this.state.index
        } else {
            --this.state.index
        }
        this.props.onHome({ indexName: this.state.index })
    }

    render() {
        const { homeStore, readStore, indexName } = this.props
        return (
            <div className={styleName}>
                <div className={`${styleName}-div-c`}>总数：{this.state.index}</div>
                <div className={`${styleName}-div`}>
                    <span>累加：{homeStore.indexName}</span>
                    <img className={`${styleName}-div-img`} onClick={this.onAdd} src={require('../../../assets/image/jia.png')} alt="" />
                </div>
                <div className={`${styleName}-div`}>
                    <span>&lt;5加一否则累减：{indexName}</span>
                    <img className={`${styleName}-div-img`} onClick={this.onHome} src={require('../../../assets/image/jisuan.png')} alt="" />
                </div>
                <div className={`${styleName}-div`}>
                    <span>累减：{readStore.indexName}</span>
                    <img className={`${styleName}-div-img`} onClick={this.onSub} src={require('../../../assets/image/jian.png')} alt="" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onReduxChange: (action) => dispatch({
            type: "homeStore",
            action
        }),
        onRead: (action) => dispatch({
            type: "readStore",
            action
        }),
        onHome: (action) => dispatch({
            type: "",
            action
        })
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);