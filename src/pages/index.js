import { useRouter } from "next/router";

export default function Mhelper() {
  const router = useRouter();

  return (
    <div className="w-full h-full flex flex-col bg-white dark:bg-zinc-800 overflow-x-hidden">
      <div className="w-full h-12 bg-zinc-800 items-center flex flex-row p-4 fixed justify-between 2xl:px-64 xl:px-52 lg:px-40 md:px-28 sm:px-16 px-8 z-50 border-0 dark:border-b-2 border-zinc-700">
        <div className="flex flex-row justify-between items-center xl:2xl:gap-12 sm:lg:gap-8 gap-4">
          <button onClick={() => router.push("/")} className="w-16">
            <img
              className="w-16"
              src="https://aniwatch.to/images/logo.png"
            ></img>
          </button>
          <a
            className="text-zinc-500 cursor-pointer text-sm hover:text-yellow-400 2xl:block xl:block lg:block md:block hidden"
            href="/2ndpage"
          >
            2nd Page
          </a>
          <a className="text-zinc-500 cursor-pointer text-sm hover:text-yellow-400 2xl:block xl:block lg:block md:block hidden">
            Random1
          </a>
          <a className="text-zinc-500 cursor-pointer text-sm hover:text-yellow-400 2xl:block xl:block lg:block md:block hidden">
            Random2
          </a>
        </div>
        <div className="flex flex-row items-center">
          <a
            className="cursor-pointer text-yellow-400 text-sm"
            onClick={() => router.push("/mhelper")}
          >
            Random
          </a>
          <div className="h-4 bg-zinc-600 rounded-md w-[1px] ml-4"></div>
          <button
            className="rounded-md bg-yellow-400 px-4 py-1 ml-4 text-sm text-white 2xl:block xl:block lg:block md:block hidden"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 stroke-white 2xl:hidden xl:hidden lg:hidden md:hidden block ml-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col w-full items-center justify-center mt-12 bg-slate-100 py-16 gap-[40px] dark:bg-zinc-700">
        <p className="flex 2xl:text-3xl xl:text-3xl text-2xl text-zinc-800 dark:text-zinc-100 font-bold">
          Search
        </p>
        <div className="bg-white 2xl:w-1/3 xl:w-1/3 lg:w-1/2 md:w-1/2 w-2/3 h-[48px] rounded-md flex items-center dark:bg-zinc-800">
          <img
            src="https://m-bank.mn/icons/ic_search.png"
            className="w-6 mx-4"
          ></img>
          <input
            placeholder="Search something..."
            className="outline-0 focus:text-slate-800 dark:focus:text-white placeholder-zinc-500 dark:bg-zinc-800 bg-white dark:placeholder:text-zinc-700"
          ></input>
        </div>
      </div>

      <div className="flex items-center flex-col">
        <div className="mt-12 bg-slate-200 w-64 h-16 p-2 rounded-full flex flex-row dark:bg-zinc-700">
          <div className="text-black flex items-center justify-center h-full bg-white rounded-full w-2/5 font-semibold dark:bg-zinc-600 dark:text-white">
            About
          </div>
          <div className="flex font-semibold text-black items-center justify-center w-3/5 text-slate-500 dark:bg-zinc-700 dark:text-zinc-400 rounded-full">
            Corporation
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mt-20 grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 2xl:gap-28 xl:gap-28 gap-20 2xl:pl-64 xl:pl-52 lg:pl-40 md:pl-28 sm:pl-16 pl-8 2xl:pr-0 pr-8">
          <div className="flex flex-col 2xl:w-[350px] xl:w-[350px] lg:w-[300px] md:-[270px] gap-6">
            <img
              className="w-12"
              src="https://m-bank.mn:8888/uploads/support_fingerprint_8874e1de4b.png"
            ></img>
            <p className="2xl:text-4xl xl:text-4xl text-3xl text-zinc-800 font-semibold mt-4 dark:text-zinc-100">
              What is AniWatch.to?
            </p>
            <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">
              AniWatch.to is a free site to watch anime and you can even
              download subbed or dubbed anime in ultra HD quality without any
              registration or payment. By having only one ads in all kinds, we
              are trying to make it the safest site for free anime.
            </p>
            <p className="text-blue-600 2xl:text-md xl:text-md text-sm cursor-pointer">
              Continue
            </p>
          </div>
          <div className="flex flex-col 2xl:w-[350px] xl:w-[350px] lg:w-[300px] md:-[270px] gap-6">
            <img
              className="w-12"
              src="https://m-bank.mn:8888/uploads/support_wallet_66234930d0.png"
            ></img>
            <p className="2xl:text-4xl xl:text-4xl text-3xl text-zinc-800 font-semibold mt-4 dark:text-zinc-100">
              Is AniWatch.to safe?
            </p>
            <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">
              Yes we are, we do have only one Ads to cover the server cost and
              we keep scanning the ads 24/7 to make sure all are clean, If you
              find any ads that is suspicious, please forward us the info and we
              will remove it.
            </p>
            <p className="text-blue-600 2xl:text-md xl:text-md text-sm cursor-pointer">
              Continue
            </p>
          </div>
          <div className="flex flex-col 2xl:w-[350px] xl:w-[350px] lg:w-[300px] md:-[270px] gap-6">
            <img
              className="w-12"
              src="https://m-bank.mn:8888/uploads/Frame_56449_665e3af7fe.png"
            ></img>
            <p className="2xl:text-4xl xl:text-4xl text-3xl text-zinc-800 font-semibold mt-4 dark:text-zinc-100">
              So what make AniWatch.to the best
            </p>
            <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">
              Before building AniWatch.to, we've checked many other free anime
              sites, and learnt from them. We only keep the good things and
              remove all the bad things from all the competitors, to put it in
              our AniWatch website. Let's see how we're so confident about being
              the best site for anime streaming
            </p>
            <p className="text-blue-600 2xl:text-md xl:text-md text-sm cursor-pointer">
              Continue
            </p>
          </div>
          <div className="flex flex-col 2xl:w-[350px] xl:w-[350px] lg:w-[300px] md:-[270px] gap-6">
            <img
              className="w-12"
              src="https://m-bank.mn:8888/uploads/support_percentage_a9487ba893.png"
            ></img>
            <p className="2xl:text-4xl xl:text-4xl text-3xl text-zinc-800 font-semibold mt-4 dark:text-zinc-100">
              Streaming experience
            </p>
            <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">
              Compared to other anime streaming sites, the loading speed at
              AniWatch.to is faster. Downloading is just as easy as streaming,
              you won't have any problem saving the videos to watch offline
              later.
            </p>
            <p className="text-blue-600 2xl:text-md xl:text-md text-sm cursor-pointer">
              Continue
            </p>
          </div>
          <div className="flex flex-col 2xl:w-[350px] xl:w-[350px] lg:w-[300px] md:-[270px] gap-6">
            <img
              className="w-12"
              src="https://m-bank.mn:8888/uploads/support_card_5e40d47889.png"
            ></img>
            <p className="2xl:text-4xl xl:text-4xl text-3xl text-zinc-800 font-semibold mt-4 dark:text-zinc-100">
              Customer care
            </p>
            <p className="text-zinc-500 2xl:text-md xl:text-md text-sm cursor-pointer">
              We are in active mode 24/7. You can always contact us for any
              help, query, or business-related inquiry. On our previous
              projects, we were known for our great customer service as we were
              quick to fix broken links or upload requested content.
            </p>
            <p className="text-blue-600 2xl:text-md xl:text-md text-sm cursor-pointer">
              Continue
            </p>
          </div>
        </div>
      </div>

      <div className="bg-zinc-800 flex flex-col pt-24 2xl:px-80 xl:px-60 lg:px-44 md:px-20 sm:px-12 px-8 mt-24 border-0 dark:border-t-2 border-zinc-700">
        <div className="flex 2xl:flex-row xl:flex-row flex-col">
          <div className="2xl:flex xl:flex lg:flex md:flex sm:flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row grid grid-cols-2">
            <img
              src="https://aniwatch.to/images/logo.png"
              className="w-16 h-8 2xl:block xl:block lg:block md:block sm:block hidden"
            ></img>
            <div className="flex flex-col 2xl:ml-8 xl:ml-8 lg:ml-8 md:ml-8 sm:ml-8 ml-0">
              <p className="text-zinc-500 font-bold">For you</p>
              <p className="text-white mt-6 text-sm cursor-pointer">Currency</p>
              <p className="text-white mt-4 text-sm cursor-pointer">
                Digital computer
              </p>
              <p className="text-white mt-4 text-sm cursor-pointer">
                Transferance
              </p>
            </div>
            <div className="flex flex-col 2xl:ml-20 xl:ml-20 lg:ml-36 md:ml-24 sm:ml-12 ml-0">
              <p className="text-zinc-500 font-bold">For another</p>
              <p className="text-white mt-6 text-sm cursor-pointer">
                Corresponding account
              </p>
              <p className="text-white mt-4 text-sm cursor-pointer">
                Loan of loan
              </p>
              <p className="text-white mt-4 text-sm cursor-pointer">
                Loan of loan of loan
              </p>
              <p className="text-white mt-4 text-sm cursor-pointer">
                Оverwatch
              </p>
            </div>
            <div className="flex flex-col 2xl:ml-20 xl:ml-20 lg:ml-36 md:ml-24 sm:ml-12 ml-0 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 mt-16 2xl:col-span-0 xl:col-span-0 lg:col-span-0 md:col-span-0 sm:col-span-0 col-span-2">
              <p className="text-zinc-500 font-bold">Contact</p>
              <p className="text-white mt-6 text-sm cursor-pointer">
                Mongolia, Ulaanbaatar
              </p>
              <p className="text-white text-sm cursor-pointer">
                Sukhbaatar, 1st street
              </p>
              <p className="text-white text-sm cursor-pointer">
                NEST high school
              </p>
              <p className="text-white text-sm cursor-pointer">502 room</p>
              <p className="text-white mt-4 text-sm cursor-pointer">99123123</p>
              <p className="text-white text-sm cursor-pointer">
                aniwatch@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col 2xl:ml-36 xl:ml-36 ml-0 2xl:mt-0 xl:mt-0 my-8">
            <p className="text-zinc-500 font-bold 2xl:mt-0 xl:mt-0 mt-4">
              Join us
            </p>
            <div className="flex flex-row gap-4 2xl:order-0 xl:order-0">
              <img
                src="https://m-bank.mn/icons/footer/Facebook.png"
                className="mt-6 w-6"
              ></img>
              <img
                src="https://m-bank.mn/icons/footer/Users.png"
                className="mt-6 w-6"
              ></img>
              <img
                src="https://m-bank.mn/icons/footer/Instagram.png"
                className="mt-6 w-6"
              ></img>
              <img
                src="https://m-bank.mn/icons/footer/Twitter.png"
                className="mt-6 w-6"
              ></img>
              <img
                src="https://m-bank.mn/icons/footer/LinkedIn.png"
                className="mt-6 w-6"
              ></img>
            </div>
            <p className="text-zinc-500 font-bold mt-6 cursor-pointer 2xl:order-last xl:order-last order-first">
              Terms of Service
            </p>
          </div>
        </div>
        <div className="flex flex-row my-16 items-center justify-between w-3/4">
          <p className="text-zinc-500 text-sm">Protected by copyright</p>
          <div className="flex flex-row mx-4">
            <p className="cursor-pointer text-sm text-zinc-500">Conditions</p>
            <img
              src="https://m-bank.mn/icons/en.png"
              className="w-4 h-4 ml-4 cursor-pointer"
            ></img>
            <p className="text-zinc-500 ml-2 text-sm cursor-pointer">EN</p>
          </div>
        </div>
      </div>
    </div>
  );
}
