import React,{useState,Fragment,useEffect} from "react";
import {FlatList,Image,View} from "react-native";
import {Spinner} from "native-base";
import {Surface} from "react-native-paper";

import styles from './style';
import apiCall from '../../services/api';

export default function HorizontalListAds(){
    const [data,setData]=useState("");

    useEffect(() => {
        getData();
    }, []);

    const getData=async()=>{
        try{
            let method='GET';
            let url='imagenespromociones';
            let data=null;
            let head={'Content-Type': 'application/json'};
            const responsePost = await apiCall(method,url,data,head);
            if(responsePost.data){
                setData(responsePost.data);
            }
        }catch(e){
            console.log(e);
        }
    }

    return (
        <Fragment>
        {data ? 
            <FlatList
            showsHorizontalScrollIndicator={false}
            initialNumToRender={1}
            horizontal={true}
            data={data}
            renderItem={({ item }) => (
                <Surface style={styles.container}>
                    <Image
                        resizeMode="stretch"
                        source={{uri:item.promocion}}
                        style={styles.img}
                    />
                </Surface>
            )}
            keyExtractor={(item,index) => index}
        />
        :
        <View style={styles.containerCharging}>
            <Spinner size={28} color={"#5e9931"}/>
        </View>
        }
    </Fragment>
    );
};

