const ProductItemSkeleton = () => {
  return (
    <div className="text-gray-500 block">
      <div className="overflow-hidden relative rounded-md aspect-square shimmer">
        <div className="absolute top-3 left-3 z-10">
          <div className="h-6 w-20 rounded-full shimmer" />
        </div>
      </div>
      <div className="pt-3 pb-1">
        <div className="h-4 w-3/4 rounded shimmer" />
      </div>
      <div className="h-4 w-1/3 rounded shimmer" />
    </div>
  );
};
export default ProductItemSkeleton;