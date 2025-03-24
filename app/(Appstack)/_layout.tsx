import { Tabs } from "expo-router";

export default function Appstack () {
    return (
        <Tabs
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                }}
            />
        </Tabs>
    )
}