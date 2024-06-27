import localFont from "next/font/local";

const panchang = localFont({
    src: "../../../public/Panchang-Variable.ttf",
    display: "swap",
  });

const MooText = () => {
  return (
    <div className={`text-white flex justify-center items-center my-20 ${panchang.className} sm:text-base text-sm`}> Raise a glass to dairy delights!</div>
  )
}

export default MooText