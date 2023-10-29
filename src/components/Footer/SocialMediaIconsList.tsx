import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

export function SocialMediaIconsList() {
  return (
    <ul className="flex items-center justify-end gap-4">
      <li>
        <a
          href="https://www.linkedin.com/in/lucas-anselmo-moraes-da-silva-543636161/"
          className="transition-all duration-200 hover:opacity-50"
        >
          <LinkedinIcon color="#A8A29E" size={16} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/LucasAnselmoSilva12345/"
          className="transition-all duration-200 hover:opacity-50"
        >
          <GithubIcon color="#A8A29E" size={16} />
        </a>
      </li>

      <li>
        <a
          href="https://twitter.com/LucasAnselmo202"
          className="transition-all duration-200 hover:opacity-50"
        >
          <TwitterIcon color="#A8A29E" size={16} />
        </a>
      </li>
    </ul>
  );
}
