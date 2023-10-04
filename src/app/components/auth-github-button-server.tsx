import {createServerComponentClient} from "@supabase/auth-helpers-nextjs"
import {cookies} from "next/headers"
import { AuthButtonGithubClient } from "./auth-github-button-client"

export async function AuthButtonGithubServer () {
    const supabase = createServerComponentClient({cookies})
    const {data: {session}} = await supabase.auth.getSession()

    return <AuthButtonGithubClient session={session}/>
}