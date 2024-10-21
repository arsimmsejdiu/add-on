export type Theme = 'light' | 'dark' | 'system';

export type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storeageKey?: string;
}

export type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

export const initialState: ThemeProviderState = {
    theme: 'system',
    setTheme: () => null,
};

