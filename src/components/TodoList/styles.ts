import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    item: {
        fontFamily: theme.fonts.Inter_Regular,
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 19,
        textAlign: 'left',
    },
    ContainerRender: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.ui.BORDER_BOTTOM,
    },
    ContainerItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    RemoveItem: {
        width: 89,
        height: 17,
        color: theme.colors.bg.PRIMARY,
        textDecorationLine: 'underline',
        fontFamily: theme.fonts.Inter_Regular,
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 17,
        textAlign: 'left',
    },
});