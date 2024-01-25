import { Componets } from "../Component/component"
export const LoginPage = () => {
  return (
    <>
      <Componets heading={"Login"} UserName={false} UserEmail={"Email"} UserPassword={"Password"} firstBtn={"Login"} way={"/login"} anotherpage={"/register"} ancorTag={"Don't have an account?"} />
    </>
  )
}