<template>
    <Head title="Welcome" />

    <main>
        <div
            style="
                background-image: url('images/gym-background.jpg');
                background-repeat: no-repeat;
                background-size: cover;
            "
        >
            <div
                class="flex items-center justify-center min-h-screen px-4 mx-auto text-center text-white xl:max-w-5xl lg:max-w-4xl sm:px-6 md:px-8"
            >
                <div>
                    <h2 class="text-5xl font-bold">
                        Commerce For
                        <span class="text-orange-400">Healthy</span> And
                        <span class="text-red-400">Strong</span> People
                    </h2>
                    <p class="mt-6 text-lg font-medium">
                        We are selling only the best product from gym,fitness
                        equipment to supplement for body builder, sports people
                        or who wants to lost fat. All our products came from a
                        trusted supplier from U.K
                    </p>
                    <button
                        class="hover:scale-125 transition ease-out delay-75 duration-300 items-center justify-center px-4 py-2 mt-4 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border hover:from-purple-700 hover:to-indigo-700"
                    >
                        <Link href="/products"> View Products Now </Link>
                    </button>
                </div>
            </div>
        </div>

        <div
            class="max-w-2xl px-8 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
        >
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
                Main Category
            </h2>

            <div
                class="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
            >
                <div class="relative group">
                    <div
                        class="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none"
                    >
                        <img
                            src="../assets/gym-equipment.jpg"
                            alt="Gym equipment pictures"
                            class="object-cover object-center w-full h-full lg:w-full lg:h-full"
                        />
                    </div>
                    <div class="mt-4">
                        <h1 class="text-lg font-bold">Gym Equipment</h1>
                    </div>
                </div>

                <div class="relative group">
                    <div
                        class="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none"
                    >
                        <img
                            src="../assets/fitness-equipment.jpg"
                            alt="Fitness equipment pictures"
                            class="object-cover object-center w-full h-full lg:w-full lg:h-full"
                        />
                    </div>
                    <div class="mt-4">
                        <h1 class="text-lg font-bold">Fitness Equipment</h1>
                    </div>
                </div>

                <div class="relative group">
                    <div
                        class="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none"
                    >
                        <img
                            src="../assets/supplement.jpg"
                            alt="Supplement pictures"
                            class="object-cover object-center w-full h-full lg:w-full lg:h-full"
                        />
                    </div>
                    <div class="mt-4">
                        <h1 class="text-lg font-bold">Supplement</h1>
                    </div>
                </div>

                <div class="relative group">
                    <div
                        class="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none"
                    >
                        <img
                            src="../assets/more.jpg"
                            alt="more variations"
                            class="object-cover object-center w-full h-full lg:w-full lg:h-full"
                        />
                    </div>
                    <div class="mt-4">
                        <h1 class="text-lg font-bold">More</h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative py-16 bg-gray-50 sm:py-24 lg:py-32">
            <div class="relative">
                <div
                    class="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
                >
                    <h2
                        class="text-base font-semibold tracking-wider uppercase text-cyan-600"
                    >
                        New
                    </h2>
                    <p
                        class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                    >
                        Buy with bundle!!!
                    </p>
                    <p class="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
                        Buy all equipment all in one and get the best deals to
                        save up your pocket.
                    </p>
                </div>
                <div
                    class="grid max-w-md gap-8 px-4 mx-auto mt-12 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl"
                >
                    <div
                        class="flex flex-col overflow-hidden rounded-lg shadow-lg"
                    >
                        <div class="flex-shrink-0">
                            <img
                                class="object-cover w-full h-48"
                                src="../assets/gym-bundle-package.jpg"
                                alt="bundle-package-one"
                            />
                        </div>
                        <div
                            class="flex flex-col justify-between flex-1 p-6 bg-white"
                        >
                            <div class="flex-1">
                                <p
                                    class="block mt-2 text-xl font-semibold text-gray-900"
                                >
                                    Gym bundle starter
                                </p>
                                <p class="mt-3 text-base text-gray-500">
                                    Fot the people who want to workout at home
                                    and doesn't have much time to go to the gym.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex flex-col overflow-hidden rounded-lg shadow-lg"
                    >
                        <div class="flex-shrink-0">
                            <img
                                class="object-cover w-full h-48"
                                src="../assets/fitness-bundle-package.jpg"
                                alt="fitness-bundle-package"
                            />
                        </div>
                        <div
                            class="flex flex-col justify-between flex-1 p-6 bg-white"
                        >
                            <div class="flex-1">
                                <p
                                    class="block mt-2 text-xl font-semibold text-gray-900"
                                >
                                    Fitness-For-Life Bundle
                                </p>
                                <p class="mt-3 text-base text-gray-500">
                                    Suitable for fat burn, light wight workout
                                    and to get those numb mussle running up.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex flex-col overflow-hidden rounded-lg shadow-lg"
                    >
                        <div class="flex-shrink-0">
                            <img
                                class="object-cover w-full h-48"
                                src="../assets/supplement-bundle-package.jpg"
                                alt=""
                            />
                        </div>
                        <div
                            class="flex flex-col justify-between flex-1 p-6 bg-white"
                        >
                            <div class="flex-1">
                                <p
                                    class="block mt-2 text-xl font-semibold text-gray-900"
                                >
                                    Shreded starter package
                                </p>
                                <p class="mt-3 text-base text-gray-500">
                                    For those who want to build mussle and burn
                                    some fat, This bundle package is perfect for
                                    you cause it come with 3 best pre workout
                                    and post workout supplement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {};
</script>
