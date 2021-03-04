import React,{useState,Fragment} from "react";
import {Keyboard,TouchableWithoutFeedback,View} from "react-native";
import Container from "../../components/Container";
import SarchInput from "../../components/SearchInput";
import ListDoctors from "../../components/ListDoctors";
import QueryResultList from "../../components/QueryResultsList";

export default function Doctores(){
    const [query, setQuery] = useState("");
    const doSearch = (e) => {
        setQuery(e);
    };

    return (
        <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false}>
                <Fragment>
                    <SarchInput onUpdate={doSearch} />
                    <Container>
                        {query !== "" ? (
                            <QueryResultList query={query} />
                        ) : (
                            <ListDoctors />
                        )}
                    </Container>
                </Fragment>
            </TouchableWithoutFeedback>
        </View>
    );
};
