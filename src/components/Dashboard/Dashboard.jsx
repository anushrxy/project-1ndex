const Dashboard = () => {
  return (
    <section className="py-28 w-full m-auto h-auto flex space-x-28 justify-center items-center">
      <div className="imagecontainer rounded-full">
        <img
          src="https://res.cloudinary.com/dhnkuonev/image/upload/v1665771824/cld-sample.jpg"
          alt=""
          className="ml-16 w-32 h-32 rounded-full border-stone-400 border-4"
        />
      </div>
      <div className="h-40 w-0.5 bg-gray-300 opacity-50 " />
      <div className="textcontainer flex flex-col space-y-6 mr-4">
        <span className="flex flex-row space-x-5">
          <h1 className="m-auto font-semibold">GM:</h1>
          <label className="rounded-2xl m-auto w-96 h-12  border-gray-400 border-2">
            <p className="m-auto flex items-center pl-4 pt-2.5 font-semibold">
              Ashutosh Rath
            </p>
          </label>
        </span>
        <span className="flex flex-row space-x-5">
          <h1 className="m-auto font-semibold">Balance:</h1>
          <label className="rounded-2xl m-auto w-96 h-12  border-gray-400 border-2">
            <p className="m-auto flex items-center pl-4 pt-2 font-semibold">
              f045a7e7c5dccbbfc05fed9f8fd4ffbb
            </p>
          </label>
        </span>
      </div>
    </section>
  );
};

export default Dashboard;
