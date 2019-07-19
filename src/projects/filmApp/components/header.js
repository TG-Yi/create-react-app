import React, { Component } from "react"
import propTypes from 'prop-types';

import "./header.less"

const styleClass = "header-style"


class Header extends Component {
    static propTypes = {
        leftColor: propTypes.string,
        rightColor: propTypes.string,
        leftSize: propTypes.string,
        rightSize: propTypes.string,
        titleText: propTypes.string,
        titleSize: propTypes.string,
        titleColor: propTypes.string,
        headerBGC: propTypes.string,
    }

    static defaultProps = {
        leftColor: "#ffffff",
        rightColor: "#ffffff",
        leftSize: "14px",
        rightSize: "14px",
        titleText: "顶部标题描述",
        titleSize: "14px",
        titleColor: "#ffffff",
        headerBGC: "#000000",
    }

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
        const { leftColor, rightColor, leftSize, rightSize, titleText, titleColor, titleSize, headerBGC } = this.props
        return (
            <div className={styleClass}>
                <div className={`${styleClass}-head`} style={{ backgroundColor: headerBGC, borderBottom: "1px solid #000000" }}>
                    <div className={`${styleClass}-head-left`}>
                        <text style={{ color: leftColor, fontSize: leftSize }}>&lt;</text>
                    </div>
                    <text style={{ fontSize: titleSize, color: titleColor }}>{titleText}</text>
                    <div className={`${styleClass}-head-right`}>
                        <text style={{ color: rightColor, fontSize: rightSize }}>完成</text>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header