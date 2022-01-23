import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Images } from '../../containers/constant'
import { hp, wp } from '../../utils/helper'
import InputField from '../atoms/InputField'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={props.TitleButton}><Image source={Images.sicon} style={styles.titleicon} /></TouchableOpacity>
            <View style={styles.subheader}>
                <InputField
                    placeholder="Shop"
                    onChangeText={props.onChangeText}
                    value={props.value}
                />
                <TouchableOpacity onPress={props.searchButton}><Image source={Images.search} style={styles.search} /></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "row",
    },
    titleicon: {
        height: hp(60),
        width: wp(60)
    },
    subheader: {
        flex: 1,
        borderWidth: 1,
        height: hp(40),
        borderColor: "black",
        marginVertical: hp(8),
        marginHorizontal: wp(8),
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(5),
        paddingVertical: hp(2),
        alignItems: 'center'
    },
    search: {
        height: hp(20),
        width: wp(20)
    }
})

export default Header