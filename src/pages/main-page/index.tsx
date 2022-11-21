import Card from '../../components/card'

import './main-page.scss'

const MainPage = () => {
  return (
    <div className="container">
      <div className="welcome-card-content">
        <b>Bom Dia Matheus</b>
      </div>

      <div className="routine-cards-container">
        <RoutineCard date=" -- / -- " name="Treino A" />
        <RoutineCard date=" -- / -- " name="Treino B" />
      </div>
    </div>
  )
}

type RoutineCardProps = {
  date: string
  name: string
}

const RoutineCard: React.FC<RoutineCardProps> = (props) => (
  <Card>
    <div className="routine-card-content">
      <p>{formatRoutineDate(props.date)}</p>{' '}
      <p className="routine-name">
        <b>{props.name}</b>
      </p>
    </div>
  </Card>
)

const formatRoutineDate = (date: string): string => {
  return date
}
export default MainPage
