import { CheckCircle } from 'phosphor-react';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  return (
    <a href="#">
      <span>
        { props. availableAt.toString() }
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex justify-between items-center">
          <span className="text-sm text-blue-500 font-medium flex item-center gap-2">
            <CheckCircle size={20} />
            Conteúdo liberado
          </span>
          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300">
            { props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          { props.type }
        </strong>
      </div>
    </a>
  )
}