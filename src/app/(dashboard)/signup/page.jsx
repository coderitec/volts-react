import CreateTitle from "@/app/components/CreateTitle";
import FormButton from "@/app/components/FormButton";
import InputData from "@/app/components/InputData";

export default function SignUp() {
  return (
    <div>
        <CreateTitle title="Sign up details" color="border-b-green-950" tc='text-green-950 font-bold'/>

        <form className="flex flex-col items-center space-y-4 m-auto w-3/4">
            <InputData type="text" placeholder="Enter your user name" />
            <InputData type="email" placeholder="Enter your email" />
            <InputData type="password" placeholder="Enter your password" />
            <InputData type="password" placeholder="Confirm your password" />

            <FormButton data="sign up"/>
        </form>
    </div>
  )
}