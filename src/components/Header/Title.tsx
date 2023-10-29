interface TitleProps {
  name: string;
}

export function Title({ name }: TitleProps) {
  return <h1 className="text-3xl font-semibold text-secondary">{name}</h1>;
}
