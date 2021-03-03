import React,{Fragment} from 'react';
import {StatusBar,Image} from 'react-native';

import styles from './style';
import SplashImage from '../../../assets/splash.png';

export default function SplashScreen(){
    return(
        <Fragment>
            <StatusBar backgroundColor="#fff"/>
                <View style={styles.contentSplash}>
                        <Image source={SplashImage} style={styles.imgAnunc}/>
                </View>
        </Fragment>
    )
}