import React, { Component } from "react"
import { connect } from "react-redux";

let index = 0
class Home extends Component {
    constructor(props) {
        super()
        console.log("homeprosp", props)
        this.state = {
          
        }
    }

    componentWillMount() {
        console.log("componentWillMount", this.props)
    }

    componentDidMount() {
        console.log("componentDidMount", this.props)
    }

    componentWillReceiveProps(props) {
        console.log("homeprosp", props)
    }

    onAdd = () => {
        this.props.onReduxChange({type:"indexName", indexName: index++})
    }

    render() {
        return(
            <div>
                <div onClick={this.onAdd}>首页展示{this.props.indexName}</div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {...state};
};
const mapDispatchToProps=(dispatch)=>{
    return {
        onReduxChange: (action) => {dispatch(action)}
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Home);