const Input = ({ icon: Icon, ...props }) => {
	return (
	  <div className="relative mb-5">
		<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
		  <Icon className="w-5 h-5 text-indigo-500" />
		</div>
		<input
		  {...props}
		  className="w-full pl-10 pr-4 py-3 text-sm text-slate-700 bg-white rounded-lg 
					 border border-slate-300 placeholder-slate-400 
					 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 
					 transition duration-200 outline-none shadow-sm"
		/>
	  </div>
	);
  };
  
  export default Input;
  