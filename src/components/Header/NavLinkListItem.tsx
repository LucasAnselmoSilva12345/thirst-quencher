import { Link } from 'react-router-dom';

interface NavLinkListItemProps {
  title: string;
  navigate: string;
}

export function NavLinkListItem({ title, navigate }: NavLinkListItemProps) {
  return (
    <li>
      <Link
        to={`${navigate}`}
        className="block w-full border border-orange-500 text-secondary font-medium p-2 text-sm transition-all duration-200 hover:opacity-50 focus:outline-2 focus:outline-orange-800"
      >
        {title}
      </Link>
    </li>
  );
}
