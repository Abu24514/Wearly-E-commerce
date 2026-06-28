const CartSkeleton = () => {
  return (
    <div className="space-y-4 mt-10">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-5 border-b border-neutral-200 pb-5">
          <div className="w-24 h-28 sm:w-28 sm:h-36 rounded-xl shimmer shrink-0" />
          <div className="flex-1 space-y-3">
            <div className="h-5 w-2/3 shimmer rounded" />
            <div className="h-4 w-1/4 shimmer rounded" />
          </div>
          <div className="h-10 w-32 shimmer rounded-full" />
          <div className="h-5 w-5 shimmer rounded" />
        </div>
      ))}
    </div>
  );
};
export default CartSkeleton;