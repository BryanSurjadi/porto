export default function Contacts() {
  return (
    <div
      className="min-h-[40vh] w-screen rounded-[50px] rounded-tr-none rounded-tl-none text-primary bg-tertiary flex flex-col justify-start  items-center"
      id="contact"
    >
      <div className=" flex flex-col pt-10 ">
        <h1 className="xl:text-8xl lg:text-5xl md:text-5xl sm:text-5xl text-5xl font-semibold ">
          Contact Info
        </h1>
      </div>

      <div className="mt-14 xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl text-xl  flex flex-col items-start space-y-4  h-full">
        <p className="underline ">bryansurjadi@gmail.com</p>
        <p>+62 822 9704 9686</p>
      </div>
    </div>
  );
}
