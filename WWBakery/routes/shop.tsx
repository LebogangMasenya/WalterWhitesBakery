import { define } from "../utils"
import { Head } from "fresh/runtime";
import { ProductList } from "../components/ProductList";

export default define.page(() => {
    return (
        <div class="min-h-screen bg-stone-50 text-stone-900 font-sans">
            <Head>
                <title>Walter White's Bakery | High Purity Pastries</title>
            </Head>

            <header class="bg-stone-900 text-white py-16 px-4 border-b-8 border-blue-500">
                <div class="max-w-4xl mx-auto text-center">
                    <h1 class="text-6xl font-black tracking-tighter uppercase mb-4">
                        Walter White's <span class="text-blue-400">Bakery</span>
                    </h1>
                    <p class="text-xl text-stone-400 italic">"We only bake the purest ingredients."</p>
                </div>
            </header>

            <main class="max-w-6xl mx-auto px-6 py-12">
                <section class="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div class="space-y-6">
                        <p class="text-lg leading-relaxed text-stone-700">
                            Enjoy our delicious baked goods! From the star of the hit series
                            <span class="font-bold text-stone-900"> "Breaking Bad"</span>.
                            Our kitchen is a controlled environment where precision meets flavor.
                        </p>

                        <div class="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                            <h3 class="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Today's Batch</h3>
                            <ul class="space-y-2">
                                <li class="flex items-center gap-2">🔹 <span class="font-medium">Blue "Legal" Cookies</span></li>
                                <li class="flex items-center gap-2">🍰 <span class="font-medium">Heisenberg's Chocolate Cake</span></li>
                                <li class="flex items-center gap-2">🍗 <span class="font-medium">Los Pollos Hermanos Fried Chicken</span></li>
                            </ul>
                        </div>

                        <p class="text-stone-500 text-sm">
                            Visit us at our shop or order online for a taste of the best treats in town!
                            <span class="block mt-2 font-mono font-bold text-stone-800 underline decoration-blue-500">Tread lightly.</span>
                        </p>
                    </div>

                    <div class="bg-stone-200 aspect-video rounded-2xl overflow-hidden shadow-inner flex items-center justify-center text-stone-400">
                        <img src="/jeremy-yap.jpg" alt="The Lab" class="object-cover w-full h-full" />
                    </div>
                </section>

                <hr class="border-stone-200 mb-16" />

                <section>
                    <div class="flex items-center justify-between mb-8">
                        <h2 class="text-3xl font-bold tracking-tight">Our Products</h2>
                    </div>
                    <ProductList />
                </section>
            </main>

        </div>
    )
})