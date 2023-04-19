import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../configuration/state";
import { Form } from "../forms/Form";
import { Button } from "../forms/Button";
import { Field } from "../forms/Field";
import { Input } from "../forms/Input";

export const Contact = () => {
    const [state, setState] = useAppState();
    const { 
        handleSubmit, 
        register, 
        watch, 
        formState: {errors}, 
    } = useForm ({defaultValues: state, mode: 'onSubmit' });
    const watchPassword = watch("password");
    const navigate = useNavigate();

    const saveData = (data) => {
        setState({ ...state, ...data});
        navigate('education')
    }

    return (
        <Form onSubmit={handleSubmit(saveData)}>
            <fieldset>
                <legend>Contact</legend>
                <Field label="first-name" error={errors?.firstName}>
                    <Input 
                        {...register("firstName", {required: "First name is required"})}
                        id="first-name"
                    />
                </Field>
                <Field label="last-name" error={errors.lastName}>
                    <Input 
                        {...register("lastName", {required: "Last name is required"})}
                        id="last-name"
                    />
                </Field>
                <Field label="Email" error={errors.email}>
                    <Input 
                        {...register("email", {required: "Email is required"})}
                        id="email"
                        type="email"
                    />
                </Field>
                <Field label="password" error={errors.password}>
                    <Input 
                        {...register("password", {required: "Password is required"})}
                        id="password"
                        type="password"
                    />
                </Field>
                <Field label="confirm password" error={errors.confirmPassword}>
                    <Input 
                        {...register("confirm password", {
                            required: "Confirm password",
                            validate: (value) => 
                            value === watchPassword || "The passwords do not match",
                    })}
                        id="confirm-password"
                        type="password"
                    />
                </Field>
                <Button type="submit">Next {">"}</Button>
            </fieldset>
        </Form>
    )
}