<script setup>
import LoginForm from '../components/authentication/LoginForm.vue';
</script>

<template>
    <main>
        <div class="relative overflow-hidden bg-white">
            <div class="mx-auto max-w-7xl">
                <div class="flex flex-col items-center w-full min-h-screen pt-6 sm:justify-center sm:pt-0">
                    <!-- Form -->
                    <div class="w-full p-5 mx-auto sm:max-w-md">
                        <h2 class="mb-8 text-3xl font-bold text-center text-black">
                            Selamat Datang
                        </h2>
                        <LoginForm />
                    </div>

                    <!-- Brand Sponsored -->
                    <div class="w-full mx-auto mt-20 sm:max-w-2xl">
                        <img src="../assets/img/brand-logo.svg" alt="brand-logo.svg" class="w-full px-10 md:px-0" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>
