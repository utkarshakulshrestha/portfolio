'use client'

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gray-100/60 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
    </div>
  )
}
