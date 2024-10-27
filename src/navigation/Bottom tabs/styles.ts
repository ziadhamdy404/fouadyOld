import { Dimensions, Platform, StyleSheet } from "react-native";
import { COLORS } from "../../constants";
// import { colors } from '../../theme';
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    tabBarIcon:
    {
        // position: 'absolute',
        // top: 12,
        // alignItems:"center",
        // backgroundColor:"red"
    },
    Calculator:
    {
        width: 30,
        height: 50,
        // backgroundColor: colors.third,
        // borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center',
        // borderTopColor: COLORS.secondary,
        // borderTopWidth: 3
        // marginBottom: Platform.OS == "android" ? 50 : 30
    },
    tabBarStyle:
    {
        backgroundColor: COLORS.white,
        height: 55
    },
    RequestsText: {
        fontSize: 10,
        color: COLORS.white,
        marginTop: 2,
        fontWeight: '500'
    }
});

export default styles