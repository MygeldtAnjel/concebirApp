import React,{Fragment,useEffect,useState} from "react";
import {FlatList,View} from "react-native";
import ResultBookDoctorCard from "../ResultBookDoctorCard";
import {Spinner} from "native-base";

import apiCall from '../../services/api';
import styles from './style';

export default function QueryResultList({ query }){
    const [data,setData]=useState("");

    useEffect(() => {
        getData();
    }, []);

    const getData=async()=>{
        setData("");
        try{
            let method='GET';
            let url='appdoctores';
            let data=null;
            let head={'Content-Type': 'application/json'};
            const responsePost = await apiCall(method,url,data,head);
            if(responsePost.data){
                let dataFinal=findDoctor(query,responsePost.data.doctores);
                setData(dataFinal);
            }
        }catch(e){
            console.log(e);
        }
    }

    const findDoctor=(search,doctors)=>{
        const findDoctor = doctors.filter((doctor) => {
            const s = !!doctor.sedes.find((sede) => {
                return sede.nombre.toUpperCase().includes(search.toUpperCase());
            });
            const d = doctor.nombre.toUpperCase().includes(search.toUpperCase());
            return s || d;
        });
        return findDoctor;
    }

    return (
        <Fragment>
            {data ? 
                <FlatList
                showsVerticalScrollIndicator={false}
                initialNumToRender={4}
                data={data}
                renderItem={({ item }) => (
                    <View style={{ margin: 5 }}>
                        <ResultBookDoctorCard {...item} />
                    </View>
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
