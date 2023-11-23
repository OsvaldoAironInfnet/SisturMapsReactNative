
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextField = ({ label, ...inputProps }) => (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={styles.input}
            keyboardType={'numeric'}
            {...inputProps}
        />
    </View>
)


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        top: 10,
        left: 50,
        right: 50,
        bottom: 20,
        height: 100,
        width: 300
    },
    label: {
        color: '#00aeef',
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
    }
});
export default TextField;

