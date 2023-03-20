import SimpleForm from "../components/SimpleForm";
import TextField from "../components/TextField";
import { max, min, required } from "../utils/Validation";

function UserInfoForm(): JSX.Element {
    return (
        <SimpleForm>
            <TextField source={'name'} label={'이름'}  validate={[min(5),max(10),required()]} />
            <TextField type='password' source={'password'} label={'비밀번호'} validate={[min(5),max(10),required()]} />
        </SimpleForm>
    );
}

export default UserInfoForm;