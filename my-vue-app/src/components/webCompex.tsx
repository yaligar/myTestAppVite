import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactComp from './reactComp'


export default class WebCompEx extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:'open'})
    }
     connectedCallBack(){
        const root = ReactDOM.createRoot(this.shadowRoot)
        root.render(<ReactComp />)
    }
 
}
customElements.define("my-web-example", WebCompEx)