import { useState } from "react";
import { Dimensions,
     ImageBackground, 
     Keyboard, 
     KeyboardAvoidingView, 
     Platform, 
     
      TouchableOpacity,
       TouchableWithoutFeedback, 
       View,
       StyleSheet,
       TextInput,
       Image,
     } from "react-native";

export const RegistrationScreen = ({ navigation }) => {

    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPassHidden, setIsPassHidden] = useState("true");
    const [isShowKeyboard, setIsShowKeyboard] = useState("false");

    const handleLogin = (value) => setLogin(value);
    const handleEmail = (value) => setEmail(value);
    const handlePassword = (value) => setPassword(value);
    const handleShowPass = (value) => setIsPassHidden(!isPassHidden);

    const onLogin = () => {
        console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
        Keyboard.dismiss();
        setLogin('');
        setEmail('');
        setPassword('');
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground  style={styles.bgImage} source={require("../assets/img/photoBG.png")}
                >
                <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"
                }>
                    <View style={{
                            ...styles.wrapper,
                            paddingBottom: isKeyboardShown ? 38 : 144,
                        }}>
                        <View  style={{
                                ...styles.avatar,
                                left: Dimensions.get("window").width / 2,
                            }}>
                            <Image style={styles.avatarBtn} source={require("../assets/img/add.svg") }  />
                        </View>
                        <Text style={styles.heading}>Регистрация</Text>
                        <View style={styles.form}>
                            <TextInput
                            style={{ ...styles.input, marginBottom: 16 }}
                                value={login}
                                onChangeText={handleLogin}
                                placeholder="Логин"
                               
                                onFocus={() => setIsShowKeyboard(true)}
                                onBlur={() => setIsShowKeyboard(false)}
                            />
                            <TextInput
                            style={{ ...styles.input, marginBottom: 16 }}
                                value={email}
                                onChangeText={handleEmail}
                                placeholder="Адрес электронной почты"
                                
                                onFocus={() => setIsShowKeyboard(true)}
                                onBlur={() => setIsShowKeyboard(false)}
                            />
                            <View style={{ position: "relative", marginBottom: 43 }}>
                                <TextInput
                                   style={styles.input}
                                    value={password}
                                    onChangeText={handlePassword}
                                    placeholder="Пароль"
                                    secureTextEntry={isPassHidden}
                                    onFocus={() => setIsShowKeyboard(true)}
                                    onBlur={() => setIsShowKeyboard(false)}
                                />
                                <TouchableOpacity 
                                 style={styles.togglePassword}
                                    activeOpacity={0.8}
                                    onPress={handleShowPass}
                                >
                                    <Text style={styles.toggleText} >
                                        {isPassHidden ? "Показать" : "Скрыть"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                             style={styles.btn}
                                onPress={onLogin}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.btnText}>Зарегистрироваться</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Login')}
                                activeOpacity={0.8}>
                                <Text
                                  style={styles.signInText}
                                >
                                    Уже есть аккаунт? Войти
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>

        </TouchableWithoutFeedback>



    );

};

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        justifyContent: "flex-end",
        resizeMode: "cover",
    },
    wrapper: {
        paddingTop: 92,
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },

    avatar: {
        position: "absolute",
        top: -60,
        transform: [{ translateX: -60 }],
        height: 120,
        width: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },

    avatarBtn: {
        position: "absolute",
        bottom: 15,
        right: -13,
        height: 25,
        width: 25,
    },

    heading: {
        marginBottom: 33,
        fontStyle: "normal",
        fontWeight: '500',
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
        letterSpacing: 0.01,

        color: "#212121",
    },

    form: {
        marginHorizontal: 16,
    },

    input: {
        height: 50,
        padding: 16,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 8,

        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 19,
    },

    togglePassword: {
        position: "absolute",
        top: 16,
        right: 18,
    },

    toggleText: {
        fontStyle: "normal",
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,

        textAlign: "right",
        color: "#1B4371",
    },

    btn: {
        backgroundColor: "#FF6C00",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
    },

    btnText: {
        fontStyle: "normal",
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,

        textAlign: "center",

        color: "#fff",
    },

    signInText: {
        fontStyle: "normal",
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,

        textAlign: "center",

        color: "#1B4371",
    },
});