import './card.scss'

type CardProps = {
  children: React.ReactNode
}

const Card: React.FC<CardProps> = (props) => <div className="card">{props.children}</div>

export default Card
