import styled from 'styled-components';
import { PropsWithClassName } from '@/shared/utility-types';
import { styles } from './styles';

export type SignUpFormProps = PropsWithClassName;

export const SignUpForm = styled((props: SignUpFormProps) => {
    const { className } = props;

    return <div className={className}>SignUpForm</div>;
})`
    ${styles}
`;
