import { createElement, PropsWithChildren, ReactHTML } from 'react';
import { PropsWithClassName } from '../utility-types';
import { lib } from '../lib';

export type ColoredTextProps = PropsWithClassName<
    PropsWithChildren<{
        appearance?: 'default' | 'error' | 'success';
        as?: keyof ReactHTML;
    }>
>;

const getColor = (color: ColoredTextProps['appearance']) => {
    switch (color) {
        case 'error':
            return lib.getColor('error');
        case 'success':
            return lib.getColor('success');
        default:
            return 'var(--text-dark-color)';
    }
};

export const ColoredText = (props: ColoredTextProps) => {
    const { children, appearance, as = 'span', className } = props;

    return createElement(
        as,
        {
            style: { color: getColor(appearance) },
            className,
        },
        children
    );
};
