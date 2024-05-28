<script setup>
</script>
<template>
    <div class="font-poppins bg-brown-sugar relative">
        <div id="container" class="p-20 w-auto flex px-24 justify-center relative">
            <div
                class="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
                <div class="mr-10">
                    <img class="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
                        src="https://ucarecdn.com/833d0fe1-c3b5-4843-b62c-fed9467aceeb/imageOfMyself.jpeg"
                        alt="image of myself" />
                </div>
                <div class="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
                    <h1 class="text-white font-bold text-3xl mt-6 mb-8">
                        Hey it's me, Aydin Vesali Moghaddam
                    </h1>

                    <p class="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
                        I'm Aydin, an 18-year-old high schooler with a passion for web
                        development. My tech journey started with HTML, CSS, and JavaScript,
                        and I was hooked by the thrill of crafting dynamic, interactive
                        websites. As I grew, Node.js and ReactJS became my go-to tools for
                        building scalable applications. Feel free
                        to connect if you have questions, collaboration ideas, or just want to
                        discuss the latest in web development!
                    </p>

                    <div id="social" class="flex flex-wrap justify-start items-center gap-4">
                        <a rel="noopener" target="_blank" href="https://github.com/iam-aydin"
                            class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
                            <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                                src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg" width="20px"
                                height="20px" alt="Github" />
                            <span>Visit my Github</span>
                        </a>
                        <a rel="noopener" target="_blank"
                            href="https://www.linkedin.com/in/aydin-vesali-moghaddam-82a860275/"
                            class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
                            <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                                src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
                                width="20px" height="20px" alt="LinkedIn" />
                            <span>Follow me on Linkedin</span>
                        </a>
                        <a rel="noopener" target="_blank" href="https://twitter.com/ichbinaydin"
                            class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
                            <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                                src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/" width="20px"
                                height="20px" alt="Twitter" />
                            <span>Follow me on Twitter</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="bg-gray-100">
        <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div class="max-w-lg">
                    <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                    <p class="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        quis
                        eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur
                        consequat.
                        Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet
                        nulla
                        malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                    <div class="mt-8">
                        <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                            <span class="ml-2">&#8594;</span></a>
                    </div>
                </div>
                <div class="mt-12 md:mt-0">
                    <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image"
                        class="object-cover rounded-lg shadow-md">
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>
