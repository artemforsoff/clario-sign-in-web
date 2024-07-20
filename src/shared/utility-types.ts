export type EmptyObject = Record<string, never>;

export type PropsWithClassName<T extends object = EmptyObject> = T & {
    className?: string;
};
