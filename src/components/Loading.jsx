function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="loader bg-indigo-500 h-12 w-12 rounded-full animate-spin"></div>
      <h2 className="mt-4 text-lg font-semibold text-indigo-600">
        Please wait...
      </h2>
    </div>
  );
}

export default Loading;
