import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new to do....'
                onChangeText={changeHandler}
            />

            <Button style={styles.addBtn} onPress={() => submitHandler(text)} title='add to do' color='coral' />

            {/* <TouchableOpacity
                onPress={() => alert('Hello, world!')}
                style={{ backgroundColor: 'blue' }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
            </TouchableOpacity> */}

        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
})