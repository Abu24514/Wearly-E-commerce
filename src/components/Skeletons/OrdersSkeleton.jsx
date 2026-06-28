const OrdersSkeleton = () => {
  return (
    <div className="space-y-5 mt-10">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="border border-neutral-200 rounded-3xl p-5">
          <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
            <div className="flex gap-4 flex-1">
              <div className="w-24 h-28 rounded-2xl shimmer shrink-0" />
              <div className="flex-1 space-y-3 pt-1">
                <div className="h-5 w-2/3 shimmer rounded" />
                <div className="h-4 w-1/2 shimmer rounded" />
                <div className="h-4 w-1/3 shimmer rounded" />
                <div className="h-4 w-1/4 shimmer rounded" />
              </div>
            </div>
            <div className="h-4 w-20 shimmer rounded" />
            <div className="h-10 w-28 shimmer rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default OrdersSkeleton;