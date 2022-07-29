import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function useLogic() {
    const [darkMode, setDarkMode] = useState(false);
    const [fontSize, setFontSize] = useState({
        header: 27,
        paragraph: 16,
    });

    useEffect(() => {
        AsyncStorage.getItem('darkMode').then(value => {
            if (value !== null) {
                setDarkMode(value === 'true');
            }
        });

        AsyncStorage.getItem('fontSize').then(value => {
            if (value !== null) {
                setFontSize(JSON.parse(value));
            }
        });

        AsyncStorage.multiGet([
            'darkMode',
            'fontSize',
        ]).then(
            ([[, darkModeValue], [, fontSizeValue]]) => {
                if (darkModeValue !== null) {
                    setDarkMode(darkModeValue === 'true');
                }
                if (fontSizeValue !== null) {
                    setFontSize(JSON.parse(fontSizeValue));
                }
            },
        );
    }, []);

    const saveDarkModeInStorage = (value: boolean) => {
        AsyncStorage.setItem(
            'darkMode',
            value.toString(),
        ).then(() => {
            setDarkMode(value);
        });
    };

    const saveFontSizeInStorage = (value: {
        header: number;
        paragraph: number;
    }) => {
        AsyncStorage.setItem(
            'fontSize',
            JSON.stringify(value),
        ).then(() => {
            setFontSize(value);
        });
    };

    return {
        darkMode,
        fontSize,
        setDarkMode: saveDarkModeInStorage,
        setFontSize: saveFontSizeInStorage,
    };
}
