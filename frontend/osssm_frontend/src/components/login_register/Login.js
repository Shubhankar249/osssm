import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="" ref={this.props.containerRef}>
                <div className="">Login</div>
                <div className="content">
                    <div className="">
                        <img src=""/>
                    </div>
                    <div className="">
                        <form className="">
                            <div class="">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="Username"/>
                            </div>
                            <div class="">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="Password"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="">
                    <button className="" type="submit">Login</button>
                </div>
            </div>
        )
    }
}

