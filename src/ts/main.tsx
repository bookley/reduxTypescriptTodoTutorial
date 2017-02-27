import * as React from 'react'
import { createStore } from 'redux'
import todoApp  from './reducers/reducers'

let store = createStore(todoApp);