import SimpleForm from "../components/SimpleForm";
import TextField from "../components/TextField";

function UserInfoForm(): JSX.Element {
    return (
        <SimpleForm>
            <TextField source={'name'} label={'이름'}  minLength={5} maxLength={10} />
            <TextField type='password' source={'password'} label={'비밀번호'}  minLength={5} maxLength={10} />
        </SimpleForm>
    );
}

export default UserInfoForm;