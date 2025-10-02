declare module "react-native-animated-loader" {
    import * as React from "react";
    import { ViewStyle } from "react-native";

    interface AnimatedLoaderProps {
        visible: boolean;
        overlayColor?: string;
        source: object;
        animationStyle?: ViewStyle;
        speed?: number;
    }

    export default class AnimatedLoader extends React.PureComponent<
        AnimatedLoaderProps
    > { }
}
