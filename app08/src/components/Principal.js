import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './TabBarMenu';
import Conversas from './Conversas';
import Contatos from './Contatos';

export default class Principal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            routes: [
                { key: '1', title: 'Conversas' },
                { key: '2', title: 'Contatos' }
            ],
        };
    }

    render() {
        return (
            <TabView
                style={styles.scene}
                
                navigationState={this.state}
                renderScene={SceneMap({
                    1: Conversas,
                    2: Contatos,
                })}
                renderTabBar={props => <TabBarMenu {...props} />}
                initialLayout={{ width: Dimensions.get('window').width }}
                onIndexChange={index => this.setState({ index })}
            />
        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1
    },
});
