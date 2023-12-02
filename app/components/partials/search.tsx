import {cn} from '~/lib/utils';

export default function Search() {
  return (
    <div
      className={cn(
        'w-full h-full px-4 py-1 flex items-center justify-between border border-primary focus-within:border-primary/50 rounded-full',
      )}
    >
      <input
        className={cn(
          'w-full h-full border-none outline-none focus:outline-none focus:border-none focus:shadow-none text-[18px] font-[400] font-Arimo text-foreground placeholder-text-container-foregorund',
        )}
        type="text"
        placeholder="Search"
      />
      <button>
        <svg className='w-[1.75rem] h-[1.75rem]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="#000000"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn(
                'stroke-container-foreground',
              )}
            />{' '}
          </g>
        </svg>
      </button>
    </div>
  );
}
