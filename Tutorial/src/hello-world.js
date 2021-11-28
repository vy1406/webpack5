import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Header from './components/header/header'
import React from 'react'

const header = new Header();
header.render('hello world...')

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render()

