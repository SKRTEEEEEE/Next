import { AuthButtonGithubServer } from "../components/auth-github-button-server";

export default function Login (){
    return(
        <section className="grid place-content-center min-h-screen">
            <h1 className="text-xl bolt">Inicia session en<br/>Queen420</h1>
            <AuthButtonGithubServer/>
        </section>
    )
}