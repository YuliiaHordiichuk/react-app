import { Link } from 'react-router-dom';
import { Poster } from '../poster/Poster';

interface CardProps {
  id: number;
  image: string | null;
  title: string;
  detail?: string;
  rate?: number;
  place?: string;
  path: string;
}

export function Card({ path, image, title, detail, ...props }: CardProps) {
  const hasRate = typeof props?.rate === 'number';

  return (
    <Link to={path} className={`card card_${props.place || ''}`}>
      <Poster src={image} title={title}></Poster>
      {hasRate && <p className="card-rate">{props.rate}%</p>}
      <p className="text-600 text-14">{title}</p>
      <p className="text-400 text-12">{detail}</p>
    </Link>
  );
}