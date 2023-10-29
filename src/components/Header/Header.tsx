import { NavLinkListItem } from './NavLinkListItem';
import { Title } from './Title';

export function Header() {
  return (
    <header className="bg-destructive">
      <div className="w-full p-4 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <Title name="Thirst-Quencher" />
        <nav className="py-2 lg:py-0">
          <ul className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
            <NavLinkListItem navigate="/" title="Drink by Name" />

            <NavLinkListItem navigate="/" title="Drink by Letter" />

            <NavLinkListItem navigate="/" title="Drink by Ingredient" />
          </ul>
        </nav>
      </div>
    </header>
  );
}
