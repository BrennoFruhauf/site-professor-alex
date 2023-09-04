import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { BsMoon, BsMoonFill, BsSun, BsSunFill } from "react-icons/bs"

interface ThemeToggleProps {
  className?: string
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={toggle}
      className={
        "p-[6px] flex gap-2 justify-center items-center bg-neutral-dark/20 text-secondary-dark dark:text-neutral-light dark:bg-neutral-light/20 rounded-2xl relative w-14 " +
        className
      }
    >
      {theme === "dark" ? (
        <BsMoonFill className=" absolute bg-primary-dark rounded-full p-[6px] h-[28px] w-[28px] top-0 left-0" />
      ) : (
        <BsMoon className="mr-7" />
      )}
      {theme === "light" ? (
        <BsSunFill className="absolute bg-primary-light text-neutral-light rounded-full p-[6px] h-[28px] w-[28px] top-0 right-0" />
      ) : (
        <BsSun className="ml-7" />
      )}
    </button>
  )
}
