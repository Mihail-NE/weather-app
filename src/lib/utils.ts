export function cn(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export const convertWindSpeed = (speedKph: number | undefined): string => {
    if (speedKph === undefined) return "N/A";
    return (speedKph / 3.6).toFixed(1);
};
