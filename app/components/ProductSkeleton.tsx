import {Skeleton} from "@heroui/react";

export function SingleShimmer() {
  return (
    <div className="skeleton--shimmer content-box relative grid w-full max-w-xl grid-cols-1 gap-2 overflow-hidden rounded-xl
    md:grid-cols-2 lg:grid-cols-3">
      <Skeleton animationType="none" className="h-24 rounded-xl" />
      <Skeleton animationType="none" className="h-24 rounded-xl" />
      <Skeleton animationType="none" className="h-24 rounded-xl" />
      <Skeleton animationType="none" className="h-24 rounded-xl" />
      <Skeleton animationType="none" className="h-24 rounded-xl" />
      <Skeleton animationType="none" className="h-24 rounded-xl" />
    </div>
  );
}