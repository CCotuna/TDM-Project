<script setup></script>
<template>

    <div class="p-8 rounded-2xl shadow-xl flex items-center justify-center">
        <div class="mr-8">
            <img src="@/assets/OIP10.svg" alt="Your Image" class="w-full lg:w-2/3 h-auto rounded-lg">
        </div>

        <div class="w-2/3 -ms-32">
            <div class="flex">
                <h1 class="custom-font-cinzel-regular text-4xl md:text-5xl lg:text-6xl text-emerald-800">
                    Book a Date</h1>
            </div>
            <div class="custom-font-old-standard-regular grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                    class="w-full bg-gray-100 text-emerald-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="First Name*" />
                <input
                    class="w-full bg-gray-100 text-emerald-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Last Name*" />
                <input
                    class="w-full bg-gray-100 text-emerald-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Type of shooting*" />
                <input
                    class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Subject*" />
                <input
                    class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email" placeholder="Email*" />
                <input
                    class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number" placeholder="Phone*" />
            </div>
            <div class="my-4">
                <textarea placeholder="Message*"
                    class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div class="my-2 w-full md:w-1/2 lg:w-2/4">
                <button class="uppercase text-sm font-bold tracking-wide bg-emerald-900 text-gray-100 p-3 rounded-lg w-full 
                  focus:outline-none focus:shadow-outline">
                    Send Message
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped></style>