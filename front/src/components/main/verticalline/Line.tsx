function Line({ width, height }: { width: number; height: number }) {
  const widthClass = `w-${width}`;

  const heightClass = `h-${height}`;

  return <div className={`bg-bg-gray ${heightClass} ${widthClass} mx-auto`} />;
}

export default Line;
