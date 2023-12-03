import {cn} from '~/lib/utils';
import {Badge, IconButton} from '../ui';

export default function ProductCard() {
  return (
    <div
      className={cn(
        'bg-background text-foreground max-w-[13.75rem] rounded-xl relative',
      )}
    >
      <ProductCard.ImageWrapper />
      <ProductCard.Info />
      <ProductCard.Actions />
    </div>
  );
}

ProductCard.ImageWrapper = () => {
  return (
    <div className="bg-primary text-primary-foreground aspect-[3/2] rounded-tl-xl rounded-tr-xl overflow-hidden">
      <ProductCard.Image />
    </div>
  );
};

ProductCard.Image = () => {
  return (
    <img
      src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-hottest-product-png-image_5976680.jpg"
      alt=""
      loading="lazy"
      width={200}
      height={200}
      className="object-contain w-full h-full object-bottom mix-blend-multiply rounded-tl-xl rounded-tr-xl"
    />
  );
};

ProductCard.Info = () => {
  return (
    <div className="pt-[1.5625rem] pb-[0.625rem] px-[1.25rem]">
      <h4 className="font-[500] font-Roboto text-container-foreground text-[1rem] leading-[120%]">
        Vendor
      </h4>
      <h3 className="font-[600] font-Roboto text-[1.125rem] leading-[180%]">
        Headphone
      </h3>
      <div className="flex items-center gap-[0.625rem] mt-[0.25rem]">
        <Badge className="font-[600] font-Arimo">20%</Badge>
        <small className="text-[0.875rem] font-[500] line-through font-Arimo text-container-foreground">
          $22.00
        </small>
      </div>
      <p className="font-[600] font-Arimo text-[1.125rem] leading-[180%]">
        $20.00
      </p>
    </div>
  );
};

ProductCard.Actions = () => {
  return (
    <div className="bg-container flex items-center gap-[0.625rem] absolute bottom-[-1.25rem] right-[-3.75rem] p-[0.9375rem] rounded-xl">
      <IconButton variant="primary-outlined" title="Add to Wishlist">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[1.375rem] h-[1.375rem]"
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
              d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
              stroke="#000000"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-primary-foreground"
            />{' '}
          </g>
        </svg>
      </IconButton>
      <IconButton
        title="Add to Cart"
        variant="outlined"
        style={{
          background: `conic-gradient(hsl(var(--primary-foreground)) 0deg, hsl(var(--container-foreground)) 0deg)`,
        }}
      >
        <svg
          fill="#000000"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-primary-foreground w-[1.375rem] h-[1.375rem]"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <path d="M15.999 8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245.298-5 1.592-5 4.429 0 2.706 2.666 4.113 5 4.43v4.97c-1.448-.251-3-1.024-3-2.4h-2c0 2.589 2.425 4.119 5 4.436V22h2v-2.07c2.245-.298 5-1.593 5-4.43s-2.755-4.131-5-4.429V6.1c1.33.239 3 .941 3 2.4zm-8 0c0-1.459 1.67-2.161 3-2.4v4.799c-1.371-.253-3-1.002-3-2.399zm8 7c0 1.459-1.67 2.161-3 2.4v-4.8c1.33.239 3 .941 3 2.4z" />
          </g>
        </svg>
      </IconButton>
    </div>
  );
};
