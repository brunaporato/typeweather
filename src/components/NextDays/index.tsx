import './styles.css';
import { NextDayProps, NextDaysItem } from '../NextDaysItem';

interface NextDaysProps {
  data: NextDayProps[]
}

export function NextDays({ data }: NextDaysProps) {
  return (
    <section className='next-days'>
      <h1>Previsão para 5 dias</h1>

      <div className='next-next-detail'>
        {data.map((item) => <NextDaysItem key={item.day} data={item} />)}
      </div>
    </section>
  )
}