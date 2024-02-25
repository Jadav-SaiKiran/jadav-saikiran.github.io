const Button = ({ content }) => {
  return (
    <button className="flex-1 p-2 font-medium text-white uppercase border border-white rounded-lg bg-none hover:bg-white hover:text-black whitespace-nowrap hover:animate-pulse">
      {content}
    </button>
  );
};

export default Button;
