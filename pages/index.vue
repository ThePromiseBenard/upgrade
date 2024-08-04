<script>
export default {
  name: "HomePage",
};
</script>

<template>
  <div class="bg-white font-poppins space-y-10 lg:space-y-40">
    <div class="relative">
      <img
        src="/bg-gradient.png"
        class="absolute h-full w-screen inset-0 object-cover"
        role="presentation"
        alt=""
      />
      <div class="bg-hero-pattern bg-no-repeat bg-cover opacity-90 inset-0">
        <!-- Header -->
        <header class="text-white py-4 container">
          <div
            class="flex justify-between items-center gap-4 flex-wrap max-sm:justify-center"
          >
            <img src="/upgrade-logo.svg" alt="logo" />
            <nav class="flex items-center max-sm:text-sm gap-6">
              <a href="#" class="hover:text-gray-300">Features</a>
              <a href="#" class="hover:text-gray-300">Security</a>
              <a href="#" class="hover:text-gray-300">Pricing</a>
              <a href="#" class="hover:text-gray-300">FAQ</a>
              <a href="#" class="hover:text-gray-300">Support</a>
            </nav>
            <button
              class="bg-transparent border border-gray-300 max-sm:hidden text-gray-300 py-1 px-6 rounded-md"
            >
              Sign in
            </button>
          </div>
        </header>

        <!-- Hero Section -->
        <section>
          <div
            class="text-white pt-10 pb-5 md:pb-10 md:pt-20 grid md:grid-cols-2 container"
          >
            <div class="flex flex-col justify-center">
              <div class="space-y-8">
                <span
                  class="text-xs md:text-sm font-medium py-1 px-3 rounded-full bg-white/30"
                  >🔥 100% TRUSTED PLATFORM</span
                >
                <div class="space-y-4">
                  <h1
                    class="text-4xl md:text-6xl font-bold uppercase font-inter"
                  >
                    Finance with Security and
                    <span class="text-[#E2FF54]">Flexibility</span>
                  </h1>
                  <p class="md:text-lg font-medium max-w-[500px]">
                    No-fee checking account with cash back rewards. Enjoy
                    fee-free banking and earn cash back on your everyday
                    purchases.
                  </p>
                </div>

                <button
                  class="bg-green-600 text-white md:py-3 font-semibold capitalize max-sm:text-xs py-2 px-6 rounded-full"
                >
                  open account
                </button>
              </div>
            </div>
            <div class="flex items-center justify-end">
              <img
                class="max-sm:hidden h-[600px]"
                src="/hero-image.png"
                alt=""
              />
            </div>
          </div>
          <div class="bg-green-800">
            <div
              class="flex items-center flex-wrap gap-4 justify-center md:justify-between container py-4"
            >
              <img
                class="object-cover max-sm:w-16"
                src="/spherule.svg"
                alt=""
              />
              <img class="object-cover max-sm:w-16" src="/samsung.svg" alt="" />
              <img class="object-cover max-sm:w-16" src="/visa.svg" alt="" />
              <img class="object-cover max-sm:w-16" src="/amazon.svg" alt="" />
              <img
                class="object-cover max-sm:w-16 max-sm:hidden"
                src="/Paypal.svg"
                alt=""
              />
              <img
                class="object-cover max-sm:w-16 max-sm:hidden"
                src="/alipay.svg"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- About Section -->
    <section class="container grid lg:grid-cols-2 gap-12 md:gap-24">
      <div>
        <div class="p-8 md:p-16 bg-gray-300 rounded-2xl">
          <img src="/stats.png" alt="" />
        </div>
      </div>
      <div class="px-4 space-y-4">
        <span
          class="w-auto bg-gray-200 text-xs py-1 px-3 rounded-full border border-gray-400"
          >🔥 ABOUT US</span
        >
        <h2 class="text-3xl md:text-5xl font-bold font-inter max-w-md">
          All Your Money Needs in One App
        </h2>
        <div class="space-y-4">
          <div class="bg-[#F1FFD2] p-4 rounded-2xl shadow">
            <h3 class="md:text-xl font-bold mb-2">Expense Tracker</h3>
            <p class="max-sm:text-sm text-gray-600 max-w-md">
              Our comprehensive selection of medications, supplements, and
              healthcare products .
            </p>
          </div>
          <div class="border border-gray-300 p-4 rounded-2xl shadow">
            <h3 class="md:text-xl font-bold mb-2">Crypto Connection</h3>
            <p class="max-sm:text-sm text-gray-600 max-w-md">
              From advanced imaging technology such as MRI and CT scanners to
              precision surgical tools.
            </p>
          </div>
          <div class="border border-gray-300 p-4 rounded-2xl shadow">
            <h3 class="md:text-xl font-bold mb-2">Automated Invoicing</h3>
            <p class="max-sm:text-sm text-gray-600 max-w-md">
              We're committed to leveraging the latest innovations in medical
              technology.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="container grid lg:grid-cols-2 gap-12 md:gap-24">
      <div class="flex flex-col justify-center">
        <div class="space-y-8">
          <span
            class="w-auto bg-gray-200 text-xs py-1 px-3 rounded-full border border-gray-400"
            >🔥 FEATURED</span
          >
          <h2
            class="text-3xl md:text-5xl font-bold font-inter max-w-md uppercase"
          >
            All the features in one app
          </h2>
          <ul class="space-y-4 px-6 max-w-md capitalize">
            <li class="list-disc">
              Get 3% cash back on everyday purchases, 2% on everything else4
            </li>
            <li class="list-disc">
              Get 3% cash back on everyday purchases, 2% on everything else4
            </li>
          </ul>
          <button
            class="border border-green-500 text-black md:py-3 font-semibold capitalize max-sm:text-xs py-2 px-6 rounded-full"
          >
            get started
          </button>
        </div>
      </div>

      <div class="px-8 md:px-16 bg-gray-300 rounded-2xl">
        <img class="" src="/double-phones.png" alt="" />
      </div>
    </section>

    <!-- Security Section -->
    <section
      class="bg-gradient-2 py-8 md:py-20 bg-no-repeat bg-cover bg-center"
    >
      <div class="container grid lg:grid-cols-2 gap-12 md:gap-24">
        <div class="max-sm:order-2">
          <img class="" src="/phone-with-card.png" alt="" />
        </div>
        <div class="flex flex-col justify-center max-sm:order-1">
          <div class="space-y-8">
            <span
              class="w-auto bg-gray-200 text-xs py-1 px-3 rounded-full border border-gray-400"
              >🔥 TRUSTWORTHINESS</span
            >
            <h2
              class="text-3xl md:text-5xl font-bold font-inter max-w-2xl text-white uppercase"
            >
              We value your trust and security
            </h2>
            <p class="text-gray-300">
              Our mission is to make finance more accessible, transparent, and
              secure for everyone. With cutting.
            </p>
            <button
              class="bg-green-600 text-white md:py-3 font-semibold capitalize max-sm:text-xs py-2 px-6 rounded-full"
            >
              get started
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="container">
      <div class="flex flex-col gap-4 items-center mb-8">
        <span
          class="w-auto bg-gray-200 text-xs py-1 px-3 rounded-full border border-gray-400"
          >🔥 SERVICES</span
        >
        <h2
          class="text-3xl md:text-5xl font-bold font-inter max-w-2xl text-center text-black uppercase"
        >
          Can Help You Achieve Financial Success
        </h2>
      </div>
      <div class="bg-[#F6F9F8] pt-4 md:pt-10 rounded-md shadow mb-6">
        <div class="container grid lg:grid-cols-2 gap-12 md:gap-24">
          <div class="max-sm:order-2">
            <img class="" src="/welcome-back.png" alt="" />
          </div>
          <div class="flex flex-col justify-center max-sm:order-1">
            <div class="space-y-2">
              <span
                class="bg-green-500 rounded-full flex items-center justify-center size-8 text-white"
              >
                <Icon name="tabler:world-dollar" size="1.5em" />
              </span>
              <h3
                class="text-2xl md:text-4xl font-medium font-inter max-w-xs text-black capitalize"
              >
                Transfers across the globe are free
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-[#F6F9F8] pt-4 md:pt-10 px-6 rounded-lg shadow">
          <div class="space-y-10">
            <div class="space-y-2">
              <span
                class="bg-green-500 rounded-full flex items-center justify-center size-8 text-white"
              >
                <Icon name="material-symbols:bar-chart-4-bars" size="1.5em" />
              </span>
              <h3
                class="text-2xl md:text-4xl font-medium font-inter max-w-md text-black capitalize"
              >
                Create A Card That Is Unique And Customized
              </h3>
            </div>
            <p class="text-gray-400 max-w-md">
              we offer a comprehensive range of innovative financial services
              tailored to meet your needs. Our services include High-Yield
              Savings Accounts.
            </p>
            <div class="flex items-center justify-center">
              <img class="w-[420px]" src="/tom-graph.png" alt="" />
            </div>
          </div>
        </div>

        <div class="bg-[#001027] pt-4 md:pt-10 px-6 rounded-lg shadow">
          <div class="space-y-10">
            <div class="space-y-2">
              <span
                class="bg-green-500 rounded-full flex items-center justify-center size-8 text-white"
              >
                <Icon name="tabler:settings" size="1.5em" />
              </span>
              <h3
                class="text-2xl md:text-4xl font-medium font-inter max-w-md text-white capitalize"
              >
                Personalized Insights And Financial Goals
              </h3>
            </div>
            <p class="text-gray-400 max-w-md">
              we offer a comprehensive range of innovative financial services
              tailored to meet your needs. Our services include High-Yield
              Savings Accounts.
            </p>
            <div class="flex items-center justify-center">
              <img class="w-[480px]" src="/tom-money.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-[#E2FF54] rounded-xl shadow py-16 px-6 space-y-6">
          <h3
            class="text-2xl md:text-4xl font-medium font-inter max-w-xs text-black capitalize"
          >
            100% <br />Dedication
          </h3>
          <p class="">
            we offer a comprehensive range of innovative financial services
            tailored to meet your needs.
          </p>
        </div>
        <div class="bg-gray-300 rounded-xl shadow py-16 px-6 space-y-6">
          <h3
            class="text-2xl md:text-4xl font-medium font-inter max-w-xs text-black capitalize"
          >
            100% <br />Dedication
          </h3>
          <p class="">
            we offer a comprehensive range of innovative financial services
            tailored to meet your needs.
          </p>
        </div>
        <div
          class="bg-[#2D907A] rounded-xl shadow py-16 px-6 space-y-6 flex items-center justify-center"
        >
          <h3
            class="text-2xl md:text-4xl font-medium font-inter text-center text-white capitalize"
          >
            Visit Our Services page
          </h3>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <button
          class="border border-green-500 text-black md:py-3 font-semibold capitalize max-sm:text-xs py-2 px-6 rounded-full"
        >
          view more
        </button>
      </div>
    </section>
    <!-- Testimonials Section -->
    <section class="bg-[#F6F9F8] py-20">
      <div class="container">
        <div class="flex flex-col gap-4 items-center mb-8">
          <span
            class="w-auto bg-gray-200 text-xs py-1 px-3 rounded-full border border-gray-400"
            >🔥 TESTIMONIALS</span
          >
          <h2
            class="text-3xl md:text-5xl font-bold font-inter max-w-2xl text-center text-black uppercase"
          >
            Get to Know Our Clients
          </h2>
        </div>
        <div class="grid md:grid-cols-3 gap-6 mb-6">
          <div
            class="bg-white text-black py-10 px-8 rounded-xl shadow space-y-6"
          >
            <img class="w-8" src="/quote.svg" alt="" />
            <p class="max-w-[17rem]">
              I like getting the SMS & knowing the jobs done. I often refer to
              it, “hope you get a ping today!” because my product
            </p>
            <div class="flex items-center gap-3">
              <img class="size-16 rounded-full" src="/profile.png" alt="" />
              <div class="space-y-1">
                <img class="w-20" src="/stars.png" alt="" />
                <p class="font-bold">Mike Torello</p>
                <p class="text-[#454747]">CEO of Initech</p>
              </div>
            </div>
          </div>
          <div
            class="bg-[#004852] text-black py-10 px-8 rounded-xl shadow space-y-6"
          >
            <img class="w-8" src="/quote.svg" alt="" />
            <p class="max-w-[17rem] text-white">
              I like getting the SMS & knowing the jobs done. I often refer to
              it, “hope you get a ping today!” because my product
            </p>
            <div class="flex items-center gap-3">
              <img class="size-16 rounded-full" src="/profile.png" alt="" />
              <div class="space-y-1">
                <img class="w-20" src="/stars.png" alt="" />
                <p class="font-bold text-white">Mike Torello</p>
                <p class="text-gray-400">CEO of Initech</p>
              </div>
            </div>
          </div>
          <div
            class="bg-white text-black py-10 px-8 rounded-xl shadow space-y-6"
          >
            <img class="w-8" src="/quote.svg" alt="" />
            <p class="max-w-[17rem]">
              I like getting the SMS & knowing the jobs done. I often refer to
              it, “hope you get a ping today!” because my product
            </p>
            <div class="flex items-center gap-3">
              <img class="size-16 rounded-full" src="/profile.png" alt="" />
              <div class="space-y-1">
                <img class="w-20" src="/stars.png" alt="" />
                <p class="font-bold">Mike Torello</p>
                <p class="text-[#454747]">CEO of Initech</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <button
            class="border border-green-500 text-black md:py-3 font-semibold capitalize max-sm:text-xs py-2 px-6 rounded-full"
          >
            view more
          </button>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="container">
      <div
        class="container grid lg:grid-cols-2 gap-12 md:gap-24 bg-gradient-3 pt-8 md:pt-20 bg-no-repeat bg-cover bg-center rounded-xl"
      >
        <div class="flex flex-col justify-center max-sm:order-1">
          <div class="space-y-8">
            <h2
              class="text-3xl md:text-5xl font-bold font-inter max-w-2xl text-white uppercase"
            >
              Are you ready to start?
            </h2>
            <p class="text-gray-300">
              Personalize your settings, follow your progress, archive your
              highlights and notes automatically Glose is the ultimate reading
            </p>
            <button
              class="bg-green-600 text-white md:py-3 font-semibold capitalize max-sm:text-xs py-2 px-6 rounded-full"
            >
              get started
            </button>
          </div>
        </div>
        <div class="max-sm:order-2 flex items-center justify-end">
          <img class="" src="/bar-code.png" alt="" />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="container flex flex-col items-center space-y-6 pb-8">
      <div class="flex flex-col items-center gap-4">
        <img class="w-64" src="/upgrade-logo.svg" alt="" />
        <div class="flex items-center gap-4">
          <img class="w-36" src="/apple.png" alt="" />
          <img class="w-36" src="/google.png" alt="" />
        </div>
      </div>
      <div
        class="flex items-center flex-wrap max-md:justify-center max-sm:text-sm gap-6 text-[#646161]"
      >
        <a href="#" class="hover:text-gray-300">Personal Loan</a>
        <a href="#" class="hover:text-gray-300">One Card</a>
        <a href="#" class="hover:text-gray-300">Savings</a>
        <a href="#" class="hover:text-gray-300">Checking</a>
        <a href="#" class="hover:text-gray-300">Contact</a>
        <a href="#" class="hover:text-gray-300">Help</a>
        <a href="#" class="hover:text-gray-300">Support</a>
      </div>
      <div class="flex flex-wrap gap-4 items-center">
        <span
          class="bg-[#006022] rounded-full flex items-center justify-center size-8 text-white cursor-pointer"
        >
          <Icon name="mdi:twitter" size="1em" />
        </span>
        <span
          class="bg-[#006022] rounded-full flex items-center justify-center size-8 text-white cursor-pointer"
        >
          <Icon name="ri:facebook-fill" size="1em" />
        </span>
        <span
          class="bg-[#006022] rounded-full flex items-center justify-center size-8 text-white cursor-pointer"
        >
          <Icon name="hugeicons:instagram" size="1em" />
        </span>
        <span
          class="bg-[#006022] rounded-full flex items-center justify-center size-8 text-white cursor-pointer"
        >
          <Icon name="ri:linkedin-fill" size="1em" />
        </span>
      </div>
      <p class="font-bold max-sm:text-sm">
        Send Your Feedback :<span class="font-normal">moc.edargpu@tcatnoc</span>
      </p>
      <div
        class="flex items-center max-sm:text-sm flex-wrap max-md:justify-center gap-4 md:divide-x-2 divide-gray-400"
      >
        <a href="#" class="hover:text-gray-300 px-4">Privacy Policy</a>
        <a href="#" class="hover:text-gray-300 px-4">Terms & Condition</a>
        <a href="#" class="hover:text-gray-300 px-4">Cookie Notice</a>
        <a href="#" class="hover:text-gray-300 px-4">Copyright Policy</a>
        <a href="#" class="hover:text-gray-300 px-4">Data Policy</a>
      </div>
      <p class="max-sm:text-sm font-medium">
        &copy; 2024 Upgrade. All rights reserved.
      </p>
    </footer>
  </div>
</template>
