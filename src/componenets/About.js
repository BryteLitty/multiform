import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppState } from "../configuration/state";
import { Button } from "../forms/Button";
import { Field } from "../forms/Field";
import { Form } from "../forms/Form";

export const About = () => {
    const [state, setState] = useAppState();
    const { handleSubmit, register } = useForm({ defaultValues: state});
    const navigate = useNavigate();

    const saveData = (data) => {
        setState({ ...state, ...data });
        navigate('/confirm');
    }


    return (
        <Form onSubmit={handleSubmit(saveData)}>
            <fieldset>
                <legend>About</legend>
                <Field label="About me">
                    <textarea 
                        {...register("about")}
                        className="form-control" 
                        id="about" 
                    />
                </Field>
                <div className="button-row">
                    <Link className={`btn btn-secondary`} to="/education">
                        {"<"} Previous
                    </Link>
                    <Button>Next {">"}</Button>
                </div>
            </fieldset>
        </Form>
    )
}