import './styles.css';

interface WeatherItemProps {
  icon: string
  title: string
  value: string
}

export function WeatherItem({ icon, title, value }: WeatherItemProps) {
  return (
    <div className='weather-item'>
      <img src={icon} alt={title} />
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  )
}