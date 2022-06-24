import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const FORMAT_DATE = "EEEE' • 'd' de 'MMMM' • 'k'h'mm";
  const availableDateFormatted = format(props.availableAt, FORMAT_DATE, { locale: ptBR })

  return (
    <Link to={ `/event/lesson/${props.slug}` } className="group">
      <span>
        { availableDateFormatted }
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
        <header className="flex justify-between items-center">
          { isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex item-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex item-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300">
            { props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          { props.title }
        </strong>
      </div>
    </Link>
  )
}
