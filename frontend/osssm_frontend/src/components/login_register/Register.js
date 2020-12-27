import React, { Component } from 'react'

export class Register extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className=""  ref={this.props.containerRef}>
                <div className="">Register</div>
                <div className="">
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
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="Email Id"/>
                            </div>
                            <div class="">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="Password"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="">
                    <button className="" type="submit">Register</button>
                </div>
            </div>
        )
    }
}
