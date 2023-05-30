/* eslint-disable @next/next/no-img-element */
'use client'

import { useAuth } from '@/app/hooks/useToken'
import { useUser } from '@/app/hooks/useUser'
import { useSearchParams } from 'next/navigation'
import { Loading } from '../loading/loading.component'
import { NavBarLink } from '../nav-bar/nav-bar-link.component'
import { UserMenu } from './userMenu.component'

export const Auth = () => {
  const searchParams = useSearchParams()
  const code = searchParams.get('code')
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
  const callback = process.env.NEXT_PUBLIC_REDIRECT_URI
  const scope = 'MY_APPLICATIONS,CANDIDATE_PROFILE_WITH_EMAIL,CANDIDATE_READ_CURRICULUM_SKILLS,CV,CANDIDATE_READ_CURRICULUM_EXPERIENCE'

  const { signOut, loading: isAuthLoading } = useAuth(code)
  const { user, isLoading } = useUser()

  if (isLoading || isAuthLoading) {
    return <Loading />
  }
  return !user
    ? (
      <NavBarLink href={`https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=${scope}&client_id=${clientId}&redirect_uri=${callback}&response_type=code`}>
        Login
      </NavBarLink>
      )
    : (<UserMenu user={user} onSignOut={signOut} />)
}
