function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="loader bg-indigo-500 h-10 w-10 rounded-full animate-spin-move"></div>
      <h2 className="mt-4 text-lg font-semibold text-indigo-600">
        Please Wait...
      </h2>
    </div>
  );
}

export default Loading;
