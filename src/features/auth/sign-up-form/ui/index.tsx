import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ColoredText, Input, PasswordInput } from '@/shared/ui';
import { lib } from '@/shared/lib';
import { type ColoredTextProps } from '@/shared/ui/text';
import { PropsWithClassName } from '@/shared/utility-types';
import { styles } from './styles';

const StarIcon = ({ size = 22, className }: PropsWithClassName<{ size?: number }>) => (
    <svg className={className} width={size} height={size} viewBox="0 0 22 22" fill="none">
        <path
            d="M10.5249 0.15918L13.3675 7.84137L21.0497 10.684L13.3675 13.5267L10.5249 21.2089L7.68219 13.5267L0 10.684L7.68219 7.84137L10.5249 0.15918Z"
            fill="#CFE1F4"
        />
    </svg>
);

const getPasswordErrorColor = (isValid: boolean): ColoredTextProps['appearance'] => {
    return isValid ? 'success' : 'error';
};

export type SignUpFormProps = Readonly<PropsWithClassName>;

export const SignUpForm = styled((props: SignUpFormProps) => {
    const { className } = props;

    const {
        control,
        handleSubmit,
        formState: { errors, touchedFields },
        getValues,
    } = useForm({
        mode: 'all',
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(
            yup.object({
                email: yup
                    .string()
                    .trim()
                    .email('Email is not correct')
                    .required('Email is required'),
                password: yup
                    .string()
                    .trim()
                    .min(8, '')
                    .test('allRegisters', '', lib.isHasAllRegisters)
                    .test('oneDigit', '', lib.isHasOneDigit),
            })
        ),
    });

    return (
        <form className={className} onSubmit={handleSubmit(() => {})}>
            <h1 className="title">Sign up</h1>

            <div className="field">
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <Input
                            {...field}
                            className="input"
                            placeholder="Email"
                            appearance={errors.email ? 'error' : undefined}
                        />
                    )}
                />

                {errors.email && (
                    <ColoredText className="error" appearance="error">
                        {errors.email.message}
                    </ColoredText>
                )}
            </div>

            <div className="field">
                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                        <PasswordInput
                            {...field}
                            className="input input--password"
                            placeholder="Create your password"
                            appearance={errors.password ? 'error' : undefined}
                        />
                    )}
                />

                <div className="errors">
                    <ColoredText
                        className="error"
                        appearance={
                            touchedFields.password
                                ? getPasswordErrorColor((getValues('password') || '').length >= 8)
                                : undefined
                        }
                    >
                        Has at least 8 characters (no spaces)
                    </ColoredText>
                    <ColoredText
                        className="error"
                        appearance={
                            touchedFields.password
                                ? getPasswordErrorColor(
                                      lib.isHasAllRegisters(getValues('password'))
                                  )
                                : undefined
                        }
                    >
                        Uppercase and lowercase letters
                    </ColoredText>
                    <ColoredText
                        className="error"
                        appearance={
                            touchedFields.password
                                ? getPasswordErrorColor(lib.isHasOneDigit(getValues('password')))
                                : undefined
                        }
                    >
                        1 digit minimum
                    </ColoredText>
                </div>
            </div>

            <button type="submit">Sign up</button>

            {/* for decoration */}
            {[22, 14, 14, 28, 21].map((size, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <StarIcon size={size} key={index} className={`star star--${index + 1}`} />
            ))}
        </form>
    );
})`
    ${styles}
`;
