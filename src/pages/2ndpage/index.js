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

      <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col 2xl:pl-64 xl:pl-52 lg:pl-40 md:pl-28 pl-0 2xl:mt-28 xl:mt-28 lg:mt-28 md:mt-28 mt-12 2xl:pr-64 xl:pr-44 lg:pr-32 md:pr-16 pr-0">
        <div className="2xl:hidden xl:hidden lg:hidden md:hidden block w-full flex items-center bg-white border-b-2 border-t-2 border-zinc-600 px-8 h-12 justify-between bg-white dark:bg-zinc-800 dark:border-zinc-700">
          <p className="text-zinc-900 font-semibold dark:text-zinc-100">
            Randoms
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 stroke-zinc-900 dark:stroke-zinc-100 mt-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div className="flex flex-col w-64 2xl:block xl:block lg:block md:block hidden">
          <p className="font-semibold text-4xl text-zinc-900 dark:text-zinc-100">
            Randoms
          </p>
          <p className="cursor-pointer text-md mt-8 text-zinc-900 font-semibold dark:text-zinc-100">
            The cat jumped onto the table, knocking over a vase.
          </p>
          <div className="flex flex-row group mt-10 cursor-pointer">
            <p className="text-md text-zinc-600 dark:text-zinc-500 font-semibold group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
              The sun set behind the mountains, casting a warm glow over the
              valley.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 stroke-zinc-600 dark:stroke-zinc-500 group-hover:stroke-zinc-900 ml-16 mt-1 dark:group-hover:stroke-zinc-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <p className="text-md dark:text-zinc-500 text-zinc-600 font-semibold hover:text-zinc-900 mt-8 cursor-pointer dark:hover:text-zinc-100">
            She smiled as she read the letter from her long-lost friend.
          </p>
          <p className="text-md dark:text-zinc-500 text-zinc-600 font-semibold hover:text-zinc-900 mt-8 cursor-pointer dark:hover:text-zinc-100">
            The rain pattered against the window, creating a soothing rhythm.
          </p>
          <p className="text-md dark:text-zinc-500 text-zinc-600 font-semibold hover:text-zinc-900 mt-8 cursor-pointer dark:hover:text-zinc-100">
            The child giggled as the puppy licked her face.
          </p>
        </div>
        <div className="flex flex-col 2xl:ml-32 xl:ml-28 lg:ml-24 md:ml-20 ml-8 2xl:pr-0 xl:pr-0 lg:pr-0 md:pr-0 pr-8 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-12">
          <p className="text-zinc-900 text-lg font-semibold dark:text-zinc-100">
            Another random
          </p>
          <p className="text-black text-sm mt-6 dark:text-white font-thin">
            The old, weathered book sat on the shelf, its pages yellowed and its
            spine cracked. It had been there for as long as anyone could
            remember, a relic of a time long past. No one knew who had written
            it or where it had come from, but it was a source of fascination for
            many. Some said it was cursed, while others believed it held the
            secrets of the universe. Whatever the truth, it remained a mystery,
            its secrets locked away within its pages. And so it sat, gathering
            dust, waiting for someone brave enough to unlock its secrets.
          </p>
          <p className="text-black text-sm mt-6 dark:text-white font-thin">
            The city was bustling with activity, the streets filled with people
            going about their daily lives. Cars honked their horns, and sirens
            wailed in the distance. The smell of food wafted through the air,
            tempting passersby to stop and eat. The skyscrapers towered above,
            their windows reflecting the sunlight. It was a city that never
            slept, always alive with energy and excitement. And yet, amidst the
            chaos, there was a sense of calm. People smiled and laughed,
            enjoying the moment. It was a reminder that even in the busiest of
            places, there was still beauty to be found.
          </p>
          <p className="text-black text-sm mt-6 dark:text-white font-thin">
            The moon hung low in the sky, casting a soft glow over the
            landscape. The stars twinkled above, their light dancing across the
            darkness. The air was cool and crisp, a gentle breeze rustling the
            leaves. It was a peaceful night, a time for reflection and
            contemplation. The world seemed to slow down, the hustle and bustle
            of the day fading away. It was a moment to appreciate the beauty of
            the world, to be grateful for the simple things in life. And as the
            night wore on, the world slept, content in the knowledge that
            tomorrow would bring another day.
          </p>
          <p className="text-black text-sm mt-6 dark:text-white font-thin">
            The waves crashed against the shore, their rhythmic sound soothing
            to the soul. The sand was warm beneath my feet, the sun shining
            brightly overhead. Seagulls circled above, their cries echoing in
            the distance. It was a perfect day at the beach, a chance to relax
            and unwind. I closed my eyes and breathed in the salty air, feeling
            the stress of the week melt away. It was a moment of pure bliss, a
            reminder of the beauty of nature. And as I opened my eyes and looked
            out at the ocean, I felt grateful for this moment of peace.
          </p>
          <p className="text-zinc-900 text-lg font-semibold mt-16 dark:text-zinc-100">
            Last random
          </p>
          <p className="text-black text-sm mt-6 dark:text-white font-thin">
            The forest was alive with the sounds of nature, birds chirping and
            leaves rustling in the wind. The sun filtered through the trees,
            casting dappled shadows on the forest floor. It was a magical place,
            a sanctuary from the hustle and bustle of everyday life. I took a
            deep breath, inhaling the earthy scent of the forest. It was a
            reminder of the beauty of the natural world, a reminder to slow down
            and appreciate the small things. And as I walked deeper into the
            forest, I felt a sense of peace wash over me, grateful for this
            moment of solitude.
          </p>
          <p className="text-black text-sm mt-6 dark:text-white font-thin">
            Дотоод аудит нь банкны засаглал, үйл ажиллагаа болон стратегийн
            эрсдэлийг бууруулахад чиглэсэн хамгаалалтын 3-р бүсийн хяналтыг
            дараах чиглэлээр хэрэгжүүлнэ. Үүнд:
          </p>
          <p className="text-black text-sm mt-6 dark:text-white font-thin">
            The clock ticked loudly in the otherwise silent room, its hands
            moving slowly but steadily. The room was dimly lit, the only light
            coming from a single lamp in the corner. The air was heavy with the
            scent of old books, their pages yellowed with age. It was a cozy
            room, a place where one could escape from the outside world. I sat
            in an armchair by the fireplace, a cup of tea in hand. It was a
            moment of quiet reflection, a chance to unwind after a long day. And
            as I sipped my tea, I felt grateful for this moment of peace.
          </p>
          <p className="text-black text-sm mt-6 dark:text-white font-thin">
            The city was alive with the sounds of traffic, the honking of horns
            and the rumble of engines. The streets were crowded with people, all
            rushing to their destinations. The air was thick with the smell of
            exhaust, a constant reminder of the city's hustle and bustle. It was
            a chaotic place, a world of constant motion and noise. And yet,
            amidst the chaos, there was a sense of energy and excitement. It was
            a city that never slept, always alive with activity. And as I walked
            through the streets, I couldn't help but feel grateful for the
            vibrancy of city life.
          </p>
          <p className="text-black text-sm mt-6 dark:text-white font-thin">
            The sun was setting, casting a warm glow over the horizon. The sky
            was painted in shades of pink and orange, a beautiful sight to
            behold. The air was cool and crisp, a gentle breeze rustling the
            leaves. It was a perfect evening, a chance to relax and unwind. I
            sat on the porch, a cup of tea in hand, watching the world go by. It
            was a moment of peace, a chance to appreciate the beauty of the
            world. And as I watched the sun dip below the horizon, I felt
            grateful for this moment of tranquility.
          </p>
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
