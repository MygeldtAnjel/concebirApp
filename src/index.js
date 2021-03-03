import * as React from "react";
import {
    DefaultTheme,
    Provider as PaperProvider
} from "react-native-paper";
import Routes from "./routes";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#5e9931",
        accent: "#2a7632",
        error: "tomato",
    }
};

export default function Root() {
    return (
        <PaperProvider theme={theme}>
                <Routes />
        </PaperProvider>
    );
}
