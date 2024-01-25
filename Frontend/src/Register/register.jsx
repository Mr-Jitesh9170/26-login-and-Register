import { Componets } from "../Component/component"
export const RegisterPage = () => {
  return (
    <>
      <Componets heading={"Register"} UserName={true} UserEmail={"Email"} UserPassword={"Password"} firstBtn={"Register"} way={"/register"} anotherpage={"/login"} ancorTag={"Login?"}/>
    </>
  )
}