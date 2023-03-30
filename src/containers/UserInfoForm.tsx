import CheckboxField from "../components/CheckboxField";
import SimpleForm from "../components/SimpleForm";
import TextField from "../components/TextField";
import SelectboxField from "../components/SelectboxField";
import { max, min, required } from "../utils/Validation";

function UserInfoForm(): JSX.Element {

    const options = [
        { label: "1~3잔", value: "light drinker" },
        { label: "4~6잔", value: "average drinker" },
        { label: "7잔 이상", value: "heavy drinker" }
    ];

    return (
        <SimpleForm>
            <TextField id={'name'} source={'name'} label={'이름'}  validate={[min(5),max(10),required()]} />
            <TextField id={'password'} type='password' source={'password'} label={'비밀번호'} validate={[min(5),max(10),required()]} />
            <CheckboxField id={'smoking'} source={'smoking'} label={'흡연 여부'}/>
            <SelectboxField id={'drinking'} source={'drinking'} label={'주량'} options={options} />
        </SimpleForm>
    );
}

export default UserInfoForm;