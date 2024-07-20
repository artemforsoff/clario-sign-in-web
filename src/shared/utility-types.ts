export type EmptyObject = Record<string, never>;

export type PropsWithClassName<T extends object = object> = T & {
    className?: string;
};
