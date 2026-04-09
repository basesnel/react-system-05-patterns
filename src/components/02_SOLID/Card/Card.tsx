type User = {
  id: number;
  name: string;
  phone: string;
  webSite: string;
};

interface Props {
  data: User;
}

const Card = ({ data }: Props) => {
  <div className="card">
    <h3>{data.name}</h3>
    <p>{data.phone}</p>
  </div>;
};

export { Card };
