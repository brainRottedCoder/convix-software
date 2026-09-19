type GaugeProps = {
  value: number
  color?: string
  showLabels?: boolean
  min?: string
  max?: string
}

const TICK_COUNT = 40
const CENTER_X = 100
const CENTER_Y = 100
const RADIUS = 80
const INNER_RADIUS = RADIUS - 10

export function Gauge({
  value,
  color = "#ef4d23",
  showLabels = false,
  min,
  max,
}: GaugeProps) {
  const activeCount = Math.round((value / 100) * TICK_COUNT)

  const ticks = Array.from({ length: TICK_COUNT }, (_, index) => {
    const angle = Math.PI + (index / (TICK_COUNT - 1)) * Math.PI
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)

    return {
      x1: CENTER_X + INNER_RADIUS * cos,
      y1: CENTER_Y + INNER_RADIUS * sin,
      x2: CENTER_X + RADIUS * cos,
      y2: CENTER_Y + RADIUS * sin,
      active: index < activeCount,
    }
  })

  return (
    <div className="mx-auto w-full" style={{ maxWidth: 260 }}>
      <svg viewBox="0 0 200 120" className="w-full" aria-hidden="true">
        {ticks.map((tick, index) => (
          <line
            key={index}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            stroke={tick.active ? color : "#d4d4d8"}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        ))}
        <text
          x={100}
          y={105}
          textAnchor="middle"
          fontSize={22}
          fontWeight={600}
          fill="#171717"
          fontFamily="Inter, sans-serif"
        >
          {value}%
        </text>
      </svg>
      {showLabels ? (
        <div
          className="flex justify-between text-neutral-500"
          style={{ fontSize: 11 }}
        >
          <span>{min}</span>
          <span>{max}</span>
        </div>
      ) : null}
    </div>
  )
}
