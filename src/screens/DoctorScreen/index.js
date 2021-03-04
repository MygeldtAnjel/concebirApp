import React,{useState,useEffect,Fragment} from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import Container from "../../components/Container";
import SarchInput from "../../components/SearchInput";
import ListDoctors from "../../components/ListDoctors";
import QueryResultList from "../../components/QueryResultsList";

export default function DoctorScreen({route}){
    const { query: queryParam } = route.params;
    const [query, setQuery] = useState("");

    const doSearch = (e) => {
        setQuery(e);
    };

    useEffect(() => {
        doSearch(queryParam);
    }, [queryParam]);

    return (
        <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false}>
                <Fragment>
                    <SarchInput onUpdate={doSearch} defaultValue={queryParam} />
                    <Container>
                        <View
                            style={{
                                display: query === "" ? "flex" : "none",
                            }}>
                            <ListDoctors />
                        </View>
                        {query !== "" && <QueryResultList query={query}/>}
                    </Container>
                </Fragment>
            </TouchableWithoutFeedback>
        </View>
    );
};
