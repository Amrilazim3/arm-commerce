<template>
    <!-- 
        apply for "desktop" layout only 
        if user browsing in mobile size, 
        this content will be apply in MainNav component
    -->

    <!-- content for normal user -->
    <nav class="hidden px-6 py-4 text-white bg-gray-700 md:block">
        <div class="flex justify-between">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                class="text-white fill-current h-7"
            >
                <path
                    d="M104 96h-48C42.75 96 32 106.8 32 120V224C14.33 224 0 238.3 0 256c0 17.67 14.33 32 31.1 32L32 392C32 405.3 42.75 416 56 416h48C117.3 416 128 405.3 128 392v-272C128 106.8 117.3 96 104 96zM456 32h-48C394.8 32 384 42.75 384 56V224H256V56C256 42.75 245.3 32 232 32h-48C170.8 32 160 42.75 160 56v400C160 469.3 170.8 480 184 480h48C245.3 480 256 469.3 256 456V288h128v168c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V56C480 42.75 469.3 32 456 32zM608 224V120C608 106.8 597.3 96 584 96h-48C522.8 96 512 106.8 512 120v272c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V288c17.67 0 32-14.33 32-32C640 238.3 625.7 224 608 224z"
                />
            </svg>

            <div class="space-x-4 font-medium">
                <span>Fitness</span>
                <span>Workout</span>
                <span>Supplement</span>
            </div>

            <div class="flex space-x-2 self-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    class="h-5 text-white fill-current"
                >
                    <path
                        d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"
                    />
                </svg>
                <span>0</span>
            </div>
        </div>
    </nav>

    <!-- create another content for admin -->
</template>

<script>
export default {};
</script>
