import React,{useState,useEffect,Fragment} from "react";
import {FlatList,View} from "react-native";
import ResultBookDoctorCard from "../ResultBookDoctorCard";
import {Spinner} from "native-base";

import apiCall from '../../services/api';
import styles from './style';

export default function ListDoctors(){
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
            initialNumToRender={4}
            data={data}
            renderItem={({ item }) => (
                <View style={{ paddingBottom: 10 }}>
                    <ResultBookDoctorCard {...item} />
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
