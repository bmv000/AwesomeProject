import React from "react";
import {RegistrationScreen} from "./Screens/RegistrationScreen";
import { createStackNavigator } from '@react-navigation/stack';
const AuthStack = createStackNavigator();

export const useRoute = (isAuth) => {
    if (!isAuth) {
        return (
            <AuthStack.Navigator >
                <AuthStack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Registration"
                    component={RegistrationScreen} />
              




            </AuthStack.Navigator> 

        );
    }
}