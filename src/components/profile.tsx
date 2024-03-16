'use client';

import { useSession } from "next-auth/react";

export default function Profile() {
    const session = useSession();

    if( session.data?.user ) {
        return <div>From client: User is signIn</div>
    }

    return <div>From client: User is signedOut</div>
}