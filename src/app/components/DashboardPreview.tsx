import { ChevronDown, TrendingDown, TrendingUp, X } from "lucide-react"
import { Gauge } from "./Gauge"

function TogglePill({
  active,
  inactive,
}: {
  active: string
  inactive: string
}) {
  return (
    <div className="flex rounded-full bg-neutral-100 p-1">
      <button
        type="button"
        className="flex-1 rounded-full bg-white px-3 py-1.5 text-[12px] font-medium text-neutral-900 shadow sm:text-[13px]"
      >
        {active}
      </button>
      <button
        type="button"
        className="flex-1 rounded-full px-3 py-1.5 text-[12px] text-neutral-500 sm:text-[13px]"
      >
        {inactive}
      </button>
    </div>
  )
}

function ClicksCard() {
  return (
    <article className="rounded-2xl bg-white p-5">
      <div
        className="flex items-center justify-between"
        style={{ fontSize: 13 }}
      >
        <span className="font-medium text-[#ef4d23]">Clicks</span>
        <span className="text-neutral-500">This Month</span>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="text-neutral-900" style={{ fontSize: 28, fontWeight: 600 }}>
          6,896
        </span>
        <span
          className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-red-600"
          style={{ fontSize: 11 }}
        >
          <TrendingDown className="h-3 w-3" />
          -3,382 (33%)
        </span>
      </div>

      <p className="mt-1 text-[12px] text-neutral-500">Compared to yesterday</p>

      <p className="mt-4 text-center text-[12px] text-neutral-600">
        Month Target achieved
      </p>
      <Gauge value={92} color="#ef4d23" showLabels min="389K" max="425K" />

      <div className="mt-4">
        <TogglePill active="Impressions" inactive="Clicks" />
      </div>
    </article>
  )
}

function FormCard() {
  return (
    <article className="flex flex-col gap-3 rounded-2xl bg-white p-5">
      <label className="flex flex-col gap-1.5">
        <span className="text-neutral-700" style={{ fontSize: 12 }}>
          Show figures for
        </span>
        <button
          type="button"
          className="flex items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 text-left text-[13px] text-neutral-900"
        >
          This month
          <ChevronDown className="h-4 w-4 text-neutral-500" />
        </button>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-neutral-700" style={{ fontSize: 12 }}>
          Compare period by
        </span>
        <button
          type="button"
          className="flex items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 text-left text-[13px] text-neutral-900"
        >
          Month-to-date (MTD)
          <ChevronDown className="h-4 w-4 text-neutral-500" />
        </button>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-neutral-700" style={{ fontSize: 12 }}>
          Ste targets (This month)
        </span>
        <div className="flex items-center rounded-lg border border-neutral-200 px-3 py-2">
          <span className="mr-1 text-[13px] text-neutral-500">#</span>
          <input
            defaultValue="10"
            className="w-full bg-transparent text-[13px] text-neutral-900 outline-none"
            aria-label="Ste targets this month"
          />
        </div>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-neutral-700" style={{ fontSize: 12 }}>
          Ste targets (This year)
        </span>
        <div className="flex items-center rounded-lg border border-neutral-200 px-3 py-2">
          <span className="mr-1 text-[13px] text-neutral-500">#</span>
          <input
            defaultValue="100"
            className="w-full bg-transparent text-[13px] text-neutral-900 outline-none"
            aria-label="Ste targets this year"
          />
        </div>
      </label>

      <div className="mt-1 flex items-center gap-4">
        <button
          type="button"
          className="rounded-lg bg-[#ef4d23] px-5 py-2 text-[13px] font-medium text-white"
        >
          Save
        </button>
        <button type="button" className="text-[13px] text-neutral-700 underline">
          Cancel
        </button>
        <button
          type="button"
          className="ml-auto text-neutral-500"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </article>
  )
}

function VideoStartsCard() {
  return (
    <article className="rounded-2xl bg-white p-5">
      <div
        className="flex items-center justify-between"
        style={{ fontSize: 13 }}
      >
        <span className="font-medium text-[#ef4d23]">Video Starts</span>
        <span className="text-neutral-500">today</span>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="text-neutral-900" style={{ fontSize: 28, fontWeight: 600 }}>
          0
        </span>
        <span
          className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-0.5 text-neutral-500"
        >
          <TrendingUp className="h-3 w-3" />
          <span style={{ fontSize: 11 }}>0</span>
        </span>
      </div>

      <p className="mt-1 text-[12px] text-neutral-500">Compared to yesterday</p>

      <div className="mt-6">
        <Gauge value={68} color="#9ca3af" />
      </div>

      <div className="mt-4">
        <TogglePill active="Video Clicks" inactive="Video Starts" />
      </div>
    </article>
  )
}

export function DashboardPreview() {
  return (
    <div className="mx-auto w-full max-w-[880px] rounded-3xl bg-[#f5f2ee] p-4 sm:p-6">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        <ClicksCard />
        <FormCard />
        <VideoStartsCard />
      </div>
    </div>
  )
}
