import {createRouteHandlerClient} from "@supabase/auth-helpers-nextjs"
import {cookies} from "next/headers"
import { NextResponse, NextRequest} from "next/server"

export const dynamic = "force-dynamic" 

export async function GET (request: NextRequest){
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get("code")

    if(code){
      const supabase = createRouteHandlerClient({cookies})
      //usando el codigo que le hemos pasado nos devulve la sesion del usuario
      await supabase.auth.exchangeCodeForSession(code)  
    }

    return NextResponse.redirect(requestUrl.origin)

    
}