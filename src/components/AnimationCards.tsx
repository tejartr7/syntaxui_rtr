import HeartbeatButton from '@/ui/animation/HeartbeatButton'
import SkewedInfiniteScroll from '@/ui/animation/SkewedInfiniteScroll'
import Link from 'next/link'

const data = [
  {
    id: 1,
    title: 'Skewed Infinite Scroll',
    link: '/docs/animations/skewed-infinite-scroll',
    component: <SkewedInfiniteScroll />,
  },
  {
    id: 2,
    title: 'Heartbeat Button',
    link: '/docs/animations/heartbeat-button',
    component: <HeartbeatButton />,
  },
]

const AnimationCards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <Link href={item.link} key={item.id}>
            <div className="overflow group rounded-xl border border-white ring-1 ring-zinc-200 transition-all ease-in-out hover:cursor-pointer">
              <div className="flex h-[12rem] items-center justify-center overflow-hidden rounded-t-xl border-b bg-gray-50 text-xs text-gray-400 transition-all ease-in-out group-hover:bg-gray-100">
                {item.component}
              </div>
              <div className="w-full p-4 text-sm font-medium text-gray-800">
                {item.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AnimationCards
