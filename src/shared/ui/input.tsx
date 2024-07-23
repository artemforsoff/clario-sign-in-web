import {
    type ReactNode,
    type DetailedHTMLProps,
    type InputHTMLAttributes,
    forwardRef,
} from 'react';
import styled, { css } from 'styled-components';
import { lib } from '../lib';

export type InputProps = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    inputClassName?: string;
    appearance?: 'error' | 'default';
    icon?: ReactNode;
};

export const Input = styled(
    forwardRef<HTMLInputElement, InputProps>((props, ref) => {
        const { className, inputClassName, appearance = 'default', icon, ...inputProps } = props;

        return (
            <div className={className} data-appearance={appearance}>
                <input {...inputProps} className={inputClassName} ref={ref} />

                {icon && <div className="icon">{icon}</div>}
            </div>
        );
    })
)`
    --default-color: #d0d2dc;

    background-color: white;
    border-radius: 10px;
    position: relative;

    input {
        color: var(--text-dark-color);
        font-size: 16px;
        line-height: 19px;
        border-radius: 10px;
        border: 1px solid white;
        padding: 10px 20px;
        width: 100%;
        transition-property: border-color;
        transition-duration: 0.3s;
        transition-timing-function: ease;
        outline: none;

        &::placeholder {
            color: var(--default-color);
        }

        &:not(:disabled) {
            &:focus,
            &:hover {
                border-color: #6f91bc;
            }
        }

        &:disabled {
            border-color: ${lib.getColor('disabled')};
            background-color: ${lib.getColor('disabled', 0.1)};
            cursor: not-allowed;
        }

        ${({ appearance }) => {
            if (appearance === 'error') {
                return css`
                    background-color: ${lib.getColor('error', 0.1)};
                    border-color: ${lib.getColor('error')};

                    &:not(:disabled) {
                        &:focus,
                        &:hover {
                            border-color: ${lib.getColor('error')};
                        }
                    }
                `;
            }
            return undefined;
        }}
    }

    &:has(.icon) {
        --icon-size: 24px;
        position: relative;

        input {
            padding-inline-end: calc(var(--icon-size) + 30px);
        }

        .icon {
            position: absolute;
            right: 2px;
            top: 2px;
            bottom: 2px;
            width: calc(var(--icon-size) + 30px);
            aspect-ratio: 1 / 1;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-dark-color);
        }
    }
`;
