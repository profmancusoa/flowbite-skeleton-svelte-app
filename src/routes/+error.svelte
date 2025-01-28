<script lang="ts">
    import { page } from "$app/state";
    import { dev } from "$app/environment";
    import { redirect } from "@sveltejs/kit";

    // if not session exist redirect error page to login
    // this prevent anyone to understand which routes exists or not
    if (!dev && !page.data.session) {
        redirect(302, "/login");
    }
</script>

<div class="grid h-[calc(100vh-70px)] overflow-auto bg-white dark:bg-gray-800 place-items-center">
    <div class="flex flex-col items-center">
        <div class="text-red-500 font-bold xl:text-9xl text-7xl">404</div>
        <div class="font-bold  xl:text-7xl text-2xl  mt-10 dark:text-gray-100">
            This page does not exist
        </div>
        <div class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
            The page you are looking for could not be found.
        </div>
    </div>        
</div>