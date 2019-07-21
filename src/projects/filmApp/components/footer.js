import React, { Component } from "react"
import propTypes from 'prop-types';

import "./footer.less"

const styleClass = "footer-style"

class Footer extends Component {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super()
        this.state = {

        }
    }

    render() {
        return(
            <div className={styleClass}>
                <div className={`${styleClass}-footer`}>
                    <div>菜单标题</div>
                    <div>菜单标题</div>
                    <div>菜单标题</div>
                    <div>菜单标题</div>
                    <div>菜单标题</div>
                </div>
            </div>
        )
    }
}

export default Footer