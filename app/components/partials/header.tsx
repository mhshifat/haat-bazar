import {cn} from '~/lib/utils';
import {Logo, ProfileFront, Search} from '.';
import {IconButton} from '../ui';

export default function Header() {
  return (
    <div className={cn("flex items-center gap-8 py-[1.25rem]")}>
      <Logo />
      <div className={cn("flex items-center justify-center gap-4 w-[50rem]")}>
      <Search />
      <IconButton>
        <svg
          className={cn('w-[1.375rem] h-[1.375rem]')}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
              stroke="#1C274C"
              strokeWidth="1.9200000000000004"
            />{' '}
            <path
              d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
              stroke="#1C274C"
              strokeWidth="1.9200000000000004"
            />{' '}
            <path
              d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7"
              stroke="#1C274C"
              strokeWidth="1.9200000000000004"
              strokeLinecap="round"
            />{' '}
          </g>
        </svg>
      </IconButton>
      <IconButton>
        <svg
          className={cn('w-[1.5625rem] h-[1.5625rem]')}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000000"
          strokeWidth="0.24000000000000005"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5 4.68727V3.75H13.5V4.68731C16.1369 5.35963 18.0833 7.76335 18.0833 10.6184V15.3158C18.0833 15.7194 18.2193 16.2984 18.3833 16.8298C18.4618 17.0841 18.5405 17.3084 18.5996 17.4689C18.6291 17.5489 18.6534 17.6125 18.6701 17.6553L18.6891 17.7034L18.6936 17.7147L18.6945 17.717L18 18.75H5.99996L5.30542 17.717L5.30632 17.7147L5.31085 17.7034L5.32979 17.6553C5.3465 17.6125 5.37086 17.5489 5.40032 17.4689C5.45941 17.3084 5.53817 17.0841 5.61665 16.8298C5.78067 16.2984 5.91663 15.7194 5.91663 15.3158V10.6184C5.91663 7.76329 7.8631 5.35953 10.5 4.68727ZM12 6C9.47329 6 7.41663 8.06309 7.41663 10.6184V15.3158C7.41663 15.9518 7.22451 16.7031 7.05676 17.25H16.9432C16.7754 16.7031 16.5833 15.9518 16.5833 15.3158V10.6184C16.5833 8.06309 14.5266 6 12 6ZM15 21H9.00004V19.5H15V21Z"
              fill="#080341"
            />{' '}
          </g>
        </svg>
      </IconButton>
      </div>
      <ProfileFront />
    </div>
  );
}
