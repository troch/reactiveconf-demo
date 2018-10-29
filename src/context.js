import React from 'react'
import api from './api'
import storage from './storage'

const DependencyContext = React.createContext({
    api,
    storage
})

export default DependencyContext
