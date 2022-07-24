import ThemeItem from './ThemeItem';
export default interface ThemeCategory {
    category_name: string;
    items?: ThemeItem[];
    themeInqCf: string;
}
