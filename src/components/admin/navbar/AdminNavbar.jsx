import { Bell, ChevronDown, LogOut, User } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const notificationsData = [
  { id: 1, text: "Notification 1", time: "2m ago" },
  { id: 2, text: "Notification 2", time: "10m ago" },
  { id: 3, text: "Notification 3", time: "30m ago" },
  { id: 4, text: "Notification 4", time: "1h ago" },
  { id: 5, text: "Notification 5", time: "2h ago" },
]

const AdminNavbar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [notificationOpen, setNotificationOpen] = useState(false)

  const userMenuRef = useRef(null)
  const notificationRef = useRef(null)

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false)
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 h-16 bg-white border-b shadow-sm flex items-center justify-between px-4">
      <h2 className="text-lg font-semibold">Dashboard</h2>

      <div className="flex items-center gap-3 relative">
        {/* Bell Icon with notification badge */}
        <div ref={notificationRef} className="relative">
          {/* <button
            className="relative p-2 rounded-full hover:bg-gray-200"
            onClick={() => setNotificationOpen(!notificationOpen)}
          >
            <Bell size={20} />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full">
              {notificationsData.length}
            </span>
          </button> */}

          {/* Notification Modal with slide-down animation */}
          <div
            className={`absolute right-0 mt-2 w-[400px] h-[400px] bg-white border rounded-lg shadow-lg z-50 p-4 overflow-y-auto
              transform transition-all duration-300 ease-in-out
              ${notificationOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
            `}
          >
            <h3 className="text-lg font-semibold mb-4">Notifications</h3>
            <ul className="space-y-2">
              {notificationsData.map((notif) => (
                <li key={notif.id} className="p-2 border-b flex justify-between">
                  <span>{notif.text}</span>
                  <span className="text-xs text-gray-400">{notif.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* User Menu */}
        <div ref={userMenuRef} className="relative">
          <button
            className="p-2 rounded-full hover:bg-gray-200 flex items-center gap-2"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
          >
            <User size={20} />
            <ChevronDown size={16} />
          </button>

          <div
            className={`absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50 overflow-hidden transition-all duration-300 ease-in-out
                  ${userMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <NavLink
              onClick={() => { setUserMenuOpen(false) }}
              to="/sub-admin-dashboard/account"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Profile
            </NavLink>
            <NavLink
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              to="/sub-admin-dashboard/password-changes"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Account Settings
            </NavLink>
            <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminNavbar
