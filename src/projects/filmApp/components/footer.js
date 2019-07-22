import React, { Component } from "react"
import propTypes from 'prop-types';

import "./footer.less"

const styleClass = "footer-style"

class Footer extends Component {
    static propTypes = {
        titleArray: propTypes.array,
        activeStyle: propTypes.object,
    }

    static defaultProps = {
        titleArray: [
            { title: "标题1", onClick: (item) => console.log(item), color: "#9f9f9f", fontSize: "12px", backgroundColor: "#dgdgdg" },
            { title: "标题2", onClick: (item) => console.log(item), color: "#9f9f9f", fontSize: "12px", backgroundColor: "#dgdgdg" },
            { title: "标题3", onClick: (item) => console.log(item), color: "#9f9f9f", fontSize: "12px", backgroundColor: "#dgdgdg" },
            { title: "标题4", onClick: (item) => console.log(item), color: "#9f9f9f", fontSize: "12px", backgroundColor: "#dgdgdg" },
            { title: "标题5", onClick: (item) => console.log(item), color: "#9f9f9f", fontSize: "12px", backgroundColor: "#dgdgdg" }
        ],
        activeStyle: { color: "red", backgroundColor: "blue" }
    }

    constructor(props) {
        super()
        this.state = {

        }
    }

    onMouseUp = (item, index) => {
        if (item.activeStyle) {
            this.refs[index].style = item.activeStyle
            console.log(index)
        } else if (this.props.activeStyle) {
            for(var data in this.refs ) {
                if( data == index ) {
                    Object.assign(this.refs[data].style, this.props.activeStyle)
                } else {
                    Object.assign(this.refs[data].style, {color: "", backgroundColor: ""})
                }
            }

            console.log(this.refs[index].style.color)
        }
    }

    render() {
        const { titleArray } = this.props
        return (
            <div className={styleClass}>
                <div className={`${styleClass}-footer`}>
                    {
                        titleArray.map((item, index) => {
                            return (
                                <div className={`${styleClass}-footer-div`} ref={index} key={index} onClick={() => item.onClick(item)} onMouseUp={() => this.onMouseUp(item, index)}>{item.title}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Footer