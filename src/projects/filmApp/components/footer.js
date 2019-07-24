import React, { Component } from "react"
import propTypes from 'prop-types';

import "./footer.less"

const styleClass = "footer-style"
let refData = {}
class Footer extends Component {
    static propTypes = {
        titleArray: propTypes.array,
        activeStyle: propTypes.object,
    }

    static defaultProps = {
        // 底部菜单集合：title：描述内容；onClick：点击事件；activeStyle：菜单选中后的样式；样式属性可以自定义添加到集合里面，需要按照在react中写行内样式格式即可
        titleArray: [
            { title: "标题1", onClick: (item) => console.log(item), color: "#9f9f9f", fontSize: "12px", backgroundColor: "yellow", activeStyle: { color: "#fff", backgroundColor: "red", boxShadow: "rgb(220, 223, 227) 0px 0px 15px inset" } },
            { title: "标题2", onClick: (item) => console.log(item), color: "#9f9f9f", fontSize: "12px", backgroundColor: "yellow", activeStyle: { color: "#fff", backgroundColor: "red", boxShadow: "rgb(220, 223, 227) 0px 0px 15px inset" } },
            { title: "标题3", onClick: (item) => console.log(item), color: "#9f9f9f", fontSize: "12px", backgroundColor: "yellow" },
            { title: "标题4", onClick: (item) => console.log(item), color: "#9f9f9f", fontSize: "12px", backgroundColor: "yellow" },
            { title: "标题5", onClick: (item) => console.log(item), color: "#9f9f9f", fontSize: "12px", backgroundColor: "yellow" }
        ],
        // 全局下的选中样式
        activeStyle: { color: "#fff", backgroundColor: "blue", boxShadow: "rgb(220, 223, 227) 0px 0px 15px inset" }
    }

    constructor(props) {
        super()
        this.state = {
            
        }
    }

    componentWillMount() {
        console.log(this.index)
    }

    // 选中后改变样式
    onMouseUp = (item, index) => {
        if (item.activeStyle) {
            Object.assign(refData[index].style, item.activeStyle)
            this.onRemoveStyle(item, index)
            console.log(index)
        } else if (this.props.activeStyle) {
            Object.assign(refData[index].style, this.props.activeStyle)
            this.onRemoveStyle(item, index)
        }
    }

    // 清除选中样式
    onRemoveStyle = ( item, index ) => {
        for (var data in refData) {
            if (data != index) {
                console.log(refData[data].style)
                Object.assign(refData[data].style, { color: item.color && item.color, backgroundColor: item.backgroundColor && item.backgroundColor, fontSize: item.fontSize && item.fontSize, boxShadow: item.boxShadow && item.boxShadow })
            }
        }
    }

    onRef = (ref, index) => {
        refData[index] = ref
    }

    render() {

        const { titleArray } = this.props
        return (
            <div className={styleClass}>
                <div className={`${styleClass}-footer`}>
                    {
                        titleArray.map((item, index) => {
                            return (
                                <div className={`${styleClass}-footer-div`} ref={(ref) => this.onRef(ref, index)} key={index} onClick={() => item.onClick(item)} onMouseUp={() => this.onMouseUp(item, index)} style={{ color: item.color && item.color, fontSize: item.fontSize && item.fontSize, backgroundColor: item.backgroundColor && item.backgroundColor }}>{item.title}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Footer