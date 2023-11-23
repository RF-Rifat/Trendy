const EmptyData = () => {
    return (
      <>
        <div className="container mx-auto my-8 space-y-10">
          <h1 className="text-center font-bold text-3xl my-10 text-primary">
            You Haven&apos;t  Added any Products to the Cart Yet
          </h1>
          <div className="max-w-4xl mx-auto px-10 py-4 grid place-items-center">
            <div className="">
              <tr>
                <td className="w-full text-center mx-auto py-12" colSpan="5">
                  <img
                    className="w-32 h-32 mx-auto"
                    src="https://res.cloudinary.com/daqsjyrgg/image/upload/v1690261234/di7tvpnzsesyo7vvsrq4.svg"
                    alt="image empty states"
                  />
                  <p className=" font-medium text-lg text-center text-primary">
                    No product data available.
                  </p>
                  <p className=" text-center text-primary">
                    You can add new Product data to display in this Page.
                  </p>
                </td>
              </tr>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default EmptyData;
  