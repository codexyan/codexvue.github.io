<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import Gallery from '../components/detail/Gallery.vue'

onMounted(() => {
    window.scrollTo(0,0)
})
</script>

<template>
    <main>
        <div class="container p-2 mx-auto my-10 max-w-7xl">
            <div class="flex flex-row flex-wrap py-4">
                <!-- Main -->
                <main role="main" class="w-full px-4 pt-1 sm:w-2/3 md:w-2/3">
                    <h1 class="mb-2 text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-4xl">
                        Mobile UI Kit
                    </h1>
                    <p class="text-gray-500">Mobile UI Kit</p>

                    <Gallery />

                    <section class="" id="orders">
                        <h1 class="mt-8 mb-3 text-lg font-semibold">About</h1>
                        <div class="text-gray-500">
                            <p class="pb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatem suscipit modi natus
                                optio, voluptate blanditiis illo nemo culpa temporibus, soluta excepturi consectetur
                                expedita aperiam voluptatibus reiciendis quidem! Debitis quod consequatur, dolores quisquam
                                esse amet dolore fugiat vero recusandae nobis illo animi explicabo soluta cumque
                                necessitatibus reiciendis aliquid asperiores sapiente.
                            </p>
                            <p class="pb-4">
                                Suitable for : <br>
                                - UIUX Design <br>
                                - UIUX Design <br>
                                - UIUX Design <br>
                                - UIUX Design <br>
                                - UIUX Design <br>
                            </p>
                        </div>
                    </section>
                </main>

                <!-- Aside -->
                <aside class="w-full px-4 sm:w-1/3 md:w-1/3">
                    <div class="sticky top-0 w-full pt-4 md:mt-24">
                        <div class="p-6 border rounded-2xl">
                            <div class="mb-4">
                                <div class="flex mb-2">
                                    <div>
                                        <img src="../assets/img/icon-figma.png" alt="" class="w-16" />
                                    </div>
                                    <div class="block mt-1 ml-4">
                                        <h3 class="font-semibold text-md">Figma</h3>
                                        <p class="text-gray-400 text-md">Project Included</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-4">
                                <div class="flex mb-2">
                                    <div>
                                        <img src="../assets/img/icon-sketch.png" alt="" class="w-16" />
                                    </div>
                                    <div class="block mt-1 ml-4">
                                        <h3 class="font-semibold text-md">Sketch</h3>
                                        <p class="text-gray-400 text-md">Project Included</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 class="mt-5 mb-3 font-semibold text-md">Great Features</h1>
                                <ul class="mb-6 text-gray-500">
                                    <li class="mb-2">
                                        Customizable layers
                                        <img src="@/assets/img/icon-check.png" class="float-right w-5 mt-1" alt="">
                                    </li>
                                    <li class="mb-2">
                                        Documentation
                                        <img src="@/assets/img/icon-check.png" class="float-right w-5 mt-1" alt="">
                                    </li>
                                    <li class="mb-2">
                                        Icon set design
                                        <img src="@/assets/img/icon-check.png" class="float-right w-5 mt-1" alt="">
                                    </li>
                                    <li class="mb-2">
                                        Pre-built UI screens
                                        <img src="@/assets/img/icon-check.png" class="float-right w-5 mt-1" alt="">
                                    </li>
                                    <!-- <li class="mb-2" v-for="feature in features">
                                        {{ feature }}
                                        <img src="../assets/img/icon-check.png" class="float-right w-5 mt-1" alt="" />
                                    </li> -->
                                </ul>
                            </div>

                            <!-- Start ++ Payment Gateway Midtrans -->
                            <RouterLink to="/pricing"
                                class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow">
                                Download Now
                            </RouterLink>
                            <!-- <RouterLink to="/pricing"
                                class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow">
                                Subscribe
                            </RouterLink> -->
                            <!-- end -->
                        </div>
                    </div>
                </aside>

            </div>
        </div>
    </main>
</template>

<style scoped></style>