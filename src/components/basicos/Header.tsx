import { FaBars, FaXmark } from "react-icons/fa6"
import Logo from "./Logo"
import Menu from "./Menu"
import Redes from "./Redes"
import ThemeToggle from "./ThemeToggle"
import React, { useEffect, useRef, useState, useCallback } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? "hidden" : "scroll"
  }, [isMenuOpen])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    document.body.style.overflow = "scroll"
  }, [])

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 1280 && isMenuOpen) {
        closeMenu()
      }
    }

    window.addEventListener("resize", closeMenuOnResize)

    return () => {
      window.removeEventListener("resize", closeMenuOnResize)
    }
  }, [isMenuOpen])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }

    if (isMenuOpen) document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isMenuOpen, closeMenu])

  return (
    <header
      className={`
        flex justify-between items-center py-4 min-h-[72px]
        w-full px-9 m-0 bg-neutral-light/50 dark:bg-secondary-dark/50 rounded-xl
        backdrop-blur-md drop-shadow-md
      `}
    >
      <Logo />
      <div className="flex justify-between items-center gap-4">
        <div
          ref={menuRef}
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } xl:flex flex-col absolute left-0 right-0 top-24 bg-neutral-light/50 dark:bg-secondary-dark/50 p-5 gap-4 backdrop-blur-md xl:backdrop-blur-[1] drop-shadow-md rounded-xl
            xl:flex-row xl:static xl:justify-between xl:items-center xl:bg-transparent xl:dark:bg-transparent xl:drop-shadow-none xl:p-0
          `}
        >
          <Menu
            onItemClicked={closeMenu}
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } xl:flex flex-col xl:flex-row`}
          />
          <ThemeToggle className="xl:flex self-center mx-7" />
          <Redes className="xl:flex self-center" />
        </div>
        <div
          onClick={toggleMenu}
          className={`
            text-2xl
            cursor-pointer block w-6 h-6 text-secondary-dark dark:text-neutral-light xl:hidden
          `}
        >
          {!isMenuOpen ? <FaBars /> : <FaXmark />}
        </div>
      </div>
    </header>
  )
}
