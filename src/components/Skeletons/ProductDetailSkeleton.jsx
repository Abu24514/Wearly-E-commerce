const ProductDetailSkeleton = () => {
  return (
    <div className="pt-10">
      <div className="flex gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col gap-2 sm:w-[18.7%]">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-[24%] sm:w-full aspect-square shimmer rounded" />
            ))}
          </div>
          <div className="w-full sm:w-[80%] aspect-square shimmer rounded" />
        </div>
        <div className="flex-1 space-y-4">
          <div className="h-8 w-3/4 shimmer rounded" />
          <div className="h-4 w-1/3 shimmer rounded" />
          <div className="h-10 w-1/4 shimmer rounded" />
          <div className="h-20 w-full shimmer rounded" />
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-10 w-14 shimmer rounded" />
            ))}
          </div>
          <div className="h-12 w-40 shimmer rounded-full" />
        </div>
      </div>
    </div>
  );
};
export default ProductDetailSkeleton;