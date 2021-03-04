import React,{Fragment,useState,useEffect} from "react";
import {FlatList,View} from "react-native";
import {Spinner} from "native-base";

import styles from './style';
import apiCall from '../../services/api';
import BookDoctorCard from '../BookDoctorCard';

export default function HorizontalListDoctors(){
    const [data,setData]=useState("");

    useEffect(() => {
        getData();
    }, []);

    const getData=async()=>{
        try{
            let method='GET';
            let url='appdoctores';
            let data=null;
            let head={'Content-Type': 'application/json'};
            const responsePost = await apiCall(method,url,data,head);
            if(responsePost.data){
                setData(responsePost.data.doctores);
            }
        }catch(e){
            console.log(e);
        }
    }

    return (
        <Fragment>
        {data ? 
            <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={true}
            initialNumToRender={2}
            horizontal
            data={data}
            renderItem={({ item, index }) => (
                <View
                    style={[
                        styles.item,
                        index === 0 && { marginLeft: 10 },
                    ]}>
                    <BookDoctorCard {...item} />
                </View>
            )}
            keyExtractor={(item) => item.doctor_id}
        />
        :
        <View style={styles.containerCharging}>
            <Spinner size={28} color={"#5e9931"}/>
        </View>
        }
    </Fragment>
    );
};

