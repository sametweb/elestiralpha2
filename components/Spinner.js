import React from "react";
import { Animated, Easing, View } from "react-native";

const Spinner = ({ size }) => {
  let spinValue = new Animated.Value(0);
  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear
    }).start(() => spin());
  };

  const spinspin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  });

  React.useEffect(() => {
    spin();
  }, []);

  return (
    <View style={{ alignSelf: "center" }}>
      <Animated.Image
        style={{
          width: size || 30,
          height: size || 30,
          transform: [{ rotate: spinspin }]
        }}
        source={require("../images/spinner.png")}
      />
    </View>
  );
};

export default Spinner;
