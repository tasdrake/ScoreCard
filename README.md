To start the app:
1. If you do not have yarn: ```$ brew install yarn```
1. If you are using Atom: ```$ apm install editorconfig```
1. ```$ yarn install```
1. ```$ yarn start```

In Xcode
1. Open scoreCard/ios/scoreCard.xcodeproj
1. Select target device, either the simulator or a connected device
1. Click run

Register your iPhone for HockeyApp at https://rink.io/sABWRPY, for installing the app for longer a longer time.

Occasionally if you get the same error repeatedly sometimes ```$ yarn start --reset-cache``` will solve the problem.

If you get errors in Xcode ```$ rm -rf node_modules && yarn install ``` will usually fix the problem

Snippets for ~/.atom/snipets.cson:

```cson
'.source.js':
    'Import React Native':
        'prefix':'imptrn'
        'body': """
            import React, { Component } from 'react';
            import styles from '../css/$1'

            type Props = {}
            export default class $1 extends Component<Props> {
                constructor(props){
                    super(props);
                    this.state = {

                    }
                }
                
                render(){
                    return (
                        $2
                    )
                }
            }
        """
    'React Native Style':
        'prefix': 'rnstyle'
        'body': """
            import { StyleSheet } from 'react-native'
            import colors from './colors'

            module.exports = StyleSheet.create({
                $1: {
                    $2
                }
            })
        """
    'Image':
        'prefix': 'Image'
        'body': '<Image source={{uri: $1}} />'
    'Text':
        'prefix': 'Text'
        'body': '<Text>$1</Text>'
    'View':
        'prefix': 'View'
        'body': """
            <View>
                $1
            </View>
        """
    'ScrollView':
        'prefix': 'ScrollView'
        'body': """
            <ScrollView>
                $1
            </ScrollView>
        """
    'TouchableOpacity':
        'prefix': 'touch'
        'body': """
            <TouchableOpacity>
                $1
            </TouchableOpacity>
            """
```
