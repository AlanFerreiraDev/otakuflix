import React, { useContext } from 'react'

import { AuthContext } from '@/context/authContext'

interface AccountMenuProps {
  visible?: boolean
}

const AccountMenu = ({ visible }: AccountMenuProps) => {
  const { user, logout } = useContext(AuthContext)

  if (!visible) {
    return null
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <p className="text-white text-sm group-hover/item:underline">
            {user?.name}
          </p>
        </div>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div
        onClick={() => logout()}
        className="px-3 text-center text-white text-sm hover:underline"
      >
        Sair da OtakuFlix
      </div>
    </div>
  )
}

export default AccountMenu
