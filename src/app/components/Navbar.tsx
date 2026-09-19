import { useState } from "react"
import {
  ChevronDown,
  ChevronRight,
  Menu,
  ShoppingCart,
} from "lucide-react"

const NAV_LINKS = [
  { label: "Home", current: true },
  { label: "Features" },
  { label: "About" },
  { label: "Pages", accent: true, chevron: true },
] as const

function LogoMark() {
  const petals = Array.from({ length: 8 }, (_, index) => {
    const angle = (index / 8) * Math.PI * 2
    return {
      cx: 16 + 10 * Math.cos(angle),
      cy: 16 + 10 * Math.sin(angle),
    }
  })

  return (
    <svg
      viewBox="0 0 32 32"
      className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
      aria-hidden="true"
    >
      {petals.map((petal, index) => (
        <circle
          key={index}
          cx={petal.cx}
          cy={petal.cy}
          r={3.5}
          fill="#ef4d23"
        />
      ))}
      <circle cx={16} cy={16} r={3.5} fill="#ef4d23" />
    </svg>
  )
}

function NavLinkContent({
  label,
  current,
  accent,
  chevron,
}: {
  label: string
  current?: boolean
  accent?: boolean
  chevron?: boolean
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 ${accent ? "text-[#ef4d23]" : "text-neutral-800"}`}
    >
      {label}
      {current ? (
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
      ) : null}
      {chevron ? <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} /> : null}
    </span>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex justify-center px-3 pt-4 sm:px-4 sm:pt-6">
      <nav
        className="relative flex w-full max-w-[760px] items-center rounded-full border border-neutral-200 bg-white py-2 pl-2 pr-2 shadow-sm"
        aria-label="Primary"
      >
        <a href="#home" className="shrink-0" aria-label="Convix Software home">
          <LogoMark />
        </a>

        <div
          className="ml-4 hidden items-center gap-6 sm:ml-6 md:flex"
          style={{ fontSize: 14 }}
        >
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={`#${link.label.toLowerCase()}`}>
              <NavLinkContent {...link} />
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="hidden p-1 text-neutral-800 md:inline-flex"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" strokeWidth={1.8} />
          </button>

          <a
            href="#early-access"
            aria-label="Get early access"
            className="inline-flex items-center gap-2 rounded-full bg-[#ef4d23] py-1 pl-3 pr-1 text-[13px] font-medium text-white sm:pl-4 sm:text-[14px]"
          >
            <span className="hidden md:inline">Get early access</span>
            <span className="md:hidden" aria-hidden="true">
              Early access
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 sm:h-7 sm:w-7">
              <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </span>
          </a>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-800 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open ? (
          <div className="absolute top-full right-2 left-2 z-20 mt-2 rounded-2xl border border-neutral-200 bg-white p-3 shadow-lg md:hidden">
            <div className="flex flex-col gap-1" style={{ fontSize: 14 }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={`#${link.label.toLowerCase()}`}
                  className="rounded-xl px-3 py-2.5"
                  onClick={() => setOpen(false)}
                >
                  <NavLinkContent {...link} />
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </nav>
    </div>
  )
}
