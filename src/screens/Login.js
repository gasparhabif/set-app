import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Image, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
        <Input
          placeholder="email@example.com"
          leftIcon={<Icon name="envelope" size={24} color="#E4F2FE" />}
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.customInput}
          leftIconContainerStyle={styles.emailIcon}
          style={styles.inputLabel}
          placeholderTextColor="#E4F2FE"
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <Input
          placeholder="**************"
          leftIcon={<Icon name="unlock-alt" size={24} color="#E4F2FE" />}
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.customInput}
          leftIconContainerStyle={styles.passwordIcon}
          placeholderTextColor="#E4F2FE"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    backgroundColor: '#34495E',
    height: '100%',
  },
  logo: {
    marginTop: 140,
    width: 245,
    height: 245,
    marginBottom: 40,
  },
  inputContainer: {
    alignItems: 'center',
  },
  customInput: {
    color: '#E4F2FE',
    width: 285,
    height: 45,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E4F2FE',
    borderBottomWidth: 2,
  },
  emailIcon: {
    marginLeft: 15,
    marginRight: 10,
  },
  passwordIcon: {
    marginLeft: 20,
    marginRight: 15,
  },
});
