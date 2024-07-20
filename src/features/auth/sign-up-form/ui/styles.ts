import { css } from 'styled-components';

export const styles = css`
    position: relative;

    .title {
        text-align: center;
        color: var(--text-dark-color);
        margin-block-end: 40px;
    }

    .field {
        &:not(:last-child) {
            margin-block-end: 20px;
        }

        .error {
            display: block;
            font-size: 13px;
            font-weight: 400;
            line-height: 18px;
            padding-inline-start: 20px;

            &:not(:last-child) {
                margin-block-end: 8px;
            }
        }

        .input + .error {
            margin-block-start: 8px;
        }

        .errors {
            margin-block-start: 8px;
        }
    }

    button[type='submit'] {
        min-width: 240px;
        padding: 15px 32px;
        border-radius: 30px;
        background: linear-gradient(150deg, rgb(112, 195, 255) 17.5%, rgb(75, 101, 255) 87.7%);
        color: white;
        font-size: 16px;
        font-weight: 700;
        outline: none;
        margin-inline: auto;
        display: block;
        border: none;
    }

    .star {
        position: absolute;

        &--1 {
            top: 22px;
            left: 46px;
        }

        &--2 {
            top: 0;
            left: 64px;
        }

        &--3 {
            right: 24px;
            top: -70px;
        }

        &--4 {
            left: 60px;
            bottom: -60px;
        }

        &--5 {
            right: 60px;
            bottom: -80px;
        }
    }
`;
