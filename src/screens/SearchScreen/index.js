import React,{useState} from "react";
import {
    Keyboard,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {IconButton} from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Container from "../../components/Container";
import SarchInput from "../../components/SearchInput";
import ListDoctors from "../../components/ListDoctors";
import QueryResultList from "../../components/QueryResultsList";
import styles from './style';

export default function SearchScreen({ navigation }){
    const [query, setQuery] = useState("");
    const doSearch = (e) => {
        setQuery(e);
    };

    const goBack = () => {
         navigation.goBack();
    };

    return (
        <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false}>
                <React.Fragment>
                    <View style={styles.header}>
                        <View style={styles.buttonBackContainer}>
                            <IconButton
                                icon={() => (
                                    <MaterialIcons
                                        name="arrow-back"
                                        size={24}
                                        color="black"
                                    />
                                )}
                                onPress={goBack}
                            />
                        </View>
                        <SarchInput
                            autoFocus={true}
                            onUpdate={doSearch}
                            style={styles.searchStyle}
                        />
                    </View>
                    <Container>
                        <View
                            style={{
                                display: query === "" ? "flex" : "none",
                                paddingTop: 15,
                            }}>
                            <ListDoctors />
                        </View>
                        {query !== "" && <QueryResultList query={query} />}
                    </Container>
                </React.Fragment>
            </TouchableWithoutFeedback>
        </View>
    );
};
