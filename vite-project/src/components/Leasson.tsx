export function Lesson() {
  return (
    <a href="#">
      <span>
        Segunda • 21 de junho • 19h00
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex justify-between items-center">
          <span className="text-sm text-blue-500 font-medium">
            Conteúdo liberado
          </span>
          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300">
            AO VIVO
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          Abertura do evento Ignite labs
        </strong>
      </div>
    </a>
  )
}