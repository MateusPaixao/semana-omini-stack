import React from 'react';
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket',
    'Warning: Encountered two children with the same'
])

import Routes from './routes'

export default function App() {
    return <Routes />
}
