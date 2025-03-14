import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="mb-5 text-bold text-3xl font-rubik my-10">Welcome to home page </Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore">Explore </Link>
      <Link href="/profile">Profile </Link>
      <Link href="/properties/1">Properties </Link>
    </View>
  );
}
