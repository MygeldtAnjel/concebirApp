import * as React from "react";
import { Searchbar } from "react-native-paper";

export default function SarchInput(props){
    const { onUpdate, defaultValue, style, autoFocus } = props;
    const [searchQuery, setSearchQuery] = React.useState(defaultValue ? defaultValue : "");

    const onChangeSearch = (query) => {
        setSearchQuery(query);
    };

    React.useEffect(() => {
        if (onUpdate) {
            let timer1 = setTimeout(() => onUpdate(searchQuery), 1000);

            return () => {
                clearTimeout(timer1);
            };
        }
    }, [searchQuery]);

    return (
        <Searchbar
            autoFocus={autoFocus ?? false}
            style={style ?? {}}
            autoCapitalize="none"
            placeholder="Buscar"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
    );
};