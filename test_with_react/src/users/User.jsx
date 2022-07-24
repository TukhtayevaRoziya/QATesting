import React, { useEffect } from 'react'

const User = () => {
  const [user, setUser] = useEffect([])
  return (
    <div>
      {user.map(u=><div key={u.id} data-testid={'user-item'}>{u.name}</div>)}
    </div>
  )
}

export default User
