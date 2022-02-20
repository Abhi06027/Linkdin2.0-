import InputField from "../widgets/InputField";
import Divider from "../widgets/Divider";
import ButtonRaised from "../widgets/ButtonRaised";
import TextLink from "../widgets/TextLink";
import Textfield from "../widgets/Textfield";

function Signup() {
  return (
    <>
      <div className="w-full mx-auto bg-white px-5 py-4 flex flex-col space-y-5  sm:w-96 sm:shadow-md  lg:w-[350px] mt-48">
        <div>
          <div className=" text-2xl font-semibold ">
            <Textfield>{"Sign in"}</Textfield>
          </div>
          <Textfield>{"Stay updated on your professional world"}</Textfield>
        </div>

        <InputField placeholder="Enter Email" />
        <InputField type="password" placeholder="Enter Password" />
        <div className="inline-block">
          <TextLink>{"Forgot Password?"}</TextLink>
        </div>
        <div className="w-full mx-auto bg-blue-500 shadow-lg hover:bg-blue-700 text-white rounded-full   ">
          <ButtonRaised>{"SD"}</ButtonRaised>
        </div>
        <div className="h-2 flex flow-row items-center">
          <Divider />
          <div className="px-3">{"or"}</div>
          <Divider />
        </div>

        <div className="  w-full mx-auto hover:bg-gray-100 text-gray-600 border-2  border-gray-500 rounded-full   ">
          <ButtonRaised type="button">{"Sign in with Apple"}</ButtonRaised>
        </div>
      </div>

      <div className=" flex justify-center items-center space-x-1  mt-2  ">
        <TextLink>{"New to LinkedIn?"}</TextLink>
        <div className="hover:bg-blue-300 text-blue-800  px-2 py-1 hover:rounded-full ">
          <TextLink>{"Join now"}</TextLink>
        </div>
      </div>
    </>
  );
}
export default Signup;
